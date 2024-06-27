import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUpPage.tsx';
import Basket from './pages/BasketPage.tsx';
import BuyProduct from './pages/BuyProductPage.tsx';
import Login from './pages/LoginPage.tsx';
import MyPage from './pages/MyPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/Login', element: <Login /> },
      { path: '/MyPage', element: <MyPage /> },
      { path: '/SignUp', element: <SignUp /> },
      { path: '/Basket', element: <Basket /> },
      { path: '/BuyProdcut', element: <BuyProduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
