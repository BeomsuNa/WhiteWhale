import { Label } from '@radix-ui/react-label';
import React from 'react';
import { Product } from '@/lib/utils';

interface MainProductCardProps {
  product: Product;
}

const MainProductCard: React.FC<MainProductCardProps> = ({ product }) => {
  if (!product) {
    console.log('정보를 받아오지 못했음');
    return <div>Loading....</div>;
  }
  return (
    <div>
      <Label>
        <div
          className="w-64 h-64 rounded-xl border border-white"
          id="cardBorderSection"
        >
          <div className="w-full h-1/2 ">{product.imageUrl}</div>
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
        </div>
      </Label>
    </div>
  );
};

export default MainProductCard;
