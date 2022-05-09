import classes from './Submenu.module.scss'

const Submenu = ({ items, align }) => {
    return (
      <div className={classes['submenu']} style={align}>
        <ul>
          {items.map((item) => {
            return (
              <li className={classes['submenu-item']} key={item.name}>
                {item.icon && <img src={item.icon} alt={item.name} />}
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

export default Submenu;