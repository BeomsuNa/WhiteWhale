import React from 'react';
import { Button } from './button';

interface ShippingCardProps {
  productImg: string;
  productName: string;
  payState: boolean;
  totalAmount: number;
  onCancel: () => void;
}

const OrderForm: React.FC<ShippingCardProps> = ({
  productImg,
  productName,
  payState,
  totalAmount,
  onCancel,
}) => {
  return (
    <div className="w-128 p-4 bg-white border flex  m-5 rounded ">
      <div>
        <img src={productImg} alt="" />
      </div>
      <div>
        <h3>{productName}</h3>
      </div>
      <div>
        <h2>총 결제 금액 : {totalAmount.toLocaleString()}원</h2>
      </div>
      <div>
        <h3>{payState ? `배송중` : `결제필요`}</h3>
      </div>
      <div>{payState !== false && <Button onClick={onCancel} />}</div>
    </div>
  );
};

export default OrderForm;
