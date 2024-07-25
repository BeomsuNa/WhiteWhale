import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Label } from '@radix-ui/react-label';

const PageHeader = () => {
  const { cart } = useCart();

  return (
    <div>
      <Label className="font-bold text-white text-2xl">WhiteWhale</Label>
      <div className=" flex h-24 items-center m-5 border-b border-t  ">
        <div className="h-24 flex-1 " />
        <div id="MainHeaderSection " className="flex items-center space-x-5" />
        <button type="button">
          <div className="size-6 mx-5" id="BaksetImageFrame">
            <img src="/logo/ClientIcon.png" alt="ClientIcon" />
          </div>
        </button>
        <button type="button">
          <div id="MainHeaderSection" />
          <div className="size-6 mx-5 relative" id="BaksetImageFrame">
            <Link to="/Basket">
              <img src="/logo/Basket.png" alt="basketImage" />
              {cart.length > 0 && (
                <div className="absolute bottom-5 left-4 w-4 h-4 bg-red-500 rounded-full flex  justify-center text-xs text-white">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>
        </button>
        <button type="button">
          <div id="MainHeaderSection" />
          <div className="size-6 mx-5" id="BaksetImageFrame">
            <img src="/logo/MenuIcon.png" alt="MenuIcon" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
