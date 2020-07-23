import React from 'react';
import {
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';

import MessageHub from '../MessageHub';
import { MessageHubProps, MessageProps  } from '../MessageHub/interface';

import {
  NotificationProps,
} from './interface';
import {
  NotificationContentView,
  TitleView,
  DescriptionView,
} from './style';

const NotificationType = ['success', 'info', 'warning', 'error'];

const NotificationTypeIcon = {
  success: <AiOutlineCheckCircle style={{ color: '#52c41a', fontSize: 24, marginRight: 16 }}/>,
  info: <AiOutlineInfoCircle style={{ color: '#1890ff', fontSize: 24, marginRight: 16 }}/>,
  error: <AiOutlineCloseCircle style={{ color: '#ff4d4f', fontSize: 24, marginRight: 16 }}/>,
  warning: <AiOutlineExclamationCircle style={{ color: '#faad14', fontSize: 24, marginRight: 16 }}/>,
};

const cacheInstance: any = {};

let defaultConfig = {
  maxCount: undefined,
  zIndex: undefined,
  placement: 'topRight',
  position: {
    top: 24,
    right: 24,
    bottom: undefined,
    left: undefined,
  },
}

function getNotificationInstance() {
  const key = defaultConfig.placement;

  if (cacheInstance[key]) {
    return cacheInstance[key];
  }

  let notificationInstance = null;

  MessageHub.newInstance(defaultConfig as MessageHubProps, instance => {
    notificationInstance = instance;
  });

  cacheInstance[key] = notificationInstance;

  return notificationInstance;
}

function getNotificationMixedProps(props: NotificationProps): MessageProps {
  const {
    title,
    description,
    icon,
    closeIcon = <AiOutlineClose/>,
    key,
    closable = true,
    placement,
    style,
    className,
    duration = 4500,
    onClose,
    onClick,
  } = props;

  const content = (close: any) => (
    <NotificationContentView style={style} className={className}>
      <div>{icon}</div>
      <div>
        <TitleView>
          <div>{title}</div>
          <div onClick={close} className="content-close">{closable && closeIcon}</div>
        </TitleView>
        <DescriptionView>
          {description}
        </DescriptionView>
      </div>
    </NotificationContentView>
  );

  return {
    key,
    duration,
    content,
    onClick,
    onClose,
  }
}

const Notification: any = {
  open(props: NotificationProps) {
    const instance = getNotificationInstance();
    instance.open(getNotificationMixedProps(props));
  },
  close(key: React.Key) {
    const instance = getNotificationInstance();
    instance.close(key);
  },
  config(config: MessageHubProps) {
    defaultConfig = {...defaultConfig, ...config} as any;
  },
}

NotificationType.forEach((type: string) => {
  Notification[type] = (props: NotificationProps) =>
    Notification.open({...props, icon: (NotificationTypeIcon as any)[type] });
});

/** @component */
export default Notification;
