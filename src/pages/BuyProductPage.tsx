import * as PortOne from '@portone/browser-sdk/v2';
import { useCart } from '@/components/context/CartContext';
import { ProductCard } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';

interface PaymentResponse {
  success: boolean;
  data?: ProductCard[];
  error?: string;
  paymentId: string;
  code: number;
  message: string;
}

const BuyProductPage = () => {
  const { cart } = useCart();

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
          await addDoc(collection(db, 'payments'), {
            paymentId: response?.paymentId,
            productId: product.id,
            productName: product.productName,
            totalAmount: product.productPrice * product.quantity,
            currency: 'CURRENCY_KRW',
            payMethod: 'CARD',
            createdAt: new Date(),
          });

          return response;
        }),
      );

      alert('결제가 완료되었습니다.');
    } catch (error) {
      console.error('결제 중 오류 발생', error);
      alert('결제 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="">
      <h1> 결제페이지</h1>
      <div className="w-full">
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
                    <Button className="mr-2"> +</Button>
                    <div className="mr-2">{product.quantity}</div>
                    <Button className="mr-2"> -</Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={handlePayment}>결제하기</Button>
    </div>
  );
};

export default BuyProductPage;
