import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from '@/lib/utils';
import { useFetchProductCardData } from '@/hooks/UseFetchData';
import MainProductCard from '@/components/ui/MainProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';
import { useCart } from '@/components/context/CartContext';

interface MainProductCardProps {
  sortOption: string;
  onClose: () => void;
}

const ProductDetailPage: React.FC<MainProductCardProps> = ({
  sortOption,
  onClose,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { productId } = useParams<{ productId: string }>();
  const { data: products } = useFetchProductCardData(sortOption);
  const { addToCart } = useCart();
  const [orderProductCount, setOrderProductCount] = useState<number>(1);
  const [finishiCart, setFinishiCart] = useState(false);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  const incrementCount = () => {
    setOrderProductCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setOrderProductCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  if (!product) {
    return <div>정보를 받아오지 못했습니다.</div>;
  }
  const currentProduct = products?.find(
    curproduct => curproduct.id === productId,
  );
  if (!currentProduct) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  const sameCategoryProducts = products?.filter(
    sameproduct =>
      sameproduct.productCategory === currentProduct.productCategory &&
      sameproduct.id !== currentProduct.id,
  );

  const handleAddToCart = () => {
    if (orderProductCount === 0) {
      alert('개수를 선택해주세요!');
    } else {
      addToCart({ ...product, quantity: orderProductCount });
      alert('선택하신 상품을 장바구니에 담았습니다!');
      setFinishiCart(true);
    }
  };

  const goToBaseketPagae = () => {
    navigate('/basket');
  };
  return (
    <article className="h-full w-full">
      <div className="h-3/5 flex items-center justify-center">
        <div>
          <figure className="w-96 h-96 border mr-10">
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="w-full h-full object-cover"
            />
            <figcaption className="sr-only">{product.productName}</figcaption>
          </figure>
        </div>
        <div className="h-full  flex flex-col items-center justify-center">
          <header className="w-full divide-y divide-y-0.5 divide-slate-600">
            <h1 className="text-3xl  w-full text-left my-5">
              {product.productName}
            </h1>
            <div className="w-full">
              <h1 className="text-2xl font-bold w-full text-left my-5">
                남은 수량 :{' '}
                {product.productPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </h1>
            </div>
            <div className="w-full">
              <h1 className="text-xl  w-full text-left my-5">
                남은 수량 : {product.productQuantity}
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
                {(product.productPrice * orderProductCount)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </h1>
            </div>
          </header>
          <main className="my-5 space-x-10">
            <Button className="px-10">구매하기</Button>
            {finishiCart === true ? (
              <Button className="px-7" onClick={goToBaseketPagae}>
                장바구니보기
              </Button>
            ) : (
              <Button className="px-7" onClick={handleAddToCart}>
                장바구니담기
              </Button>
            )}
          </main>
        </div>
      </div>
      <footer className=" justify-center">
        같은 카테고리의 다른 상품들
        <Carousel
          opts={{ loop: true }}
          plugins={[]}
          orientation="horizontal"
          setApi={() => {}}
          className="flex justify-center items-center"
        >
          <CarouselContent className="flex ">
            {sameCategoryProducts?.map(sameproduct => (
              <CarouselItem
                key={sameproduct.id}
                className="flex justify-center items-center basis-1/4  mx-2"
              >
                <MainProductCard key={product.id} product={sameproduct} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </footer>
    </article>
  );
};

export default ProductDetailPage;
