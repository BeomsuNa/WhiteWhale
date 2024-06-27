import { Outlet } from 'react-router-dom';
import './App.css';
import Main from './pages/MainPage';
import { AuthProvider } from './components/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col justify-start items-center">
        <Main />
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;
