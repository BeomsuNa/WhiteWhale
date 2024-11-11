import * as PortOne from '@portone/browser-sdk/v2';
import { useCart } from '@/components/context/CartContext';
import { ProductCard } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';
import Geocoder from '@/Order/Geocoder';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAuth } from 'firebase/auth';

interface PaymentResponse {
  success: boolean;
  data?: ProductCard[];
  error?: string;
  paymentId: string;
  code: number;
  message: string;
  postcodeData: string;
  productImg: string;
  payState: boolean;
}

const BuyProductPage = () => {
  const { cart, updateCartQuantity, clearCart } = useCart();
  const auth = getAuth();

  const { data: addressData } = useQuery('addressData');

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    updateCartQuantity(productId, quantity);
  };

  const handlePayment = async () => {
    try {
      const paymentResponses = await Promise.all(
        cart.map(async product => {
          const response = (await PortOne.requestPayment({
            storeId: import.meta.env.VITE_storeId,
            channelKey: import.meta.env.VITE_channelKey,
            paymentId: `payment-${crypto.randomUUID()}`,
            orderName: product.productName,
            totalAmount: product.productPrice * product.quantity, // 단일 품목의 총 금액
            currency: 'CURRENCY_KRW',
            payMethod: 'CARD',
          })) as PaymentResponse | undefined;

          if (response?.code != null) {
            throw new Error('결제 중 오류 발생');
          }

          // Firestore에 결제 정보 저장
          const user = auth.currentUser;

          if (user) {
            await addDoc(collection(db, 'purchases'), {
              uid: user?.uid,
              paymentId: response?.paymentId,
              productId: product.id,
              productName: product.productName,
              totalAmount: product.productPrice * product.quantity,
              currency: 'CURRENCY_KRW',
              payMethod: 'CARD',
              createdAt: new Date(),
              buyeraddress: addressData || {},
              payState: true,
              productImg: product.imageUrl,
            });
          }
          return response;
        }),
      );
      alert('결제가 완료되었습니다.');
      clearCart();
    } catch (error) {
      console.error('결제 중 오류 발생', error);
      alert('결제 중 오류가 발생했습니다.');
    }
  };

  return (
    <main>
      <div className="mx-48">
        <h1> 결제페이지</h1>
        <div className="flex">
          <h2 className=" font-bold text-xl mt-10">주문자 정보</h2>
        </div>
        <div className="w-4/6 h-64 flex justify-center items-start flex-col ">
          <div className="flex flex-col items-start w-full ">
            <input
              placeholder="이름을 입력하세요"
              className="w-3/5 mb-5 px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex space-x-3 w-3/5">
            <select
              title="휴대폰 사업자"
              className="px-4 py-2 border rounded-md"
            >
              <option value="010" selected>
                010
              </option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
            </select>
            <input
              placeholder="전화번호를 입력하세요"
              className="w-full px-4 py-2 border rounded-md "
            />
            <input
              placeholder="전화번호를 입력하세요"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mt-5 w-3/5 flex items-center space-x-2">
            <input
              placeholder="이메일을 입력하세요"
              className="w-3/5 px-4 py-2 border rounded-md"
            />
            <span>@</span>
            <select className=" w-2/5 px-4 py-2 border rounded-md text-center">
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="nate.com">nate.com</option>
              <option value="gmail.com">gmail.com</option>
            </select>
          </div>
        </div>
        <div className="flex">
          <h2 className="font-bold text-xl mt-10 mb-10">배송지 정보</h2>
        </div>
        <div className="w-4/6 h-64 flex justify-center items-start flex-col mb-64">
          <Geocoder />
          <div className="mt-5 w-3/5 flex items-center space-x-2">
            <input
              placeholder="이메일을 입력하세요"
              className="w-3/5 px-4 py-2 border rounded-md"
            />
            <span>@</span>
            <select className=" w-2/5 px-4 py-2 border rounded-md text-center">
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="nate.com">nate.com</option>
              <option value="gmail.com">gmail.com</option>
            </select>
          </div>
        </div>
        <div className="w-full h-64">
          <ul>
            {cart.map(product => (
              <li key={product.id} className="mb-4 border-b pb-4">
                <div className="flex items-center ml-12">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-xl">{product.productName}</h2>
                    <div className="flex items-center justify-center mt-2">
                      <Button
                        className="mr-2"
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity + 1)
                        }
                      >
                        +
                      </Button>
                      <div className="mr-2">{product.quantity}</div>
                      <Button
                        className="mr-2"
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity - 1)
                        }
                      >
                        -
                      </Button>
                    </div>
                    {product.productPrice}원
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-16">
          총 금액 :
          {(
            cart.reduce(
              (total, product) =>
                total + product.productPrice * product.quantity,
              0,
            ) + 3000
          )
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          원
        </div>
        <Button onClick={handlePayment}>결제하기</Button>
      </div>
    </main>
  );
};

export default BuyProductPage;
