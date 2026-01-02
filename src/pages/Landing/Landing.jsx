import { Outlet } from 'react-router-dom';
import './Landing.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <div className='landing-page-sidebar-container'>
        <Sidebar />
      </div>
      <div className='main-container'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPage;
