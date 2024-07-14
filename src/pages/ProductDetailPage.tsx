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
} from '@/components/ui/carousel';
import { useCart } from '@/components/context/CartContext';

interface MainProductCardProps {
  product: ProductCard;
}

const ProductDetailPage: React.FC<MainProductCardProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { productId } = useParams<{ productId: string }>();
  const { data: products } = useFetchProductCardData();
  const { addToCart } = useCart();
  const [orderProductCount, setOrderProductCount] = useState<number>(0);
  const [finishiCart, setFinishiCart] = useState(false);

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
  console.log('현재 상품의 아이디는?', currentProduct);
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
      console.log('장바구니에 담겼습니다', orderProductCount);
      setFinishiCart(true);
    }
  };

  const goToBaseketPagae = () => {
    navigate('/basket');
  };
  return (
    <div className="h-full w-full bg-productpage">
      <div className="h-3/5 flex items-center">
        <div className="w-1/2 mx-128">
          <div className="w-96 h-96 overflow-hidden mx-72">
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 ">
          <h1>{product.productName}제목</h1>
          <div>남은 수량 : {product.productQuantity}</div>
          <div>
            <div>
              구매수량 :
              <button
                className="border border-gray-300 bg-gray-200 text-gray-800 px-3 py-1 rounded mx-1"
                onClick={decrementCount}
              >
                -
              </button>
              {orderProductCount}
              <button
                className="border border-gray-300 bg-gray-200 text-gray-800 px-3 py-1 rounded mx-1"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
          </div>
          <div>구매 가격 : {product.productPrice}원</div>

          <Button>구매하기</Button>

          {finishiCart === true ? (
            <Button onClick={goToBaseketPagae}>장바구니보기</Button>
          ) : (
            <Button onClick={handleAddToCart}>장바구니담기</Button>
          )}
        </div>
      </div>
      <div className=" justify-center">
        같은 카테고리의 다른 상품들
        <Carousel className="flex justify-center items-center">
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
      </div>
    </div>
  );
};

export default ProductDetailPage;
