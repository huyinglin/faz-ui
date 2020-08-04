import React from 'react';

import {
  PopoverProps
} from './interface';
import {
  PopoverView,
  PopoverTitleView,
  PopoverContentView,
} from './style';

function Popover(props: PopoverProps) {
  const {
    content,
    title,
    children,
    color,
    ...other
  } = props;

  const popoverContent = (
    <div>
      <PopoverTitleView>{title}</PopoverTitleView>
      <PopoverContentView>{content}</PopoverContentView>
    </div>
  );

  return (
    <PopoverView
      {...other}
      color="#fff"
      title={popoverContent}
    >
      {children}
    </PopoverView>
  );
}

Popover.displayName = 'Popover';

Popover.defaultProps = {

};

/** @component */
export default Popover;
