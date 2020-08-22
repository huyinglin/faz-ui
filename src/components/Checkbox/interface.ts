export interface CheckboxProps {
  /** 指定当前是否选中 */
  checked: boolean;

  /** 初始是否选中 */
  defaultChecked: boolean;

  /** 失效状态 */
  disabled: boolean;

  /** 自定义未选中状态的 icon */
  icon: React.ReactNode;

  /** 自定义选中状态的 icon */
  checkedIcon: React.ReactNode;

  /** 设置选中时的背景色 */
  color: string;

  /** 设置 indeterminate 状态，只负责样式控制 */
  indeterminate: boolean;

  /** 内部 input 的 ref */
  inputRef: React.Ref<HTMLInputElement>;

  /** 设置内部 input 的属性 */
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;

  children: React.ReactNode;

  style: React.CSSProperties;

  className: string;

  /** 变化时回调函数 */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
