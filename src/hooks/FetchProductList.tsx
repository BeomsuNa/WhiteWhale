import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import MainProductCard from '../components/ui/MainProductCard';
import { useFetchInfiniteProducts } from './UseFetchData';

const ProductList: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useFetchInfiniteProducts();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.products.map(product => (
            <MainProductCard key={product.id} product={product} />
          ))}
        </React.Fragment>
      ))}
      <div ref={ref}>
        {isFetchingNextPage ? 'Loading more...' : 'Load more'}
      </div>
    </div>
  );
};

export default ProductList;
