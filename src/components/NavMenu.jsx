import classes from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { useGlobablContext } from '../context';
import { ReactComponent as ArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../images/icon-arrow-down.svg';

import Submenu from './Submenu';

const NavMenu = ({ isMobile }) => {
  const {
    isFeaturesOpen,
    isCompanyOpen,
    handleCompanyOpen,
    handleFeaturesOpen,
    companyItems,
    featuresItems,
  } = useGlobablContext();


  return (
    <ul className={classes['navmenu']}>
      <li
        className={classes['navmenu__menu-item']}
        key="features"
        onClick={handleFeaturesOpen}
      >
        <div
          className={
            isFeaturesOpen
              ? ` ${classes['navmenu__menu-item-summary']} ${classes['active']}`
              : classes['navmenu__menu-item-summary']
          }
        >
          Features
          <button className={classes['navmenu-button']}>
            {!isFeaturesOpen && (
              <ArrowDown className={classes['navmenu-button__img']} />
            )}
            {isFeaturesOpen && (
              <ArrowUp className={classes['navmenu-button__img']} />
            )}
          </button>
        </div>

        {isFeaturesOpen && (
          <Submenu
            items={featuresItems}
            align={isMobile ? null : { top: '40px', right: '5px' }}
          />
        )}
      </li>
      <li
        className={classes['navmenu__menu-item']}
        key="company"
        onClick={handleCompanyOpen}
      >
        <div
          className={
            isCompanyOpen
              ? ` ${classes['navmenu__menu-item-summary']} ${classes['active']}`
              : classes['navmenu__menu-item-summary']
          }
        >
          Company
          <button className={classes['navmenu-button']}>
            {!isCompanyOpen && (
              <ArrowDown className={classes['navmenu-button__img']} />
            )}
            {isCompanyOpen && (
              <ArrowUp className={classes['navmenu-button__img']} />
            )}
          </button>
        </div>
        {isCompanyOpen && (
          <Submenu
            items={companyItems}
            align={
              isMobile
                ? null
                : {
                    top: '40px',
                    left: '5px',
                  }
            }
          />
        )}
      </li>
      <li className={classes['navmenu__menu-item']} key="careers">
        <div className={classes['navmenu__menu-item-summary']}>
          <NavLink to="#" style={{ textDecoration: 'none' }}>
            Careers
          </NavLink>
        </div>
      </li>
      <li className={classes['navmenu__menu-item']} key="about">
        <div className={classes['navmenu__menu-item-summary']}>
          <NavLink to="/about" style={{ textDecoration: 'none' }}>
            About
          </NavLink>
        </div>
      </li>
    </ul>
  );
};

export default NavMenu;
