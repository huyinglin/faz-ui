export type AlertType = 'success' | 'info' | 'danger' | 'warning';

export interface AlertProps {
  /** 是否可关闭 */
  closable?: boolean;

  /** 指定警告提示的样式，有四种选择 success、info、warning、danger，默认是 info */
  type?: AlertType;

  /** 警告提示内容 */
  message: string;

  /** 警告提示的辅助性文字介绍 */
  description?: string;

  /** 是否展示图标 */
  showIcon?: boolean;

  className?: string;
  style?: React.CSSProperties;

  /** 关闭时触发的回调函数 */
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
