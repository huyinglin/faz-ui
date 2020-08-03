import React from 'react';

import {
  ButtonProps,
} from './interface';
import {
  ButtonView,
  AncharView,
  ButtonIconView,
} from './style';

const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLAnchorElement & HTMLButtonElement>) => {
  const {
    disabled = false,
    ghost = false,
    block = false,
    danger = false,
    size = 'default',
    type = 'default',
    htmlType = 'button',
    href,
    children,
    shape,
    icon,
    ...rest
  } = props;

  const shareProps = {
    buttonSize: size,
    buttonType: type,
    disabled,
    danger,
    block,
    ghost,
    ref,
  };

  if (type === 'link' && href) {
    return (
      <AncharView
        href={href}
        {...shareProps}
        {...rest}
      >
        {icon && <ButtonIconView iconOnly={!!children}>{icon}</ButtonIconView>}
        {children}
      </AncharView>
    )
  }

  return (
    <ButtonView
      type={htmlType}
      shape={shape}
      {...shareProps}
      {...rest}
    >
      {icon && <ButtonIconView iconOnly={!!children}>{icon}</ButtonIconView>}
      {children}
    </ButtonView>
  );
});

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  ghost: false,
  block: false,
  danger: false,
  size: 'default',
  type: 'default',
  htmlType: 'button',
};

/** @component */
export default Button;
