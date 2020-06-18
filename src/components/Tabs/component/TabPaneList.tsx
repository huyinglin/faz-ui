import React from 'react';
import TabContext from './TabContext';
import { TabPanelListProps } from '../interface';

function TabPaneList({
  activeKey,
}: TabPanelListProps) {
  const { tabs } = React.useContext(TabContext);

  const activeIndex = React.useMemo(() => tabs.findIndex(tab => tab.key === activeKey), [tabs, activeKey]);

  return (
    <div>
      {tabs.map(tab =>
        React.cloneElement(tab.node, {
          key: tab.key,
          tabKey: tab.key,
          active: tab.key === activeKey,
        })
      )}
    </div>
  );
}

export default React.memo(TabPaneList);
