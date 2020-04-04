import React from 'react';
import classnames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  const {
    className,
    disabled,
    size,
    type,
    href,
    children,
    ...rest
  } = props;

  const classes = classnames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'disabled': type === 'link' && disabled
  });

  if (type === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  type: 'default',
};

export default Button;
