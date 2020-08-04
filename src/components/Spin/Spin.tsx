import React from 'react';
import PropTypes from 'prop-types';

import {
  SpinProps
} from './interface';
import {
  SpinView,
} from './style';
import { AiOutlineLoading3Quarters, AiOutlineLoading } from 'react-icons/ai';

function Spin(props: Partial<SpinProps>) {
  const {
    style,
    className,
    color = '#1890ff',
    size = 'default',
  } = props;

  return (
    <SpinView
      style={style}
      className={className}
      color={color}
      size={size}
    >
      <AiOutlineLoading/>
    </SpinView>
  );
}

Spin.displayName = 'Spin';

Spin.defaultProps = {

};

Spin.propTypes = {

};

/** @component */
export default Spin;
