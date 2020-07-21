import React from 'react';
import { IconProps } from './interface';

import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";

function Icon(props: IconProps) {
  const {
    type,
    style,
    className,
  } = props;

  const Icon = (AiIcon as any)[type] || (BsIcon as any)[type];

  return Icon ? <Icon style={style} className={className}/> : <span/>;
}

/** @component */
export default Icon;
