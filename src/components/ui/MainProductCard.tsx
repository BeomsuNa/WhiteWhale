import React from 'react';
import { ProductCard } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface MainProductCardProps {
  product: ProductCard;
}

const MainProductCard: React.FC<MainProductCardProps> = ({ product }) => {
  if (!product) {
    alert('정보를 받아오지 못했음');
    return <div>Loading....</div>;
  }

  return (
    <div>
      <div
        className="w-64 h-64 rounded-xl border border-white m-3 hover:bg-customOrange hover:border-black hover:border-2 transition-colors duration-200 group"
        id="cardBorderSection"
      >
        <Link to={`/buy/${product.id}`} state={{ product }}>
          <div
            className="w-full h-2/3 overflow-hidden flex justify-center items-center "
            id="MainProductCardImgSection"
          >
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="w-48 h-36 object-cover border border-black border-0.5"
            />
          </div>
          <div className="w-full border-t border-white mb-1 group-hover:border-black group-hover:border-1" />
          <div
            className="flex flex-col justify-center items-center  h-1/3 "
            id="MainCardGuideLine"
          >
            <div
              id="mainCardTitle"
              className="text-white font-bold group-hover:text-black "
            >
              {product.productName}
            </div>
            <div className="w-full border-t border-white my-2 group-hover:border-black group-hover:border-1" />
            <div
              id="mainCardPrice"
              className="text-white font-bold group-hover:text-black"
            >
              {product.productPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainProductCard;
