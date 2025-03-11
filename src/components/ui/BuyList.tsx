import React from 'react';

const BuyList = () => {
  return (
    <div className="w-full h-auto flex flex-col border border-black">
      <div className="w-[1024px]  flex flex-row border border-black">
        <div className="w-[20%] h-auto border border-black ">productImg</div>
        <div className="w-[80%] border border-black">
          <div className="w-full border border-black">product name</div>
          <div className="w-full border border-black flex items-center justify-end">
            product price
          </div>
          <div className="w-full border border-black flex items-center justify-end">
            product quantity
          </div>
        </div>
      </div>
      <div className="w-full border border-black">cancelform</div>
    </div>
  );
};

export default BuyList;
