import classes from './Submenu.module.scss';
import React from 'react';
const Submenu = React.forwardRef((props, ref) => {
  return (
    <div className={classes['submenu']} style={props.align} ref={ref}>
      <ul>
        {props.items.map((item) => {
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
});

export default Submenu;
