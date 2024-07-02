import { Outlet } from 'react-router-dom';
import './App.css';
import Main from './pages/MainPage';
import { AuthProvider } from './components/context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div
          className="w-full h-screen flex flex-col justify-start items-center bg-backgroundColor"
          id="mainSection"
        >
          <Main />
          <Outlet />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
