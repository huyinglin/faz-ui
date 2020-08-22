import React from 'react';
import { isFragment } from 'react-is';

export default function toArray(children: React.ReactNode): React.ReactElement[] {
  let arr: React.ReactElement[] = [];

  React.Children.forEach(children, (child: any) => {
    if (child === undefined || child === null) {
      return;
    }
    if (Array.isArray(child)) {
      arr = arr.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      arr = arr.concat(toArray(child.props.children));
    } else {
      arr.push(child);
    }
  });

  return arr;
}
