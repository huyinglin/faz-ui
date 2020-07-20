import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import * as ease from 'd3-ease';

import {
  AlertView,
  AlrtDescView,
} from './style';
import {
  AlertProps,
} from './interface';
import { styledFactory } from '../../styled';

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
  const springProps = useSpring({
    opacity: closed ? 0 : 1,
    config: {
      duration: 300,
      easing: ease.easeQuadOut,
    },
    onRest: () => closed && setAlert(null),
  });

  function handleClose(e: React.MouseEvent<HTMLDivElement>) {
    if (e) {
      e.stopPropagation();
    }
    setClosed(true);
    if (onClose) {
      onClose();
    }
  }

  const [alert, setAlert] = useState<React.ReactElement | null>(() => {
    if (description) {
      return (
        <AlertView
          style={{...style, ...springProps}}
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
        style={{...style, ...springProps}}
        type={type}
        className={className}
      >
        {message}
        {closable && <Span cursor="pointer" onClick={handleClose}>x</Span>}
      </AlertView>
    );
  });

  return alert;
}

Alert.defaultProps = {
  type: 'info',
}

/** @component */
export default Alert;
