import { Outlet } from 'react-router-dom';
import './App.css';
import Main from './pages/MainPage';

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <Main />
      <Outlet />
    </div>
  );
}

export default App;
