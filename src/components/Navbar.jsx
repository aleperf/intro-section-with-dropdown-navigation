import classes from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useGlobablContext } from '../context';
import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import NavMenu from './NavMenu';

const Navbar = () => {
  const {  handleSidebarOpen} = useGlobablContext();


  return (
    <div className={classes['navbar']}>
    {/*   {isSidebarOpen && (
        <Sidebar/>
      )} */}
      <div className={classes['navbar-container']}>
        <Link to="/">
          <img
            src={logo}
            alt="snap logo"
            className={classes['navbar-container__logo']}
          />
        </Link>

        <img
          src={menu}
          alt="open menu"
          className={classes['navbar-container__menu']}
          onClick={handleSidebarOpen}
        />
      </div>
      <div className={classes['navbar-menu-container']}>
        <NavMenu isMobile={false} />
      </div>
      <div className={classes['navbar__btn-container']}>
        <button className={classes['navbar__btn--login']}>Login</button>
        <button className={classes['navbar__btn--register']}>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
