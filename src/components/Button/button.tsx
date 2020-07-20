import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonProps,
} from './interface';
import {
  ButtonView,
  AncharView,
} from './style';

function Button(props: ButtonProps) {
  const {
    className,
    disabled,
    size,
    type,
    href,
    htmlType,
    children,
    ...rest
  } = props;

  // const buttonRef = ref || React.createRef<HTMLButtonElement>();

  if (type === 'link' && href) {
    return (
      <AncharView
        className={className}
        href={href}
        {...rest}
      >
        {children}
      </AncharView>
    )
  }

  return (
    <ButtonView
      buttonType={type}
      buttonSize={size}
      type={htmlType}
      className={className}
      disabled={disabled}
      // ref={buttonRef}
      {...rest}
    >
      {children}
    </ButtonView>
  );
}

// const Button = React.forwardRef(InternalButton as any);

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  htmlType: 'button',
  type: 'default',
};

// Button.propTypes = {
//   className: PropTypes.string,
//   disabled: PropTypes.bool,
//   size: PropTypes.oneOf(['large', 'small']),
//   type: PropTypes.oneOf(['primary', 'default', 'danger', 'link']),
//   href: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };

/** @component */
export default Button;
