import styles from '@/app/styles/home.module.css';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Home',
};

export default function Page() {
  return (
    <>
      <div className="mt-6 rounded-lg border border-dark bg-light px-6 py-10 text-xl text-gray-800 md:px-20 md:text-3xl md:leading-normal">
        Thank you for Joining us at handcraft haven where we combine craft and creativity
      </div>

      <div className="flex justify-center space-x-10">
        <Link href={'/sellers'}>
          <button className="mt-6 rounded-lg border border-dark bg-brown px-6 py-10 text-xl text-light hover:italic hover:text-dark md:px-20 md:text-3xl md:leading-normal">
            Sellers
          </button>
        </Link>
        <Link href={'/products'}>
          <button className="mt-6 rounded-lg border border-dark bg-brown px-6 py-10 text-xl text-light hover:italic hover:text-dark md:px-20 md:text-3xl md:leading-normal">
            Shop
          </button>
        </Link>
      </div>

      <div className="align-center mt-14 flex flex-col items-stretch gap-4 md:h-1/2 md:flex-row">
        <div className="flex items-center justify-center md:h-full md:w-3/5">
          <Image
            src="/images/girl-creating.jpg"
            alt="girl-creating"
            className="mx-2 h-full w-full rounded-lg border border-dark object-cover"
            width={300}
            height={500}
          />
        </div>
        <div className="flex items-center justify-center md:h-full md:w-3/5">
          <Image
            src="/images/crafts.webp"
            alt="crafts"
            className="mx-2 h-full w-full rounded-lg border border-dark object-cover"
            width={300}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
