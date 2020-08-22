// @ts-nocheck
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

const notificationType = ['success', 'info', 'warning', 'error'];

const notificationTypeIcon = {
  success: <AiOutlineCheckCircle style={{ color: '#52c41a', fontSize: 24, marginRight: 16 }}/>,
  info: <AiOutlineInfoCircle style={{ color: '#1890ff', fontSize: 24, marginRight: 16 }}/>,
  error: <AiOutlineCloseCircle style={{ color: '#ff4d4f', fontSize: 24, marginRight: 16 }}/>,
  warning: <AiOutlineExclamationCircle style={{ color: '#faad14', fontSize: 24, marginRight: 16 }}/>,
};

const cacheInstance: any = {};

let defaultConfig: MessageHubProps = {
  maxCount: undefined,
  zIndex: undefined,
  placement: 'topRight',
  position: {
    top: '24px',
    right: '24px',
    bottom: undefined,
    left: undefined,
  },
}

function getNotificationInstance(props: NotificationProps, callback: (instance: any) => void) {
  const {
    placement = defaultConfig.placement,
  } = props;

  const key = `notification-${placement}`;

  if (cacheInstance[key]) {
    callback(cacheInstance[key]);
    return;
  }

  let notificationInstance = null;

  MessageHub.newInstance({...defaultConfig, placement}, instance => {
    notificationInstance = instance;
  });

  cacheInstance[key] = notificationInstance;

  callback(notificationInstance);
}

function getNotificationMixedProps(props: NotificationProps): MessageProps {
  const {
    title,
    description,
    icon,
    closeIcon = <AiOutlineClose/>,
    key,
    closable = true,
    style,
    className,
    duration = 4500,
    onClose,
    onClick,
  } = props;

  const content = (close: any) => (
    <NotificationContentView className={`faz-ui_notification ${className}`} style={style}>
      <div className="faz-ui_notification-icon">{icon}</div>
      <div>
        <TitleView className="faz-ui_notification-title">
          <div>{title}</div>
          <div onClick={close} className="content-close">{closable && closeIcon}</div>
        </TitleView>
        <DescriptionView className="faz-ui_notification-desc">
          {description}
        </DescriptionView>
      </div>
    </NotificationContentView>
  );

  return {
    key,
    duration,
    // style,
    // className,
    content,
    onClick,
    onClose,
  }
}

const Notification: any = {
  open(props: NotificationProps) {
    getNotificationInstance(props, instance => {
      instance.open(getNotificationMixedProps(props));
    });
  },
  close(key: React.Key) {
    Object.keys(cacheInstance).forEach(cacheKey => {
      cacheInstance[cacheKey].close(key);
    });
  },
  config(config: MessageHubProps) {
    defaultConfig = {...defaultConfig, ...config};
  },
}

notificationType.forEach((type: string) => {
  Notification[type] = (props: NotificationProps) =>
    Notification.open({...props, icon: (notificationTypeIcon as any)[type] });
});

// TODO createChainedFunction
// TODO destroy

export default Notification;
