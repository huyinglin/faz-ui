import React from 'react';
import {
  AiFillInfoCircle,
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillExclamationCircle,
} from 'react-icons/ai';

import MessageHub from '../MessageHub';
import { MessageHubProps, MessageProps as OriginMessageProps  } from '../MessageHub/interface';

import {
  MessageProps,
  MessageMixedProps,
} from './interface';
import {
  MessageContentView,
} from './style';

const messageType = ['success', 'info', 'warning', 'error'];

const messageTypeIcon = {
  success: <AiFillCheckCircle style={{ color: '#52c41a', fontSize: 16, marginRight: 8 }}/>,
  info: <AiFillInfoCircle style={{ color: '#1890ff', fontSize: 16, marginRight: 8 }}/>,
  error: <AiFillCloseCircle style={{ color: '#ff4d4f', fontSize: 16, marginRight: 8 }}/>,
  warning: <AiFillExclamationCircle style={{ color: '#faad14', fontSize: 16, marginRight: 8 }}/>,
};

let messageInstance: any = null;

let defaultConfig: MessageHubProps = {
  maxCount: undefined,
  zIndex: undefined,
  placement: 'topRight',
  position: {
    top: '24px',
    right: '50%',
    bottom: undefined,
    left: undefined,
  },
  style: {
    transform: 'translateX(50%)',
  },
};

function getMessageInstance(props: MessageProps, callback: (instance: any) => void) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }

  MessageHub.newInstance(defaultConfig, instance => {
    messageInstance = instance;
  });

  callback(messageInstance);
}

function getMessageMixedProps(props: MessageMixedProps): OriginMessageProps {
  const {
    icon,
    content,
    duration = 3000,
    onClose,
  } = props;

  const message = (
    <MessageContentView>
      {icon}{content}
    </MessageContentView>
  );

  return {
    duration,
    content: message,
    onClose,
  }
}

const Message: any = {
  open(props: MessageProps) {
    getMessageInstance(props, instance => {
      instance.open(getMessageMixedProps(props));
    });
  },
  close(key: React.Key) {
    messageInstance.close(key);
  },
  config(config: MessageHubProps) {
    defaultConfig = {...defaultConfig, ...config};
  },
}

messageType.forEach((type: string) => {
  Message[type] = (content: string | React.ReactNode | MessageProps, duration?: number, onClose?: () => void) => {
    if (typeof content === 'object' && content !== null) {
      Message.open({...content, icon: (messageTypeIcon as any)[type] });
    } else {
      Message.open({content, duration, onClose, icon: (messageTypeIcon as any)[type] });
    }
  }
});

// TODO createChainedFunction
// TODO destroy

/** @component */
export default Message;
