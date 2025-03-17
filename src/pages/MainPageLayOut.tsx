import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductCategory } from '@/components/context/ProductCategoryContext';
import { Label } from '@radix-ui/react-label';
import ProductCarousel from '@/components/ui/Carousel/ProductCarousel';
import BannerCarousel from '@/components/ui/Carousel/BannerCarousel';

const MainPageLayOut = () => {
  const navigate = useNavigate();
  const handleAllProducsPage = () => {
    navigate('/Procucts');
  };
  return (
    <main>
      <div className="w-full h-96">
        <BannerCarousel />
      </div>
      <div className="main-page-layout p-20 ">
        <button
          className="absolute right-64 text-sm cursor-pointer hover:underline hover:text-white"
          type="button"
          onClick={handleAllProducsPage}
        >
          전체보기
        </button>
        <hr className="border-t border-gray-300 m-5" />
        <Label className="flex text-lg font-bold mb-5">신상품</Label>
        <ProductCarousel />
      </div>
    </main>
  );
};

export default MainPageLayOut;
