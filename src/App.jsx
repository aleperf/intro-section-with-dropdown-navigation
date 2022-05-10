import './App.scss';
import { useGlobablContext } from './context';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
function App() {
  const { isSidebarOpen, handleSidebarOpen } = useGlobablContext();

  return (
    <div className="app">
      {isSidebarOpen && <Sidebar />}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
