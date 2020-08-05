import { ButtonProps, ButtonSize, ButtonType } from './../Button/interface';
import { TooltipProps } from '../Tooltip/interface';

export interface PopconfirmButton {
  text: string;
  type: ButtonType;
  size: ButtonSize;
  props: ButtonProps;
}

export interface PopconfirmProps extends Partial<TooltipProps> {
  /** 设置确认按钮配置 */
  confirmButton?: Partial<PopconfirmButton>;

  /** 设置取消按钮配置 */
  cancelButton?: Partial<PopconfirmButton>;

  /** 确认框的描述 */
  title: React.ReactNode;

  /** 自定义提示 icon */
  icon?: React.ReactNode;

  /** 点击取消的回调 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;

  /** 点击确认的回调 */
  onConfirm?: (e: React.MouseEvent<HTMLElement>) => void;
}
