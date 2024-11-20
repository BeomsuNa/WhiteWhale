import { useCart } from '@/components/context/CartContext';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BasketPage: React.FC = () => {
  const { cart, updateCartQuantity, removeFromCart } = useCart();

  const navigate = useNavigate();
  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    updateCartQuantity(productId, quantity);
  };

  const goToBuyProductPage = () => {
    navigate('/buyprodcut');
  };
  console.log('현재 장바구니는?', cart);
  return (
    <article className="w-ful pl-20 pr-20">
      <header className="text-2xl mb-4">장바구니</header>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <article className="w-100vh">
          <ul>
            {cart.map(product => (
              <li key={product.id} className="mb-4 border-b pb-4">
                <div className="flex items-center">
                  <figure className="w-24 h-24 object-cover mr-4">
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="w-24 h-24 object-cover mr-4"
                    />
                    <figcaption className="sr-only">
                      {product.productName}
                    </figcaption>
                  </figure>
                  <main>
                    <div className="flex-1" id="midSection">
                      <h3 className="text-xl">{product.productName}</h3>
                      <p>
                        가격:{' '}
                        {product.productPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                      </p>
                      <div className="flex items-center mt-2">
                        <Button
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity - 1,
                            )
                          }
                          className="size-6 px-2 mr-2"
                        >
                          -
                        </Button>
                        <span>{product.quantity}</span>
                        <Button
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity + 1,
                            )
                          }
                          className="size-6 px-2 ml-2"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <Button
                      onClick={() => removeFromCart(product.id)}
                      className="size-10 ml-2"
                    >
                      삭제
                    </Button>
                  </main>
                </div>
              </li>
            ))}
          </ul>
        </article>
      )}

      <div className="w-100% h-64 grid grid-cols-3 grid-rows-2 border-t border-b my-12">
        <div className="col-span-1 row-span-1 flex justify-start">
          <h2 className="text-3xl font-bold pt-5"> 총 주문 금액</h2>
        </div>
        <div className="col-span-1 row-span-1" />
        <div className="col-span-1 row-span-1 ">
          <dl className="flex flex-col">
            <div className="text-xl flex justify-between pt-5">
              <dt>총 금액 </dt>
              <dd>
                {cart
                  .reduce(
                    (total, product) =>
                      total + product.productPrice * product.quantity,
                    0,
                  )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </dd>
            </div>
            <div className="text-xl flex justify-between">
              <dt>배송비</dt>
              <dd> 3,000원</dd>
            </div>
          </dl>
        </div>
        <div className="col-span-1 row-span-1 flex justify-start items-center">
          <h2 className="text-4xl font-bold">결제 예상 금액</h2>
        </div>
        <div className="col-span-1 row-span-1 " />
        <div className="col-span-1 row-span-1 flex justify-start items-center">
          {(
            cart.reduce(
              (total, product) =>
                total + product.productPrice * product.quantity,
              0,
            ) + 3000
          )
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </div>
      </div>
      <Button onClick={goToBuyProductPage} className="my-12">
        구매하기
      </Button>
    </article>
  );
};

export default BasketPage;
