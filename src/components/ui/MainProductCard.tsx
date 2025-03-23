import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface MainProductCardProps {
  product: Product;
}

const MainProductCard: React.FC<MainProductCardProps> = ({ product }) => {
  if (!product) {
    alert('정보를 받아오지 못했음');
    return <div>Loading....</div>;
  }

  return (
    <article
      className=" rounded-xl m-3 sm:w-48 md:w-56 lg:w-72 min-w-[180px] aspect-[3/4]"
      id="cardBorderSection"
    >
      <Link to={`/buy/${product.id}`} state={{ product }}>
        <figure
          className="w-full h-2/3 flex justify-center item-start "
          id="MainProductCardImgSection"
        >
          <img
            src={product.imageLink}
            alt={product.productName}
            className="w-full h-auto object-cover  hover:opacity-30 hover:bg-black"
          />

          <figcaption className="sr-only">{product.productName}</figcaption>
        </figure>

        <div
          className="flex flex-col justify-center items-start  h-1/3 "
          id="MainCardGuideLine"
        >
          <div id="mainCardTitle">{product.productName}</div>

          <div id="mainCardPrice">
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </div>
        </div>
      </Link>
    </article>
  );
};

export default MainProductCard;
