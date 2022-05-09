import classes from './Sidebar.module.scss';
import iconClose from '../images/icon-close-menu.svg';
import { useGlobablContext } from '../context';

const Sidebar = ({ items }) => {
  const { handleSidebarOpen } = useGlobablContext();
  const { company, features } = items;

  return (
    <div className={classes['sidebar']}>
      <div className={classes['sidebar-menu']}>
        <img
          src={iconClose}
          alt="close menu"
          className={classes['sidebar-menu__icon-close']}
          onClick={handleSidebarOpen}
        />
        
      </div>
    </div>
  );
};

export default Sidebar;
