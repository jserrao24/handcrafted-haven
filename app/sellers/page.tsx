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
              width={300}
              height={300}
              alt={seller.name}
            />
            <h2 className="my-4 font-semibold">{seller.name}</h2>
            <p>{seller.seller_bio}</p>
            <div className="products-container">
        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};