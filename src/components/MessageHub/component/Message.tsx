import React from 'react'
import { MessageProps } from '../interface'
import { MessageView } from '../style';

const Message = React.forwardRef((props: MessageProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    style,
    className,
    duration,
    content,
    onClick,
    onClose,
  } = props;

  React.useEffect(() => {
    if (typeof duration === 'number') {
      setTimeout(() => {
        onClose!();
      }, duration);
    }
  }, []);

  return (
    <MessageView
      style={style}
      ref={ref}
      className={className}
      onClick={onClick}
    >
      {typeof content === 'function' ? content(onClose!) : content}
    </MessageView>
  )
});

export default Message
