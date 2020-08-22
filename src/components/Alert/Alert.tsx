import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import * as ease from 'd3-ease';

import {
  AlertView,
  AlertCloseView,
  AlertContentView,
  AlertMessageView,
  AlertIconView,
  AlrtDescView,
} from './style';
import {
  AlertProps,
} from './interface';
import {
  AiOutlineClose,
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillExclamationCircle,
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlineCloseCircle,
} from 'react-icons/ai';

const icons = {
  info: <AiFillInfoCircle style={{color: '#1890ff'}}/>,
  success: <AiFillCheckCircle style={{color: '#52c41a'}}/>,
  warning: <AiFillExclamationCircle style={{color: '#faad14'}}/>,
  danger: <AiFillCloseCircle style={{color: '#ff4d4f'}}/>,
}

const descIcons = {
  info: <AiOutlineInfoCircle style={{color: '#1890ff'}}/>,
  success: <AiOutlineCheckCircle style={{color: '#52c41a'}}/>,
  warning: <AiOutlineExclamationCircle style={{color: '#faad14'}}/>,
  danger: <AiOutlineCloseCircle style={{color: '#ff4d4f'}}/>,
}

function Alert(props: AlertProps) {
  const {
    closable = false,
    type = 'info',
    message,
    showIcon = false,
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
      onClose(e);
    }
  }

  const [alert, setAlert] = useState<React.ReactElement | null>(() => {
    const hasDesc = !!description;
    const icon = hasDesc ? descIcons : icons;

    return (
      <AlertView
        style={{...style, ...springProps}}
        type={type}
        className={`faz-ui_alert ${className}`}
      >
        <AlertContentView>
          <AlertMessageView hasDesc={hasDesc}>
            {showIcon && <AlertIconView hasDesc={hasDesc}>{icon[type]}</AlertIconView>}
            {message}
          </AlertMessageView>
          {closable && <AlertCloseView onClick={handleClose}><AiOutlineClose/></AlertCloseView>}
        </AlertContentView>
        {description && <AlrtDescView showIcon={showIcon}>{description}</AlrtDescView>}
      </AlertView>
    );
  });

  return alert;
}

Alert.defaultProps = {
  type: 'info',
}

export default Alert;
