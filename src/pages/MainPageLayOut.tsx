import MainProductCard from '@/components/ui/MainProductCard';
import { useFetchData, useFetchProductCardData } from '@/hooks/UseFetchData';
import React from 'react';

const MainPageLayOut:React.FC = () => {
  const [data: products, isLoading, error] = useFetchProductCardData();

  if (isLoading) return <div>메인페이지레이아웃에서 Loading</div>
  if(error) return <div> Error: 메인페이지레이아웃에서 에러 발생</div>


  return (
    <div className="flex" id="mainPageLayoutSection">
  {products?.map(product => (
    <MainProductCard key={product.id} product={product} />
  ))}
    </div>
  );
};

export default MainPageLayOut;
