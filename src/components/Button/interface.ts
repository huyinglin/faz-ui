export type ButtonSize = 'large' | 'small';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface BaseButtonProps {
  className: string;
  disabled: boolean;
  size: ButtonSize;
  type: ButtonType;
  href: string;
  style: React.CSSProperties;
  children: React.ReactNode;
}

export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';

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
