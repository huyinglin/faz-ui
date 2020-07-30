import React from 'react';
import PropTypes from 'prop-types';

import {
  TooltipProps
} from './interface';
import {
  TooltipView,
  TooltipContentView,
  TooltipChildrenView,
} from './style';

function Tooltip(props: Partial<TooltipProps>) {
  const {
    children,
  } = props;

  const [visible, setVisible] = React.useState<boolean>(false);

  function handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
    console.log('onMouseEnter');
    setVisible(true);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLElement>) {
    console.log('onMouseLeave');
    setVisible(false);
  }

  function handleFocus(e: React.FocusEvent<HTMLElement>) {
    console.log('onFocus');
    setVisible(true);
  }

  function handleBlur(e: React.FocusEvent<HTMLElement>) {
    console.log('onFocus');
    setVisible(false);
  }


  return (
    <>
      <TooltipChildrenView
        role="tooltip"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={() => setVisible(!visible)}
      >
        {children}
      </TooltipChildrenView>
      {visible &&
        <TooltipContentView>
          222
        </TooltipContentView>
      }
    </>
  );
}

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {

};

Tooltip.propTypes = {

};

/** @component */
export default Tooltip;
