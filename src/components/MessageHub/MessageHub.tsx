import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  MessageHubProps,
  MessageHubState,
  MessageProps,
} from './interface';
import {
  MessageHubView,
} from './style';
import Message from './component/Message';

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
    const newMessage = {
      ...message,
      key: message.key || (Date.now() + Math.random())
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
        {queue.map(({ onClose, ...messageProps}: MessageProps) =>
          <Message
            onClose={() => this.remove(messageProps.key!)}
            {...messageProps}
          />
        )}
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

/** @component */
export default MessageHub;
