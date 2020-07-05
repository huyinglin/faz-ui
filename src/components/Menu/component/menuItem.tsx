import React from 'react';

import {
  MenuItemProps,
} from '../interface';

function MenuItem(props: Partial<MenuItemProps>) {
  const {
    children,
  } = props;

  return (
    <li>
      {children}
    </li>
  )
}

export { MenuItem };
