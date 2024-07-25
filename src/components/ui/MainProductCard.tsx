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
        className="w-64 h-64 rounded-xl border border-white m-3"
        id="cardBorderSection"
      >
        <Link to={`/buy/${product.id}`} state={{ product }}>
          <div className="w-full h-2/3">
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="object-contain"
            />
          </div>
          <div
            className="flex flex-row justify-between items-center  h-1/3 "
            id="MainCardGuideLine"
          >
            <div id="mainCardTitle" className="text-white font-bold flex-1 ">
              {product.productName}
            </div>
            <div className="h-full border-l border-white mx-2" />
            <div id="mainCardPrice" className="text-white font-bold flex-1">
              {product.productPrice}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainProductCard;
