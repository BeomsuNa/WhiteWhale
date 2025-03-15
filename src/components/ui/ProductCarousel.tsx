import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

import MainProductCard from './MainProductCard';
import useProductsData from '@/hooks/useProductsData';

const ProductCarousel = () => {
  const { data: prodcuts = [], isLoading, error } = useProductsData();

  if (isLoading) {
    const skeletonCount = 5;
  }

  if (error) {
    return <div>에러 발생</div>;
  }

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[]}
      orientation="horizontal"
      setApi={() => {}}
    >
      <CarouselContent className="flex gpa-4">
        {prodcuts?.map(product => (
          <CarouselItem key={product.id} className="flex-shrink-0 basis-1/5 ">
            <MainProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
