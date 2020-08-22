import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-spring/renderprops';
import { v4 as uuid } from 'uuid';

import {
  MessageHubProps,
  MessageHubState,
  MessageProps,
} from './interface';
import {
  MessageHubView,
  MessageAnimatedView,
} from './style';
import Message from './component/Message';

const AnimationConfig = { tension: 125, friction: 20, precision: 0.1 };

class MessageHub extends Component<MessageHubProps, MessageHubState> {
  static newInstance: (
    properties: MessageHubProps & { getContainer?: () => HTMLElement },
    callback: (instance: any) => void,
  ) => void;

  state: MessageHubState = {
    queue: [],
  }

  add = (message: MessageProps) => {
    const { maxCount } = this.props;
    const { queue } = this.state;
    const key = message.key || uuid();
    const newMessage = {
      ...message,
      key,
    }

    if (maxCount && queue.length >= maxCount) {
      queue.shift();
    }

    this.setState({ queue: [...queue, newMessage] });
  }

  remove = (key: React.Key) => {
    this.setState(({ queue }) => ({ queue: queue.filter(it => it.key !== key ) }));
  }

  render() {
    const { queue } = this.state;
    return (
      <MessageHubView {...this.props}>
        <Transition
          items={queue}
          keys={item => item.key as string}
          from={{ opacity: 0, height: 0 }}
          enter={item => async (next: Function) => {
            await next({ opacity: 1, height: 'auto' })
          }}
          leave={item => async (next: Function, cancel: Function) => {
            await next({ opacity: 0 });
            await next({ height: 0 });
            await next({ zIndex: -1 });
          }}
          config={(item: MessageProps, state: string) => ({
            duration: state === 'leave' ? 120 : undefined,
            ...AnimationConfig
          })}
        >
          {({ onClose, ...messageProps}) => props =>
            <MessageAnimatedView key={messageProps.key} style={props}>
              <Message
                onClose={() => this.remove(messageProps.key!)}
                {...messageProps}
              />
            </MessageAnimatedView>
          }
        </Transition>
      </MessageHubView>
    )
  }
}

MessageHub.newInstance = function (props: MessageHubProps, callback: (instance: any) => void) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function setRef(messagehub: MessageHub) {
    callback({
      open(props: MessageProps) {
        messagehub.add(props);
      },
      close(key: React.Key) {
        messagehub.remove(key);
      },
    });
  }

  ReactDOM.render(<MessageHub ref={setRef} {...props}/>, div);
}

export default MessageHub;
