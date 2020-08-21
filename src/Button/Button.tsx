import React from 'react';

import {
  ButtonProps,
} from './interface';
import {
  ButtonView,
  AncharView,
  ButtonIconView,
} from './style';
// import Spin from '../Spin';

const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLAnchorElement & HTMLButtonElement>) => {
  const {
    disabled = false,
    ghost = false,
    block = false,
    danger = false,
    loading = false,
    size = 'default',
    type = 'default',
    htmlType = 'button',
    href,
    children,
    shape,
    icon,
    className = '',
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
        className={`faz-ui_button-anchar ${className}`}
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
      isLoading={loading}
      className={`faz-ui_button ${className}`}
      {...shareProps}
      {...rest}
    >
      {loading && type !== 'text' &&
        <ButtonIconView iconOnly={!!children}>
          {/* <Spin size="small" color={type === 'primary' ? '#fff' : 'rgba(0, 0, 0, 0.65)'}/> */}
        </ButtonIconView>}
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
