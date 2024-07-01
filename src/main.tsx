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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/Login', element: <Login /> },
      { path: '/MyPage', element: <MyPage /> },
      { path: '/OrderStatusPage', element: <OrderStatusPage /> },
      { path: '/DeliveryStatusPage', element: <DeliveryStatusPage /> },
      { path: '/SignUp', element: <SignUp /> },
      { path: '/Basket', element: <Basket /> },
      { path: '/BuyProdcut', element: <BuyProduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
