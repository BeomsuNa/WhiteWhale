import React from 'react';
import { Button } from './button';

interface ShippingCardProps {
  productName: string;
  paystatus: string;
  totalAmount: number;
  onCancel: () => void;
}

const OrderForm: React.FC<ShippingCardProps> = ({
  productName,
  paystatus,
  totalAmount,
  onCancel,
}) => {
  return (
    <div className="w-128 p-4 bg-white border flex  m-5 rounded ">
      <div>
        <h3>{productName}</h3>
      </div>
      <div>
        <h2>총 결제 금액 : {totalAmount.toLocaleString()}원</h2>
      </div>
      <div>
        <h3>{paystatus ? `배송중` : `결제필요`}</h3>
      </div>
      <div>{paystatus !== 'canceled' && <Button onClick={onCancel} />}</div>
    </div>
  );
};

export default OrderForm;
