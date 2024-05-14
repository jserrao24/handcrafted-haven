import { fetchProductsBySeller, fetchSellerById } from '@/app/lib/data';
import Image from 'next/image';
import ProductCard from '../products/product-card';
import { auth } from '@/auth';
import AddProductForm from './add-product-form';

export default async function SellerDetails() {
  const session = await auth();
  const seller = await fetchSellerById(session?.user?.id || 'default');
  const products = await fetchProductsBySeller(session?.user?.id || 'default');

  return (
    <>
      {seller && (
        <>
          <div className="container mx-auto bg-lightGreen p-4 md:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8">
              <div className="mb-6 max-w-full md:mb-0">
                <Image
                  src={seller.seller_image}
                  alt={seller.name}
                  width={500}
                  height={500}
                  className="rounded-md"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center rounded-lg border border-gray-300 bg-[#feffea] p-6 text-center shadow-lg">
                <div>
                  <h1 className="mb-2 text-2xl font-bold md:text-3xl">
                    {seller.name}
                  </h1>
                  <p className="mb-4">{seller.seller_bio}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <AddProductForm />
          </div>
          <div className="grid grid-cols-1 gap-16 p-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
}
