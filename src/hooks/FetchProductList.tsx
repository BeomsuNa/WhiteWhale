import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MainProductCard from '../components/ui/MainProductCard';
import { useFetchInfiniteProducts } from './UseFetchData';
import { Product } from '@/lib/utils';

const ProductList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchInfiniteProducts();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div>
      {data?.pages.map(page => (
        <React.Fragment key={page.products[0]?.id}>
          {page.products.map((product: Product) => (
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
