import { Product } from '@/lib/utils';
import React from 'react';

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="w-full h-1/5 flex">
      <div className="w-1/6">img</div>
      <div className="w-1/6">제목 : {product.productName}</div>
      <div className="w-2/6">설명 :{product.productDescription}</div>
      <div className="w-1/6">가격 : {product.productPrice}</div>
      <div className="w-1/6">수량 : {product.productQuantity}</div>
    </div>
  );
};

export default ProductCard;
