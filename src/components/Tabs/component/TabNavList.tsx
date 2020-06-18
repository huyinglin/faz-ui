import React from 'react';
import TabContext from './TabContext';

import {
  TabNavListProps,
} from '../interface';
import {
  TabTitleView,
  TabNavView,
} from '../style';

function TabNavList({
  activeKey,
  onTabClick,
}: TabNavListProps) {
  const { tabs } = React.useContext(TabContext);

  return (
    <TabTitleView>
      {tabs.map(tab => (
        <TabNavView
          key={tab.key}
          active={activeKey === tab.key}
          disabled={tab.disabled}
          onClick={() => tab.disabled || onTabClick(tab.key)}
        >
          {tab.tab}
        </TabNavView>
      ))}
    </TabTitleView>
  );
}

export default React.memo(TabNavList);
