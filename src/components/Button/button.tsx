import React from 'react';
import classnames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface BaseButtonProps {
  className: string;
  disabled: boolean;
  size: ButtonSize;
  type: ButtonType;
  href: string;
  children: React.ReactNode;
}

type ButtonHTMLTypes = 'submit' | 'button' | 'reset';

export type NativeButtonProps = {
  htmlType: ButtonHTMLTypes;
  onClick: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>;

export type AnchorButtonProps = {
  href: string;
  target: string;
  onClick: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type' | 'onClick'>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

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
      type={htmlType}
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
  htmlType: 'button',
  type: 'default',
};

export default Button;
