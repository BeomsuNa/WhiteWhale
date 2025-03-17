import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import Skeleton from '../Skeleton ';
import { v4 as uuidv4 } from 'uuid';

const BannerCarousel = () => {
  const BannerImages = [
    '/Banner/Banner1.png',
    '/Banner/Banner2.png',
    '/Banner/Banner3.png',
  ];
  return (
    <div>
      <Carousel
        opts={{ loop: true }}
        plugins={[]}
        orientation="horizontal"
        setApi={() => {}}
      >
        <CarouselContent>
          {BannerImages.map((image, index) => (
            <CarouselItem key={uuidv4()} className=" w-full">
              <img
                src={image}
                alt="Banner{index}"
                className="w-full h-96 object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
