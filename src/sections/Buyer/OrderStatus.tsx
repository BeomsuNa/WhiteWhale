import { useAuth } from '@/components/context/AuthContext';
import OrderForm from '@/components/ui/OrderForm';
import { db } from '@/config/firebase';
import { usePayments } from '@/Order/FetchPayments';
import { doc, updateDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';

interface Payment {
  id: string;
  productImg: string;
  productName: string;
  payState: boolean;
  totalAmount: number;
}

const useCancelOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ orderId }: { orderId: string; totalAmount: number }) => {
      const paymentRef = doc(db, 'purchases', orderId);
      await updateDoc(paymentRef, { payState: false });
      // 실제 결제 서비스에서 환불 처리를 해야 합니다.
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('payments');
      },
    },
  );
};

const OrderStatus = () => {
  const { user } = useAuth();
  const userId = user?.uid ?? '';
  const { data: payments, isLoading, error } = usePayments(userId);
  const cancelOrderMutation = useCancelOrder();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading shipping status</div>;

  return (
    <div className=" flex flex-col w-full max-w-5xl mx-auto justify-center items-center ">
      <h2 className="text-2xl font-semibold m`b-4">Shipping Statusd</h2>

      <ul className="w-full">
        {payments?.map((payment: Payment) => (
          <li key={payment.id}>
            <OrderForm
              productImg={payment.productImg}
              productName={payment.productName}
              payState={payment.payState}
              totalAmount={payment.totalAmount}
              onCancel={() =>
                cancelOrderMutation.mutate({
                  orderId: payment.id,
                  totalAmount: payment.totalAmount,
                })
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;
