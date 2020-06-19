import React from 'react';
import TabContext from './TabContext';

import {
  TabNavListProps,
} from '../interface';
import {
  TabNavItemView,
  TabNavView,
} from '../style';

function TabNavList({
  activeKey,
  tabPosition,
  onTabClick,
}: TabNavListProps) {
  const { tabs } = React.useContext(TabContext);

  return (
    <TabNavView>
      {tabs.map(tab => (
        <TabNavItemView
          key={tab.key}
          tabPosition={tabPosition}
          active={activeKey === tab.key}
          disabled={tab.disabled}
          onClick={() => tab.disabled || onTabClick(tab.key)}
        >
          {tab.tab}
        </TabNavItemView>
      ))}
    </TabNavView>
  );
}

export default React.memo(TabNavList);
