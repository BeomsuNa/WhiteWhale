import React from 'react';

const DliveryState = () => {
  return (
    <div className="w-full h-48 border flex flex-row border-black bg-[rgb(217,217,217)] ">
      <div className="w-[20%] h-auto flex flex-row relative ">
        <div className="w-[60%] h-auto bg-slate-500 flex items-center justify-center ">
          전체보기
        </div>
        <div
          className="w-0 h-0 
                    border-t-[calc(193px/2)] border-t-transparent 
                    border-b-[calc(193px/2)] border-b-transparent 
                    border-l-[48px] border-l-slate-500"
        />
      </div>
      <div className="w-full flex flex-row items-center justify-around ">
        <div className="flex flex-row gap-2 mr">
          <h3>입금대기</h3>
          <h4>0</h4>
        </div>
        <div className="flex flex-row gap-2">
          <h3>결제완료</h3>
          <h4>0</h4>
        </div>
        <div className="flex flex-row gap-2">
          <h3>배송준비중</h3>
          <h4>0</h4>
        </div>
        <div className="flex flex-row gap-2">
          <h3>배송</h3>
          <h4>0</h4>
        </div>
        <div className="flex flex-row gap-2">
          <h3>배송완료</h3>
          <h4>0</h4>
        </div>
        <div className="flex flex-row gap-2">
          <h3>구매결정대기</h3>
          <h4>0</h4>
        </div>
        <div className="flex flex-row gap-2">
          <h3>반품</h3>
          <h4>0</h4>
        </div>
      </div>
    </div>
  );
};

export default DliveryState;
