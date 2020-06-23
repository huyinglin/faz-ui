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
  // size,
  onTabClick,
}: TabNavListProps) {
  const { tabs } = React.useContext(TabContext);
  return (
    <TabNavView>
      {tabs.map(tab => (
        <div
          key={tab.key}
          // disabled={tab.disabled}
          onClick={() => tab.disabled || onTabClick(tab.key)}
        >
          {tab.tab}
        </div>
      ))}
    </TabNavView>
  );
}

export default React.memo(TabNavList);
