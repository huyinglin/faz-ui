export interface RadioProps {
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

  /** 内部 input 的 ref */
  inputRef: React.Ref<HTMLInputElement>;

  /** input[type="radio"] 的 name 属性 */
  name: string;

  /** 根据 value 进行比较，判断是否选中 */
  value: any;

  /** 设置内部 input 的属性 */
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;

  children: React.ReactNode;

  style: React.CSSProperties;

  className: string;

  /** 变化时回调函数 */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps {
  /** 默认选中的值 */
  defaultValue: any;

  /** 禁选所有子单选器 */
  disabled: boolean;

  /** 用于设置当前选中的值 */
  value: any;

  /** RadioGroup 内 Radio 的排列方式 */
  mode: 'row' | 'col';

  children: React.ReactNode;

  style: React.CSSProperties;

  className: string;

  /** 变化时回调函数 */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioContextProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  disabled?: boolean;
}
