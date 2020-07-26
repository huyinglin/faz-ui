
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type'> {
  /** 带标签的 input，设置后置标签 */
  addonAfter: string | React.ReactNode;

  /** 带标签的 input，设置前置标签 */
  addonBefore: string | React.ReactNode;

  /** 带有前缀图标的 input */
  prefix: string | React.ReactNode;

  /** 带有后缀图标的 input */
  suffix: string | React.ReactNode;

  /** 输入框默认内容 */
  defaultValue: string;

  /** 是否禁用状态 */
  disabled: boolean;

  /** 最大长度 */
  maxLength: number;

  /** 控件大小 */
  size: 'large' | 'default' | 'small';

  /** 声明 input 类型，默认 text。同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea") */
  type: string;

  /** 可以点击清除图标删除内容 */
  allowClear: boolean;

  /** 输入框内容	 */
  value: string;

  /** 输入框内容变化时的回调 */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** 按下回车的回调 */
  onPressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
