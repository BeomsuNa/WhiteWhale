import { ProductCard } from '@/lib/utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductCategory } from '@/components/context/ProductCategoryContext';
import { v4 as uuidv4 } from 'uuid';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Label } from '@radix-ui/react-label';
import Skeleton from '../components/ui/Skele';
import useProductsData from '@/hooks/useProductsData';
import ProductCarousel from '@/components/ui/ProductCarousel';

const MainPageLayOut = () => {
  const { setCategory } = useProductCategory();
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    navigate('/Products');
  };

  //   return (
  //     <main>
  //       <div className="main-page-layout p-20">
  //         <Label className="flex text-lg font-bold">신상품</Label>
  //         {[...Array(skeletonCount)].map(() => (
  //           <div key={uuidv4()} className="category-section">
  //             <Label className="mt-4 font-bold">keyboard</Label>
  //             <Label className="absolute right-64 mb-5 text-sm hover:text-white">
  //               전체보기
  //             </Label>
  //             <hr className="border-t border-gray-300 m-5" />
  //             <Carousel
  //               opts={{ loop: true }}
  //               plugins={[]}
  //               orientation="horizontal"
  //               setApi={() => {}}
  //             >
  //               <CarouselContent>
  //                 {[...Array(skeletonCount)].map(() => (
  //                   <CarouselItem key={uuidv4()} className="basis-1/5">
  //                     <Skeleton />
  //                   </CarouselItem>
  //                 ))}
  //               </CarouselContent>
  //               <CarouselPrevious />
  //               <CarouselNext />
  //             </Carousel>
  //           </div>
  //         ))}
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <main>
      <div className="main-page-layout p-20 ">
        <Label className="flex text-lg font-bold mb-5">신상품</Label>
        <ProductCarousel />
        <button
          className="absolute right-64 text-sm cursor-pointer hover:underline hover:text-white"
          type="button"
        >
          전체보기
        </button>
        <hr className="border-t border-gray-300 m-5" />
      </div>
    </main>
  );
};

export default MainPageLayOut;
