import React, { useState } from 'react';
import classnames from 'classnames';

export type AlertType = 'success' | 'info' | 'danger' | 'warning';

export interface AlertProps {
  closable?: boolean;
  type: AlertType;
  message: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

function Alert(props: AlertProps) {
  const {
    closable,
    type,
    message,
    description,
    onClose,
    className,
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

  const classes = classnames('alert', className, {
    [`alert-${type}`]: true,
    'alert-desc': !!description,
  });

  if (description) {
    return (
      <div className={classes}>
        <div className="alrt-desc-message">
          {message}
          {closable &&
            <span className="alert-close" onClick={handleClose}>x</span>
          }
        </div>
        <div>
          {description}
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      {message}
      {closable &&
        <span className="alert-close" onClick={handleClose}>x</span>
      }
    </div>
  );
}

Alert.defaultProps = {
  type: 'info',
}

export default Alert;
