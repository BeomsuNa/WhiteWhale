import React, { useEffect, useState } from 'react';

import MainProductCard from '@/components/ui/MainProductCard';
import { useInView } from 'react-intersection-observer';
import { Product, ProductCard } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid';
import useProductsData from '@/hooks/useProductsData';
import { useLocation, useSearchParams } from 'react-router-dom';
import SortSelector from '@/components/ui/SortSelector';

const AllProductPage = () => {
  const [searchParams] = useSearchParams();
  const categoryId = Number(searchParams.get('category')) || null;
  const { data, isLoading, error } = useProductsData();
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState('ascPrice');
  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (data) {
      const allProducts = data;
      const filteredProducts = categoryId
        ? allProducts.filter(product => product.cartegory_id === categoryId)
        : allProducts;
      setSortedProducts(filteredProducts);
    }
  }, [categoryId, data]);

  if (isLoading) {
    return <div>Loadinhg...</div>;
  }
  if (error) {
    return <div>에러 발생</div>;
  }

  return (
    <main>
      <div className="p-20">
        <div className="flex items-center justify-between px-7 ">
          <div className="flex">
            <h6>
              {{
                1: '키보드',
                2: '키캡',
                3: '악세서리',
              }[categoryId as number] || '전체'}
            </h6>
            <h6 className="font-bold">{sortedProducts.length}</h6>
          </div>
          <div className="flex justify-between">
            <SortSelector
              sortOption={sortOption}
              setSortOption={setSortOption}
              products={sortedProducts}
              setSortedProducts={setSortedProducts}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sortedProducts.map(product => (
            <MainProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-wrap justify-start">
          <div ref={ref} className="w-full h-full" />
        </div>
      </div>
    </main>
  );
};

export default AllProductPage;
