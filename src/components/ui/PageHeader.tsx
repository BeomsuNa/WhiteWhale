import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const PageHeader = () => {
  const { cart } = useCart();

  const handleBasketClick = () => {
    navigate('/Basket');
  };
  return (
    <div className="w-11/12  flex  justify-end m-5  ">
      <div id="MainHeaderSection" />
      <button>
        <div className="size-6 mx-5" id="BaksetImageFrame">
          <img src="/logo/ClientIcon.png" alt="ClientIcon" />
        </div>
      </button>
      <button>
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
      <button>
        <div id="MainHeaderSection" />
        <div className="size-6 mx-5" id="BaksetImageFrame">
          <img src="/logo/MenuIcon.png" alt="MenuIcon" />
        </div>
      </button>
    </div>
  );
};

export default PageHeader;
