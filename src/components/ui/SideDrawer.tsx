import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const { cart } = useCart();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      setScrollbarWidth(scrollBarWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className={`fixed top-1/3 right-0 p-2 bg-blue-500 text-white rounded transform transition-transform duration-300 z-50 ${isOpen ? `translate-x-[-16rem]` : ''}`}
        style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
        type="button"
      >
        상품확인하기
      </button>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4">
          <button
            onClick={toggleDrawer}
            className="p-2 bg-red-500 text-white rounded"
            type="button"
          >
            Close Drawer
          </button>
          <div>
            {cart.map(product => (
              <li key={product.id}>
                <Link to="/Basket">
                  <div>
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="object-cover"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
