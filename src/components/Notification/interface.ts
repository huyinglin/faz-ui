export interface NotificationProps {

}

export interface NotificationState {
  queue: Notice[];
}

interface DivProps extends React.HTMLProps<HTMLDivElement> {
  // Ideally we would allow all data-* props but this would depend on https://github.com/microsoft/TypeScript/issues/28960
  'data-testid'?: string;
}

export interface Notice {
  key?: React.Key;
  style?: React.CSSProperties;
  className?: string;
  duration?: number | null;
  content?: React.ReactNode;
  closeIcon?: React.ReactNode;
  closable?: boolean;
  props?: DivProps;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClose?: () => void;
}

export interface NoticeContent extends Omit<Notice, 'prefixCls' | 'children'> {
  prefixCls?: string;
  key?: React.Key;
  updateKey?: React.Key;
  content?: React.ReactNode;
}

export type NoticeFunc = (noticeProps: NoticeContent) => void;

export interface NotificationInstance {
  notice: NoticeFunc;
  removeNotice: (key: React.Key) => void;
  destroy: () => void;
  component: Notification;

  useNotification: () => [NoticeFunc, React.ReactElement];
}
