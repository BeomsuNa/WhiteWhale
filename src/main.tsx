import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUpPage';
import Login from './pages/LoginPage';
import MyPage from './pages/MyPage';
import OrderStatusPage from './pages/OrderStatusPage';
import DeliveryStatusPage from './pages/DeliveryStatusPage';
import UploadProductPage from './pages/UploadProductPage';
import ProductEditForm from './pages/ProductEditForm';
import MainPageLayOut from './pages/MainPageLayOut';
import ProductDetailPage from './pages/ProductDetailPage';
import AllProductPage from './pages/AllProdcutPage';
import BasketPage from './pages/BasketPage';
import BuyProductPage from './pages/BuyProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <MainPageLayOut sortOption="default" /> },
      { path: '/login', element: <Login /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/orderstatuspage', element: <OrderStatusPage /> },
      {
        path: '/edit/:productId',
        element: <ProductEditForm />,
      },
      { path: '/uploadproductpage', element: <UploadProductPage /> },
      { path: '/deliverystatuspage', element: <DeliveryStatusPage /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/basket', element: <BasketPage /> },
      {
        path: '/buyprodcut',
        element: <ProductDetailPage sortOption="default" onClose={() => {}} />,
      },
      { path: '/Products', element: <AllProductPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
