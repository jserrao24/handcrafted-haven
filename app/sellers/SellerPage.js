import React from 'react';
import './SellerPage.css';
import carolsThumbnail1 from './images/clay.webp';
import darlaThumbnail2 from './images/crochet.webp';
import larryThumbnail3 from './images/clay.webp';
import allisonThumbnail4 from './images/paint.webp';
import sarahThumbnail5 from './images/metal.webp';

const sellersData = [
  {
    sellersId: 1,
    name: 'Carlose Woodward',
    productsId: '(unknown)',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYRbc8EhK_00t5oSG9K9uXbpYGobVaA4xqrwa9PCZu8wMpgL_1xs7mtgTxNmtwcJDzyJeFeuMO2cnA_igiA8S8ZKssWT=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQHKSVpvLh8j1Jwp9EgDffffayDqjiOm308VN37-Qx__dk1p_rLZv9kpLyx5XB98RkeOlapu1WNNi3FcLyY8D3ZBHmGCg=s2560',
    sellerBio:
      "Hey there, I'm Carlose, a dedicated woodworker showcasing my craft at Handcrafted Haven. Crafting bespoke furniture and decor, each piece I create exudes timeless sophistication, leaving a lasting impression in the world of handcrafted woodwork.",
  },
  {
    sellersId: 2,
    name: 'Darla Thread',
    productsId: '(unknown)',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYShv-S712Zu39Kh6XprX8ZXfAiDZnGmqMkuQQdOFqHPj8SvbYmPecaYuR_vLqkpXMsdwBPNMTQuNPxH3YcOz2blM13Z=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYSQyV6umQ03jwilVYYZAqbar8ZENU7EGz8gg5DyolhJPPoNALvsRCitAncFvqH-xAwj8mjYKxZNODnde_JyMjSLJdhaeQ=s2560',
    sellerBio:
      "Greetings, I'm Darla, the artisan behind Textile Enchantment, now available at Handcrafted Haven. Elevating fabric to an art form, my handmade textiles blend tradition with contemporary design. Each creation tells stories through patterns and colors, embodying the seamless fusion of craftsmanship and artistic expression.",
  },
  {
    sellersId: 3,
    name: 'Larry Clayton',
    productsId: '(unknown)',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQthKLfexz-m-uzOvFAfoSMsCiI0gMZwBUNdReNkg98v1kqgAzejZCWpXJ1ytdK-aRmFDYB_eE0MOJK0eRti4JXKn9i=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQoyCrphtDhwR6_rn_jpQlWLsH7qxtb2giylWQx3ojILAvOZUaLWMyhs42YrwrrY5hFwdPRSu58mTLmSrd5fiSDhir5mw=s2560',
    sellerBio:
      "Hello, I'm Larry, a potter with a passion for handcrafted ceramics at Handcrafted Haven. Sculpting clay into functional and decorative pieces, my creations are a harmonious blend of form and function, showcasing the timeless beauty of handcrafted pottery.",
  },
  {
    sellersId: 4,
    name: 'Allison Artison',
    productsId: '(unknown)',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQpeOl1Bwai4KfdH0cDu1H23dVEu86Ez46NlmWZFihMTP3v2731q0_FQ4WsPpi1GmsAwG2TNEWLiLHQG42DSAOw9vF2Mg=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYR5ksFvZJAZTKhhF73AA0os7dB4YxRUeB9oU6HV_aDAJHu0MBHynTQlGCYZnwTWh1uymHukqFy8pJt6Q_YuRFxUcZNyhQ=s2560',
    sellerBio:
      "Hi there, I'm Allison, a visionary painter now featuring my artworks at Handcrafted Haven. Transforming blank canvases into visual symphonies, my pieces are a burst of expression and color, creating a unique journey for art enthusiasts.",
  },
  {
    sellersId: 5,
    name: 'Sarah Brass',
    productsId: '(unknown)',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQIpnUMLKHKG40r0zO4WwrZzeNYP89lGJf89nKU8tbjs1IWf3Ao7xeDJiunoY6Wut_79wPDJd4X3giO5oNn_v-awS-2=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYTeAO5c3W8y1sYfGaabg8O_xTaSYiURNG7S69Iy2T1PAy5I-4iuoJUDHiqrGWEsCYPpjp6KPJOyZK0hUJrXfnGwNDGn=s2560',
    sellerBio:
      "Greetings, I'm Sarah, a skilled metalworker presenting my creations at Handcrafted Haven. Shaping metal into captivating works of art, my unique approach to metalcraft infuses each piece with character, offering timeless and captivating metal artworks for those who appreciate craftsmanship.",
  },
];

const SellersPage = () => {
  return (
    <div>
      <div className="sellers-container">
        {sellersData.map((seller) => (
          <div key={seller.sellersId} className="seller-card px-6">
            {/* Display the image */}
            <img src={seller.sellerImage} alt={seller.name} />

            <h2 className="my-4 font-semibold">{seller.name}</h2>
            <p>{seller.sellerBio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellersPage;
