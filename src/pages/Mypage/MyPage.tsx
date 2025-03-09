import DliveryState from './DliveryState';

function MyPage() {
  return (
    <div className="min-w-[750px] h-auto flex flex-col items-center mx-48 mt-12 mb-36 ">
      <div className="w-full h-48 border border-black">
        <DliveryState />
      </div>
      <div className="w-full h-[1024px]  flex flex-row " />
      <div className="w-[40%]  border border-black" />
      <div className="w-full border border-black" />
    </div>
  );
}

export default MyPage;
