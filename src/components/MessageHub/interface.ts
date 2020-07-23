export interface MessageHubProps {
  /** 最大消息数 */
  maxCount?: number;

  /** 弹出框层级 */
  zIndex?: number;

  /** 弹出位置 */
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

  style?: React.CSSProperties;
  className?: string;

  /** 弹出位置距离文档的位置 */
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  }
}

export interface MessageHubState {
  queue: MessageProps[];
}

export interface MessageProps {
  key?: React.Key;
  style?: React.CSSProperties;
  className?: string;
  duration?: number | null;
  content?: React.ReactNode | ((onClose: () => void) => React.ReactNode);
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClose?: () => void;
}
