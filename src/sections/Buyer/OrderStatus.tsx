import { useAuth } from '@/components/context/AuthContext';
import { db } from '@/config/firebase';
import { usePayments } from '@/Order/FetchPayments';
import { doc, updateDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';

interface Payment {
  id: string;
  productName: string;
  status: string;
  totalAmount: number;
}

const useCancelOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ orderId }: { orderId: string; totalAmount: number }) => {
      const paymentRef = doc(db, 'payments', orderId);
      await updateDoc(paymentRef, { status: 'canceled' });
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
  console.log('상품의 데이터는?', payments);
  const cancelOrderMutation = useCancelOrder();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading shipping status</div>;

  return (
    <div>
      <h2>Shipping Statusd</h2>

      <ul>
        {payments?.map((payment: Payment) => (
          <li key={payment.id}>
            <p>Order ID: {payment.id}</p>
            <p>Product: {payment.productName}</p>
            <p>
              Status: {payment.status === 'canceled' ? '주문취소' : '배송중'}
            </p>
            {payment.status !== 'canceled' && (
              <button
                type="button"
                onClick={() =>
                  cancelOrderMutation.mutate({
                    orderId: payment.id,
                    totalAmount: payment.totalAmount,
                  })
                }
                disabled={cancelOrderMutation.isLoading}
              >
                {cancelOrderMutation.isLoading
                  ? 'Cancelling...'
                  : 'Cancel Order'}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;
