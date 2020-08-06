import React from 'react';

import {
  EmptyProps
} from './interface';
import {
  EmptyView,
} from './style';
import { BsInboxFill } from 'react-icons/bs';

function Empty(props: Partial<EmptyProps>) {
  const {
    description,
    image,
    size = 64,
    imageStyle,
    style,
    className,
  } = props;

  return (
    <EmptyView style={style} className={className}>
      {image || <BsInboxFill style={{ fontSize: size, color: '#ccc' }}/>}
      <span>{description || '暂无数据'}</span>
    </EmptyView>
  );
}

Empty.displayName = 'Empty';

Empty.defaultProps = {

};

/** @component */
export default Empty;
