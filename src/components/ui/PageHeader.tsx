import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Label } from '@radix-ui/react-label';
import { Button } from './radixUi/button';

const PageHeader = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const handleKeyboard = () => navigate('/products?category=1');
  const handleKeyCap = () => navigate('/products?category=2');
  const handleKeyAccesory = () => navigate('/products?category=3');
  return (
    <header>
      <Label className="font-bold text-white text-2xl">
        <Link to="/">WhiteWhale</Link>
      </Label>

      <div className=" flex h-24 items-center m-5 border-b border-t  ">
        <div className="h-24 flex-1 " />
        <div id="MainHeaderSection " className="flex items-center space-x-5" />
        <button type="button">
          <div className="size-6 mx-5" id="BaksetImageFrame">
            <img
              src="/logo/ClientIcon.webp"
              alt="ClientIcon"
              className="h-6 w-6 "
            />
          </div>
        </button>
        <button type="button">
          <div id="MainHeaderSection" />
          <div className="size-6 mx-5 relative" id="BaksetImageFrame">
            <Link to="/Basket">
              <img
                src="/logo/Basket.webp"
                alt="basketImage"
                className="h-6 w-6"
              />
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
            <img src="/logo/MenuIcon.webp" alt="MenuIcon" className="h-6 w-6" />
          </div>
        </button>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-12 my-12">
        <Button onClick={handleKeyboard}>커스텀키보드</Button>
        <Button onClick={handleKeyCap}>키캡</Button>
        <Button onClick={handleKeyAccesory}>액세서리</Button>
      </div>
    </header>
  );
};

export default PageHeader;
