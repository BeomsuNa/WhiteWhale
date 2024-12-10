import { usePreFetchProduct } from '@/hooks/PreFetch';
import React from 'react';

const Skele = () => {
  return (
    <article
      className="w-64 h-64 rounded-xl border border-white m-3 transition-colors duration-200 group"
      id="cardBorderSection"
    >
      <figure
        className="w-full h-2/3 flex justify-center items-center "
        id="MainProductCardImgSection"
      >
        <div className="w-48 h-36 border border-black border-0.5 bg-slate-500" />
      </figure>
      <div className="w-full border-t border-white mb-1 group-hover:border-black group-hover:border-1" />
      <div
        className="flex flex-col justify-center items-center  h-1/3 "
        id="MainCardGuideLine"
      >
        <div className="w-full border-t border-white my-2 group-hover:border-black group-hover:border-1" />
      </div>
    </article>
  );
};

export default Skele;
