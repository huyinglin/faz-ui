export interface MessageProps {
  content: string | React.ReactNode;
  duration?: number | null;
  onClose?: (key: React.Key) => void;
}

export interface MessageMixedProps extends MessageProps {
  icon: React.ReactNode;
}
