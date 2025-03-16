import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './carousel';

import MainProductCard from '../MainProductCard';
import useProductsData from '@/hooks/useProductsData';
import { Product } from '@/lib/utils';

const ProductCarousel = () => {
  const { data: prodcuts = [], isLoading, error } = useProductsData();

  const categoryNames: Record<number, string> = {
    1: '커스텀키보드',
    2: '키캡',
    3: '액세서리',
  };

  if (isLoading) {
    const skeletonCount = 5;
  }

  if (error) {
    return <div>에러 발생</div>;
  }

  const categorizedProducts = prodcuts.reduce<Record<number, Product[]>>(
    (acc, product) => {
      if (!acc[product.cartegory_id]) {
        acc[product.cartegory_id] = [];
      }
      acc[product.cartegory_id].push(product);
      return acc;
    },
    {} as Record<number, Product[]>,
  );

  return (
    <div>
      {Object.entries(categorizedProducts).map(
        ([categoryId, categoryProducts]) => (
          <div key={categoryId} className="mb-10">
            <h2 className="text-xl font-bold mb-3">
              {categoryNames[Number(categoryId)]}
            </h2>
            <Carousel
              opts={{ loop: true }}
              plugins={[]}
              orientation="horizontal"
              setApi={() => {}}
            >
              <CarouselContent className="flex gpa-4">
                {categoryProducts.map(product => (
                  <CarouselItem
                    key={product.id}
                    className="flex-shrink-0 basis-1/5 "
                  >
                    <MainProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ),
      )}
      ;
    </div>
  );
};

export default ProductCarousel;
