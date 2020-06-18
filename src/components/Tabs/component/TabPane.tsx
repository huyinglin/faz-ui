import React from 'react';
import { TabPaneProps } from '../interface';

function TabPane({
  children,
  active,
}: TabPaneProps) {
  return (
    <div
      role="tabpanel"
      tabIndex={active ? 0 : -1}
    >
      {active && children}
    </div>
  );
}

export default React.memo(TabPane);
