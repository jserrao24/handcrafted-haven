import styles from '@/app/styles/home.module.css';
import { Metadata } from 'next';
import './SellerPage.css';
import { fetchProducts, fetchSellers } from '../lib/data';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Sellers',
};

export default async function Page() {
  const sellers = await fetchSellers();
  const products =await fetchProducts();
  return (
    <div>
      <div className="sellers-container">
        {sellers.map((seller) => (
          <div key={seller.id} className="seller-card px-6">
            <Image
              src={seller.seller_image}
              width={200}
              height={200}
              alt={seller.name}
            />
            <h2 className="my-4 font-semibold">{seller.name}</h2>
            
            <div className="products-container">
              {products.filter(product => product.seller_id === seller.id).map((product) => (
                <div key={product.id}>
                  <Image src={product.image_url} width={100} height={100} alt={product.name} />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};