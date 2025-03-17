import { usePreFetchProduct } from '@/hooks/PreFetch';
import React from 'react';

const Skeleton = () => {
  return (
    <article className="w-72 h-72 rounded-xl m-3" id="cardBorderSection">
      <figure
        className="w-full h-2/3 flex justify-center items-center "
        id="MainProductCardImgSection"
      >
        <div className="w-full h-full border  border-0.5 bg-slate-500" />
      </figure>
      <div className="w-full border-t mb-1 " />
      <div
        className="flex flex-col justify-center items-center  h-1/3 "
        id="MainCardGuideLine"
      >
        <div className="w-full  my-2" />
      </div>
    </article>
  );
};

export default Skeleton;
