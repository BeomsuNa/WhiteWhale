import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './sections/Buyer/SignUpPage';
import Login from './sections/Buyer/LoginPage';
import MyPage from './pages/Mypage/MyPage';
import UploadProductPage from './pages/UploadProductPage';
import ProductEditForm from './sections/Seller/ProductEditForm';
import MainPageLayOut from './pages/MainPageLayOut';
import ProductDetailPage from './pages/ProductDetailPage';
import AllProductPage from './pages/AllProdcutPage';
import BasketPage from './sections/Buyer/BasketPage';
import BuyProductPage from './sections/Buyer/BuyProductPage';
import RegistrationProductPage from './sections/Seller/RegistrationProductPage';
import OrderStatus from './sections/Buyer/OrderStatus';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <MainPageLayOut sortOption="default" /> },
      { path: '/login', element: <Login /> },
      { path: '/mypage', element: <MyPage /> },
      {
        path: '/registrationproudctpage',
        element: <RegistrationProductPage />,
      },
      {
        path: '/edit/:productId',
        element: <ProductEditForm />,
      },

      { path: '/uploadproductpage', element: <UploadProductPage /> },
      { path: '/deliverystatuspage', element: <OrderStatus /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/basket', element: <BasketPage /> },
      {
        path: '/buyprodcut',
        element: <BuyProductPage />,
      },
      { path: '/Products', element: <AllProductPage /> },
      {
        path: '/buy/:productId',
        element: <ProductDetailPage sortOption="default" onClose={() => {}} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
