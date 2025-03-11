import BuyList from '@/components/ui/BuyList';
import DliveryState from './DliveryState';
import MenuSide from './MenuSide';

function MyPage() {
  return (
    <div className="min-w-[750px] h-auto flex flex-col items-center mx-48 mt-12 mb-36 ">
      <div className="w-full h-48 border border-black mb-36">
        <DliveryState />
      </div>
      <div className="w-full h-[1024px]  flex flex-row border border-black">
        <div className="w-[40%]  border border-black">
          <MenuSide />
        </div>
        <div>
          <BuyList />
        </div>
      </div>
      <div className="w-full border border-black" />
    </div>
  );
}

export default MyPage;
