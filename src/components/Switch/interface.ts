export interface SwitchProps {
  /** 指定当前是否选中 */
  checked: boolean;

  /** 初始是否选中 */
  defaultChecked: boolean;

  /** 失效状态 */
  disabled: boolean;

  /** 选中时的内容	 */
  checkedChildren: React.ReactNode;

  /** 非选中时的内容 */
  unCheckedChildren: React.ReactNode;

  /** 设置选中时的背景色 */
  color: string;

  /** 开关大小 */
  size: 'default' | 'small';

  /** 内部 input 的 ref */
  inputRef: React.Ref<HTMLInputElement>;

  children: React.ReactNode;

  style: React.CSSProperties;

  className: string;

  /** 变化时回调函数 */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
