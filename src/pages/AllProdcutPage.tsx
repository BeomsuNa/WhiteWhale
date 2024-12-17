import React, { useEffect, useState } from 'react';
import { useFetchInfiniteProducts } from '@/hooks/UseFetchData';
import MainProductCard from '@/components/ui/MainProductCard';
import { useInView } from 'react-intersection-observer';
import { useProductCategory } from '@/components/context/ProductCategoryContext';
import { ProductCard } from '@/lib/utils';
import { useFetchSortedProducts } from '@/hooks/FetchSortedProducts';
import { v4 as uuidv4 } from 'uuid';
import Skele from '@/components/ui/Skele';

const AllProductPage: React.FC = () => {
  const { category, setCategory } = useProductCategory();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchInfiniteProducts();
  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce: false,
  });
  const [sortOption, setSortOption] = useState('productPrice');
  const {
    data: products,
    isLoading,
    error,
  } = useFetchSortedProducts(sortOption);
  const [sortedProducts, setSortedProducts] = useState<ProductCard[]>([]);

  const callbackmessage = () => {
    fetchNextPage();
    console.log('5초후 페이지 생성 완료');
  };

  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      setTimeout(() => callbackmessage(), 5000);
    }
    console.log(
      'ref 감지됨:',
      inView,
      'isFetchingNextPage 상태:',
      isFetchingNextPage,
    );

    fetchNextPage()
      .then(() => {
        console.log('패치완료!');
      })
      .catch(err => {
        console.error('데이터 로딩 중 오류 발생', err);
      });
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  useEffect(() => {
    if (data) {
      const allProducts = data.pages.flatMap(page => page.products);
      const filteredProducts = category
        ? allProducts.filter(product => product.productCategory === category)
        : allProducts;

      const sortedArray = [...filteredProducts];
      if (sortOption === 'updatedAt') {
        sortedArray.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
      } else if (sortOption === 'productPrice') {
        sortedArray.sort((a, b) => b.productPrice - a.productPrice);
      }

      setSortedProducts(sortedArray);
    }
  }, [sortOption, data, category]);

  if (isLoading) {
    return <div>Loadinhg...</div>;
  }

  if (error) {
    return <div>에러 발생</div>;
  }

  const handleSortByPrice = () => {
    setSortOption('productPrice');
  };

  const hanldeAllProduct = () => {
    setCategory(null);
  };
  const hanldeKeyboard = () => {
    setCategory('keyboard');
  };
  const hanldeKey = () => {
    setCategory('key');
  };
  const hanldeaccessory = () => {
    setCategory('accessory');
  };
  return (
    <main>
      <div className="p-20">
        <div>
          {category === null ? (
            <h3 className="text-3xl mb-12"> 전체물품입니다</h3>
          ) : (
            <h3 className="text-3xl"> {category}의 물품입니다</h3>
          )}
          <div className="flex justify-between">
            <div className="flex">
              <button
                onClick={hanldeAllProduct}
                type="button"
                className="lg:hover:underline"
              >
                <h6>전체</h6>
              </button>
              <h6> &nbsp;/&nbsp; </h6>
              <button
                onClick={handleSortByPrice}
                type="button"
                className="lg:hover:underline"
              >
                가격순
              </button>
              <h6> &nbsp;/&nbsp; </h6>
              <button
                onClick={() => setSortOption('updatedAt')}
                className="lg:hover:underline"
                type="button"
              >
                날짜순
              </button>
            </div>
            <div className="flex">
              <div className="flex">
                <button
                  onClick={hanldeKeyboard}
                  type="button"
                  className="lg:hover:underline"
                >
                  <h6>keyboard</h6>
                </button>
                <h6> &nbsp;/&nbsp; </h6>
                <button
                  onClick={hanldeKey}
                  type="button"
                  className="lg:hover:underline"
                >
                  key
                </button>
                <h6> &nbsp;/&nbsp; </h6>
                <button
                  onClick={hanldeaccessory}
                  className="lg:hover:underline"
                  type="button"
                >
                  accessory
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-start">
          {sortedProducts.map(product => (
            <MainProductCard key={product.id} product={product} />
          ))}
          <div ref={ref} className="w-full h-full">
            {isFetchingNextPage && (
              <div className="w-full h-full min-h-0.5">
                <h1 className="w-full h-full">현재 로딩중입니다.</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllProductPage;
