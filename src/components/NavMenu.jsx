import classes from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { useGlobablContext } from '../context';
import { ReactComponent as ArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../images/icon-arrow-down.svg';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
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

  const featureRef = useRef(null);
  const companyRef = useRef(null);

  return (
    <ul className={classes['navmenu']}>
      <li className={classes['navmenu__menu-item']} key="features">
        <div
          className={
            isFeaturesOpen
              ? ` ${classes['navmenu__menu-item-summary']} ${classes['active']}`
              : classes['navmenu__menu-item-summary']
          }
          onClick={handleFeaturesOpen}
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

        <CSSTransition
          in={isFeaturesOpen}
          nodeRef={featureRef}
          timeout={400}
          appear
          classNames={{
            enter: classes['slideY-enter'],
            enterActive: classes['slideY-enter-active'],
            exit: classes['slideY-exit'],
            exitActive: classes['slideY-exit-active'],
          }}
          unmountOnExit
        >
          <Submenu
            items={featuresItems}
            align={isMobile ? null : { top: '40px', right: '5px' }}
            ref={featureRef}
          />
        </CSSTransition>
      </li>
      <li className={classes['navmenu__menu-item']} key="company">
        <div
          className={
            isCompanyOpen
              ? ` ${classes['navmenu__menu-item-summary']} ${classes['active']}`
              : classes['navmenu__menu-item-summary']
          }
          onClick={handleCompanyOpen}
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

        <CSSTransition
          in={isCompanyOpen}
          nodeRef={companyRef}
          timeout={400}
          appear
          classNames={{
            enter: classes['slideY-enter'],
            enterActive: classes['slideY-enter-active'],
            exit: classes['slideY-exit'],
            exitActive: classes['slideY-exit-active'],
          }}
          unmountOnExit
        >
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
            ref={companyRef}
          />
        </CSSTransition>
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
