import React from 'react';
import Button from '../Button';

import {
  PopconfirmProps
} from './interface';
import {
  PopconfirmView,
  PopconfirmContentView,
  PopconfirmIconView,
  PopconfirmTitleView,
  PopconfirmButtonView,
  PopconfirmBoxView,
} from './style';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { useMergedState } from '../../hooks/useMergedState';

function Popconfirm(props: PopconfirmProps) {
  const {
    confirmButton = {},
    cancelButton = {},
    title,
    icon = <AiFillExclamationCircle/>,
    children,
    trigger,
    defaultVisible = false,
    visible,
    onChange,
    onCancel,
    onConfirm,
    ...other
  } = props;

  const [innerVisible, setInnerVisible] = useMergedState<boolean>(defaultVisible, {
    value: visible,
  });

  function handleCancel(e: React.MouseEvent<HTMLElement>) {
    if (onCancel) {
      onCancel(e);
    }
    setInnerVisible(false);
  }

  function handleConfirm(e: React.MouseEvent<HTMLElement>) {
    if (onConfirm) {
      onConfirm(e);
    }
    setInnerVisible(false);
  }

  function handleChange(visible: boolean) {
    if (onChange) {
      onChange(visible);
    }
    setInnerVisible(visible);
  }

  const popconfirmContent = (
    <PopconfirmContentView onClick={e => e.stopPropagation()}>
      <PopconfirmBoxView>
        <PopconfirmIconView>{icon}</PopconfirmIconView>
        <PopconfirmTitleView>{title}</PopconfirmTitleView>
      </PopconfirmBoxView>
      <PopconfirmButtonView>
        <Button
          size={cancelButton.size || 'small'}
          type={cancelButton.type}
          onClick={handleCancel}
          {...cancelButton.props}
        >
          {cancelButton.text || '取消'}
        </Button>
        <Button
          type={confirmButton.type || 'primary'}
          size={confirmButton.size || 'small'}
          onClick={handleConfirm}
          {...cancelButton.props}
        >
          {confirmButton.text || '确定'}
        </Button>
      </PopconfirmButtonView>
    </PopconfirmContentView>
  );

  return (
    <PopconfirmView
      {...other}
      color="#fff"
      trigger="click"
      visible={innerVisible}
      title={popconfirmContent}
      onChange={handleChange}
    >
      {children}
    </PopconfirmView>
  );
}

Popconfirm.displayName = 'Popconfirm';

Popconfirm.defaultProps = {

};

/** @component */
export default Popconfirm;
