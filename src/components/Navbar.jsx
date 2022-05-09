import classes from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { useGlobablContext } from '../context';
import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import iconCalendar from '../images/icon-calendar.svg';
import iconTodo from '../images/icon-todo.svg';
import iconReminders from '../images/icon-reminders.svg';
import iconPlanning from '../images/icon-planning.svg';
import { ReactComponent as ArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../images/icon-arrow-down.svg';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

const Navbar = () => {
  const {
    isFeaturesOpen,
    isCompanyOpen,
    isSidebarOpen,
    handleCompanyOpen,
    handleFeaturesOpen,
    handleSidebarOpen,
  } = useGlobablContext();

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
      <ul>
        <li
          className={classes['navbar__menu-item']}
          key="features"
          onClick={handleFeaturesOpen}
        >
          <div
            className={
              isFeaturesOpen
                ? ` ${classes['navbar__menu-item-summary']} ${classes['active']}`
                : classes['navbar__menu-item-summary']
            }
          >
            Features
            <button className={classes['navbar-button']}>
              {!isFeaturesOpen && (
                <ArrowDown className={classes['navbar-button__img']} />
              )}
              {isFeaturesOpen && (
                <ArrowUp className={classes['navbar-button__img']} />
              )}
            </button>
          </div>

          {isFeaturesOpen && (
            <Submenu
              items={featuresItems}
              align={{ top: '40px', right: '5px' }}
            />
          )}
        </li>
        <li
          className={classes['navbar__menu-item']}
          key="company"
          onClick={handleCompanyOpen}
        >
          <div
            className={
              isCompanyOpen
                ? ` ${classes['navbar__menu-item-summary']} ${classes['active']}`
                : classes['navbar__menu-item-summary']
            }
          >
            Company
            <button className={classes['navbar-button']}>
              {!isCompanyOpen && (
                <ArrowDown className={classes['navbar-button__img']} />
              )}
              {isCompanyOpen && (
                <ArrowUp className={classes['navbar-button__img']} />
              )}
            </button>
          </div>
          {isCompanyOpen && (
            <Submenu
              items={companyItems}
              align={{
                top: '40px',
                left: '5px',
              }}
            />
          )}
        </li>
        <li className={classes['navbar__menu-item']} key="careers">
          <div className={classes['navbar__menu-item-summary']}>
            <NavLink to="#" style={{ textDecoration: 'none' }}>
              Careers
            </NavLink>
          </div>
        </li>
        <li className={classes['navbar__menu-item']} key="about">
          <div className={classes['navbar__menu-item-summary']}>
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              About
            </NavLink>
          </div>
        </li>
      </ul>

      <div className={classes['navbar__btn-container']}>
        <button className={classes['navbar__btn--login']}>Login</button>
        <button className={classes['navbar__btn--register']}>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
