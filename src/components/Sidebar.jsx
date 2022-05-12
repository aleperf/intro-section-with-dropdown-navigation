import classes from './Sidebar.module.scss';
import iconClose from '../images/icon-close-menu.svg';
import { useGlobablContext } from '../context';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import NavMenu from './NavMenu';

const Sidebar = () => {
  const { isSidebarOpen, handleSidebarOpen } = useGlobablContext();
  const ref = useRef(null);
  return (
    <CSSTransition
      in={isSidebarOpen}
      nodeRef={ref}
      timeout={400}
      appear
      classNames={{
        enter: classes['fadein-enter'],
        enterActive: classes['fadein-enter-active'],
        exit: classes['fadein-exit'],
        exitActive: classes['fadein-exit-active'],
      }}
      unmountOnExit
    >
      <div className={classes['sidebar']} ref={ref}>
        <div className={classes['sidebar-menu']}>
          <img
            src={iconClose}
            alt="close menu"
            className={classes['sidebar-menu__icon-close']}
            onClick={handleSidebarOpen}
          />
          <NavMenu isMobile={true} />
          <div className={classes['sidebar__btn-container']}>
            <button className={classes['sidebar__btn--login']}>Login</button>
            <button className={classes['sidebar__btn--register']}>
              Register
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
