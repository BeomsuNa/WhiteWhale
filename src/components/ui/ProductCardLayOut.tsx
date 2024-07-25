import { Product } from '@/lib/utils';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface ProductProps {
  product: Product;
}

const ProductCardLayOut: React.FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    console.log('이동');
    navigate(`/edit/${product.id}`);
  };

  return (
    <div className="w-full h-1/5 flex p-5 border border-black mb-5 items-center">
      <Link to={`/edit/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-1/6 h-auto px-5 "
        />
        <div className="w-1/6">제목 : {product.productName}</div>
        <div className="w-2/6">설명 :{product.productDescription}</div>
        <div className="w-1/6">가격 : {product.productPrice}</div>
        <div className="w-1/6">수량 : {product.productQuantity}</div>
      </Link>
    </div>
  );
};

export default ProductCardLayOut;
