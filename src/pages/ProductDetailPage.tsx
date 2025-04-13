import { Button } from '@/components/ui/radixUi/button';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from '@/lib/utils';

import MainProductCard from '@/components/ui/MainProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/Carousel/carousel';
import { useCart } from '@/components/context/CartContext';
import useProductsData from '@/hooks/useProductsData';

interface MainProductCardProps {
  sortOption: string;
  onClose: () => void;
}

const ProductDetailPage: React.FC<MainProductCardProps> = ({
  sortOption,
  onClose,
}) => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { data: products } = useProductsData();
  // const { addToCart } = useCart();
  const [orderProductCount, setOrderProductCount] = useState<number>(1);
  // const [finishiCart, setFinishiCart] = useState(false);
  // const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  const incrementCount = () => {
    setOrderProductCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setOrderProductCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const currentProduct = products?.find(
    c => Number(c.id) === Number(productId),
  );
  console.log('받은 curretn:', currentProduct);
  console.log('받은 product:', products);
  if (!currentProduct) {
    return <div>상품을 찾을 수 없습니다. 다시 로그인해주세요</div>;
  }

  const goToBaseketPagae = () => {
    navigate('/basket');
  };
  return (
    <article className="h-full w-full">
      <div className="h-3/5 flex items-center justify-center">
        <div>
          <figure className="w-96 h-96 border mr-10">
            <img
              src={currentProduct.imageLink}
              alt={currentProduct.productName}
              className="w-full h-full object-cover"
            />
            <figcaption className="sr-only">
              {currentProduct.productName}
            </figcaption>
          </figure>
        </div>
        <div className="h-full  flex flex-col items-center justify-center">
          <header className="w-full divide-y divide-y-0.5 divide-slate-600">
            <h1 className="text-3xl  w-full text-left my-5">
              {currentProduct.productName}
            </h1>
            <div className="w-full">
              <h1 className="text-2xl font-bold w-full text-left my-5">
                남은 수량 :{' '}
                {currentProduct.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </h1>
            </div>
            <div className="w-full">
              <h1 className="text-xl  w-full text-left my-5">
                남은 수량 : {currentProduct.stock}
              </h1>
            </div>

            <div className="w-full">
              <h1 className="text-xl  w-full text-left my-5">
                구매수량 :
                <button
                  className="border border-gray-300 bg-gray-200 text-gray-800 px-3 py-1 rounded mx-1"
                  onClick={decrementCount}
                  type="button"
                >
                  -
                </button>
                {orderProductCount}
                <button
                  className="border border-gray-300 bg-gray-200 text-gray-800 px-3 py-1 rounded mx-1"
                  onClick={incrementCount}
                  type="button"
                >
                  +
                </button>
              </h1>
            </div>

            <div className="w-full">
              <h1 className="text-2xl font-bold mt-5 text-left">
                총 상품 가격 :{' '}
                {(currentProduct.price * orderProductCount)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </h1>
            </div>
          </header>
          <main className="my-5 space-x-10">
            <Button className="px-10">구매하기</Button>
            {/* {finishiCart === true ? (
              <Button className="px-7" onClick={goToBaseketPagae}>
                장바구니보기
              </Button>
            ) : (
              <Button className="px-7" onClick={handleAddToCart}>
                장바구니담기
              </Button>
            )} */}
          </main>
        </div>
      </div>
      <footer className=" justify-center">같은 카테고리의 다른 상품들</footer>
    </article>
  );
};

export default ProductDetailPage;
