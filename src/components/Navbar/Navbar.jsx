import './Navbar.css';

import { RxHamburgerMenu } from 'react-icons/rx';
import { FiSearch } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import useAppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext();

  return (
    <div className='navbar-container'>
      <div className='navbar-hamburger-search-container'>
        <RxHamburgerMenu
          className='navbar-hamburger-icon'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className='search-input-container'>
          <FiSearch className='navbar-search-icon' />
          <input
            type='text'
            placeholder='Search jobs, users, applications...'
            className='navbar-search-input'
          />
        </div>
      </div>
      <div className='navbar-settings-admin-container'>
        <Link to='settings'>
          <IoSettingsOutline className='navbar-settings-icon' />
        </Link>
        <Link to='notifications'>
          <IoMdNotificationsOutline className='navbar-bell-icon' />
        </Link>
        <div className='navbar-admin-container'>
          <div className='navbar-admin-content-container'>
            <p className='navbar-admin-heading'>Admin User</p>
            <p className='navbar-admin-caption'>Super Admin</p>
          </div>
          <div className='navbar-admin-profile-container'>
            <Link to='admin'>
              <GoPerson />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
