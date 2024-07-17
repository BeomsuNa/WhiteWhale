import { Outlet } from 'react-router-dom';
import './App.css';
import Main from './pages/BackGroundPage';
import { AuthProvider } from './components/context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import { ProductCategoryProvider } from './components/context/ProductCategoryContext';
import PageHeader from './components/ui/PageHeader';
import { CartProvider } from './components/context/CartContext';
import Drawer from './components/ui/SideDrawer';
import SideDrawer from './components/ui/SideDrawer';
import Footer from './components/ui/Footer';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <AuthProvider>
          <ProductCategoryProvider>
            <div
              className="w-full h-screen flex flex-col justify-start space-x-3 bg-backgroundColor "
              id="mainSection"
            >
              <Header />
              <SideDrawer />
              <PageHeader />
              <Main />
              <div className="flex-grow">
                <Outlet />
              </div>
              <Footer />
            </div>
          </ProductCategoryProvider>
        </AuthProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
