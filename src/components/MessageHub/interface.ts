export interface MessageHubProps {

}

export interface MessageHubState {
  queue: MessageProps[];
}

export interface MessageProps {
  key?: React.Key;
  style?: React.CSSProperties;
  className?: string;
  duration?: number | null;
  content?: React.ReactNode;
  closeIcon?: React.ReactNode;
  closable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClose?: () => void;
}
