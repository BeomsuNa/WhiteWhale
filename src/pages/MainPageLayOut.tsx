import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductCategory } from '@/components/context/ProductCategoryContext';
import { Label } from '@radix-ui/react-label';
import ProductCarousel from '@/components/ui/Carousel/ProductCarousel';
import BannerCarousel from '@/components/ui/Carousel/BannerCarousel';

const MainPageLayOut = () => {
  return (
    <main>
      <div className="w-full h-96">
        <BannerCarousel />
      </div>
      <div className="main-page-layout p-20 ">
        <hr className="border-t border-gray-300 m-5" />
        <ProductCarousel />
      </div>
    </main>
  );
};

export default MainPageLayOut;
