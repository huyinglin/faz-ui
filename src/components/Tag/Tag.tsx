import React from 'react';
import PropTypes from 'prop-types';

import {
  TagProps
} from './interface';
import {
  TagView,
  TagCloseView,
  TagIconView,
} from './style';
import { AiOutlineClose } from 'react-icons/ai';

function Tag(props: Partial<TagProps>) {
  const {
    closable = false,
    closeIcon = <AiOutlineClose/>,
    icon,
    checked,
    color = 'default',
    children,
    style,
    className,
    checkedBackground = '#1890ff',
    styleConfig,
    onCheck,
    onClose,
  } = props;

  const [visible, setVisible] = React.useState<boolean>(true);

  const checkable = 'checked' in props;

  React.useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible!);
    }
  }, [props.visible]);

  function handleClose(e: React.MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    if (!('visible' in props)) {
      setVisible(false);
    }
    if (typeof onClose === 'function') {
      onClose(e);
    }
  }

  function handleCheck() {
    if (typeof onCheck === 'function') {
      onCheck(!checked);
    }
  }

  return (
    <TagView
      visible={visible}
      checked={checkable && !!checked}
      checkable={checkable}
      onClick={handleCheck}
      color={color}
      style={style}
      className={`faz-ui_tag ${className}`}
      checkedBackground={checkedBackground}
      styleConfig={styleConfig}
    >
      {icon &&
        <TagIconView>
          {icon}
        </TagIconView>
      }
      {children}
      {!checkable && closable &&
        <TagCloseView onClick={handleClose}>
          {closeIcon}
        </TagCloseView>
      }
    </TagView>
  );
}

Tag.displayName = 'Tag';

export default Tag;
