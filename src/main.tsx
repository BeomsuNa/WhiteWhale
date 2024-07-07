import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUpPage';
import Basket from './pages/BasketPage';
import BuyProduct from './pages/BuyProductPage';
import Login from './pages/LoginPage';
import MyPage from './pages/MyPage';
import OrderStatusPage from './pages/OrderStatusPage';
import DeliveryStatusPage from './pages/DeliveryStatusPage';
import UploadProductPage from './pages/UploadProductPage';
import ProductEditForm from './pages/ProductEditForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/orderstatuspage', element: <OrderStatusPage /> },
      { path: '/edit/:productId', element: <ProductEditForm /> },
      { path: '/uploadproductpage', element: <UploadProductPage /> },
      { path: '/deliverystatuspage', element: <DeliveryStatusPage /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/basket', element: <Basket /> },
      { path: '/buyprodcut', element: <BuyProduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
