import React, { useState } from 'react';
import {
  AlertView,
  AlrtDescView,
} from './style';
import {
  AlertProps,
} from './interface';
import { styledFactory } from '../../styled';

// const { Span } = styledElement;
const Span = styledFactory('span');

function Alert(props: AlertProps) {
  const {
    closable,
    type,
    message,
    description,
    className,
    style,
    onClose,
  } = props;

  const [closed, setClosed] = useState(false);

  function handleClose(e: React.MouseEvent<HTMLDivElement>) {
    if (e) {
      e.stopPropagation();
    }
    setClosed(true);
    if (onClose) {
      onClose();
    }
  }

  if (closed) {
    return null;
  }

  if (description) {
    return (
      <AlertView
        style={style}
        type={type}
        className={className}
      >
        <AlrtDescView>
          {message}
          {closable &&
            <Span cursor="pointer" onClick={handleClose}>x</Span>
          }
        </AlrtDescView>
        <div>{description}</div>
      </AlertView>
    );
  }

  return (
    <AlertView
      style={style}
      type={type}
      className={className}
    >
      {message}
      {closable && <Span cursor="pointer" onClick={handleClose}>x</Span>}
    </AlertView>
  );
}

Alert.defaultProps = {
  type: 'info',
}

/** @component */
export default Alert;
