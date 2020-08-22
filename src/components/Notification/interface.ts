export interface NotificationProps {
  title: React.ReactNode;
  description: React.ReactNode;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  key?: React.Key;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  style?: React.CSSProperties;
  className?: string;
  duration?: number | null;
  closable?: boolean;
  onClose?: (key?: React.Key) => void;
  onClick?: (key: React.Key) => void;
}
