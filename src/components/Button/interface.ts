export type ButtonSize = 'large' | 'small' | 'default';
export type ButtonType = 'primary' | 'dashed' | 'danger' | 'link' | 'text' | 'default';
export type ButtonShap = 'circle' | 'round';

export interface BaseButtonProps {
  className: string;

  /** 是否禁用 */
  disabled: boolean;

  /** 设置按钮大小，可选 large、small、default */
  size: ButtonSize;

  /** 设置按钮类型，可选 primary、dashed、danger、link、text、default */
  type: ButtonType;

  /** 设置按钮形状，可选值为 circle、round 或者不设 */
  shape: ButtonShap;

  /** 幽灵属性，使按钮背景透明 */
  ghost: boolean;

  /** 加载中状态 */
  loading: boolean;

  /** 设置危险按钮 */
  danger: boolean;

  /** 将按钮宽度调整为其父宽度的选项 */
  block: boolean;

  /** 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
  href: string;

  /** 设置按钮的图标组件 */
  icon: React.ReactNode;

  style: React.CSSProperties;

  children: React.ReactNode;

  /** 点击按钮时的回调 */
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';

export type NativeButtonProps = {
  htmlType: ButtonHTMLTypes;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>;

export type AnchorButtonProps = {
  href: string;
  target: string;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type' | 'onClick'>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
