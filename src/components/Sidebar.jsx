import classes from './Sidebar.module.scss';
import iconClose from '../images/icon-close-menu.svg';
import { useGlobablContext } from '../context';

import NavMenu from './NavMenu';

const Sidebar = () => {
  const { handleSidebarOpen } = useGlobablContext();

  return (
    <div className={classes['sidebar']}>
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
        <button className={classes['sidebar__btn--register']}>Register</button>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
