import React from 'react';
import TabContext from './TabContext';
import { TabPanelListProps } from '../interface';
import { TabContentView } from '../style';

function TabPaneList({
  activeKey,
  tabPosition,
}: TabPanelListProps) {
  const { tabs } = React.useContext(TabContext);

  const activeIndex = React.useMemo(() => tabs.findIndex(tab => tab.key === activeKey), [tabs, activeKey]);

  return (
    <TabContentView tabPosition={tabPosition}>
      {tabs.map(tab =>
        React.cloneElement(tab.node, {
          key: tab.key,
          tabKey: tab.key,
          active: tab.key === activeKey,
        })
      )}
    </TabContentView>
  );
}

export default React.memo(TabPaneList);
