import classes from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useGlobablContext } from '../context';
import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import iconCalendar from '../images/icon-calendar.svg';
import iconTodo from '../images/icon-todo.svg';
import iconReminders from '../images/icon-reminders.svg';
import iconPlanning from '../images/icon-planning.svg';
import Sidebar from './Sidebar';
import NavMenu from './NavMenu';

const Navbar = () => {
  const { isSidebarOpen, handleSidebarOpen } = useGlobablContext();

  const companyItems = [
    { name: 'History' },
    { name: 'Our Team' },
    { name: 'Blog' },
  ];

  const featuresItems = [
    { name: 'Todo List', icon: iconTodo },
    { name: 'Calendar', icon: iconCalendar },
    { name: 'Remainders', icon: iconReminders },
    { name: 'Planning', icon: iconPlanning },
  ];

  return (
    <div className={classes['navbar']}>
      {isSidebarOpen && (
        <Sidebar items={{ company: companyItems, features: featuresItems }} />
      )}
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
