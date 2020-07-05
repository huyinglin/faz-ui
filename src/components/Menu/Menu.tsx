import React from 'react';
import PropTypes from 'prop-types';

import { MenuItem } from './component/menuItem';
import {
  MenuProps
} from './interface';
import {

} from './style';

function Menu(props: Partial<MenuProps>) {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    onSelect,
  } = props;

  return (
    <ul style={style}>
      {children}
    </ul>
  );
}

Menu.displayName = 'Menu';
Menu.MenuItem = MenuItem;

Menu.defaultProps = {

};

Menu.propTypes = {

};

/** @component */
export default Menu;
