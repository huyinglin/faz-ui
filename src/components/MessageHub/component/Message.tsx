import React from 'react'
import { MessageProps } from '../interface'
import { MessageView } from '../style';
import { AiOutlineClose } from 'react-icons/ai';

function Message(props: MessageProps) {
  const {
    style,
    className,
    duration,
    content,
    closeIcon,
    closable,
    onClick,
    onClose,
  } = props;

  React.useEffect(() => {
    if (typeof duration === 'number') {
      setTimeout(() => {
        onClose!();
      }, duration);
    }
  }, [])

  return (
    <MessageView
      style={style}
      className={className}
      onClick={onClick}
    >
      {content}
      {closable && (closeIcon || <AiOutlineClose onClick={onClose}/>)}
    </MessageView>
  )
}

export default Message
