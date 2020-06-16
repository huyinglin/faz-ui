export type AlertType = 'success' | 'info' | 'danger' | 'warning';

export interface AlertProps {
  closable?: boolean;
  type: AlertType;
  message: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
  onClose?: () => void;
}
