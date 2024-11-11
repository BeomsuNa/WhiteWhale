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
  const hadnleCancel = () => {
    const confirmCancel = window.confirm('정말 취소하시겠습니까?');
    if (confirmCancel) {
      onCancel();
    }
  };

  return (
    <article className="w-full p-4 bg-white border flex m-5 rounded space-x-3 items-center justify-between">
      <figure className="w-32 h-32 rounded overflow-hidden">
        <img src={productImg} alt={productName} />
        <figcaption className="sr-only">{productName}</figcaption>
      </figure>
      <div className="flex">
        <h2>상품명</h2>
        <h3> {productName}</h3>
      </div>
      <div className="flex">
        <h2 />
        <h2>총 결제 금액 : {totalAmount.toLocaleString()}원</h2>
      </div>
      <div className="flex">
        <h3>{payState ? `배송중` : `결제필요`}</h3>
      </div>
      <div className="flex">
        {payState !== false && <Button onClick={hadnleCancel}>배송취소</Button>}
      </div>
    </article>
  );
};

export default OrderForm;
