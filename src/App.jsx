import './App.scss';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
