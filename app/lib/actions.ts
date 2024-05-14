"use server";
import { object, z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "@/auth";
import bcrypt from 'bcrypt'


export type State = {
  errors?: {
    name?: string[];
    rating?: string[];
    comment?: string[];
  }
  message?: string | null;
}

const ReviewFormSchema = z.object({
  productId: z.string(),
  name: z.string().trim().min(1, { message: "Name is required" }),
  comment: z.string().trim(),
  rating: z.coerce
      .number()
      .gte(1, { message: "Please select a rating"})
      .lte(5, {message: "Please select a rating"}),
});

const ReviewProduct = ReviewFormSchema.omit({ productId: true });
export async function reviewProduct(productId: string, prevState: State, formData: FormData) {

  // validate fields
  const validatedFields = ReviewProduct.safeParse({
    comment: formData.get("comment"),
    rating: formData.get("rating"),
    name: formData.get("name")
  })

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Faild to add review"
    }
  }

   const {name, rating, comment} = validatedFields.data;
   const session = await auth();
   let sqlQuery;
   if (session) {
    try {
      await sql`INSERT INTO reviews (product_id, user_id, username, rating, comment)
      VALUES (${productId}, ${session.user?.id}, ${name}, ${rating}, ${comment})`;
    } catch (error) {
      return {
        message: 'Database Error: Failed to add review.',
      };
   }} else { 
    try {
      await sql`INSERT INTO reviews (product_id, username, rating, comment)
      VALUES (${productId}, ${name}, ${rating}, ${comment})`;
    } catch (error) {
      return {
        message: 'Database Error: Failed to add review.',
      };
   }
   
}
  revalidatePath(`/products/${productId}`);
  redirect(`/products/${productId}`);
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
      if ((error as Error).message.includes('CredentialsSignin')) {
        return 'CredentialSignin';
      }
      throw error;
    }
  }

  export async function logOut() {
    try {
      await signOut()
    } catch (error) {
      // console.log(error)
      throw error
    } 
  }


  export type SignUpState = {
    errors?: {
      name?: string[];
      email?: string[];
      password?: string[];
    }
    message?: string | null;
  };

  
  const SignUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  });
  
  export async function signUp(prevState: SignUpState | undefined, formData: FormData) {
    // Validate fields
    const validatedFields = SignUpSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Validation failed. Please check your input.",
      };
    }
    const { name, email, password } = validatedFields.data;

    try {
      // check for existing user

      try {
        const userExists = await sql`SELECT email FROM users WHERE users.email = ${email.trim()}`
        if (userExists.rowCount) return { message: "An account exists for this user." };
      } catch (error) {
        console.error(error)
        throw error;
      }
      
      // Insert user into the database
      const hashedPassword = await bcrypt.hash(password, 10)
      await sql`
        INSERT INTO users (name, email, password)
        VALUES (${name}, ${email}, ${hashedPassword})
        RETURNING id;`;

      await signIn('credentials', { email: email, password: password, redirect: true, redirectTo: "/" }) 
      redirect("/");
    } catch (error) {
      console.error(error);
      throw error;     
    } 

  }


  // Add product
  export type ProductState = {
    errors?: {
      name?: string[];
      description?: string[];
      imageUrl?: string[];
      price?: string[];
    }
    message?: string | null;
  }
  
  const AddProductSchema = z.object({
    name: z.string().trim().min(1, { message: "Product Name is required" }),
    description: z.string().trim().min(1, { message: "Product Description is required" }),
    imageUrl: z.string().trim().min(1, { message: "Product Image Url is required" }),
    price: z.coerce
        .number()
        .gte(1, { message: "Please enter valid price"})
  });
  
  export async function addProduct(prevState: ProductState | undefined, formData: FormData) {
    const session = await auth();
    if (!session) {
      redirect("/login")
    }
    
    // validate fields
    const validatedFields = AddProductSchema.safeParse({
      description: formData.get("description"),
      imageUrl: formData.get("imageUrl"),
      price: formData.get("price"),
      name: formData.get("name")
    })
  
    if (!validatedFields.success) {
      console.log(validatedFields.error.flatten().fieldErrors)
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Missing fields. Faild to add review"
      }
    }
  
     const {name, description, imageUrl, price} = validatedFields.data;
     
      try {
        await sql`INSERT INTO products (seller_id, name, description, price, image_url)
        VALUES (${session.user?.id}, ${name}, ${description}, ${price}, ${imageUrl})`;
      } catch (error) {
        return {
          message: 'Database Error: Failed to add product.',
        };
     }
    revalidatePath('/profile');
  }
    
  