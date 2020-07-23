export interface NotificationProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  key?: React.Key;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  style?: React.CSSProperties;
  className?: string;
  duration?: number | null;
  closable?: boolean;

  onClose?: (key: React.Key) => void;
  onClick?: (key: React.Key) => void;
}
