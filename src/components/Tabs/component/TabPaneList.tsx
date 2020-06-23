import React from 'react';
import TabContext from './TabContext';
import { TabContentView } from '../style';

function TabPaneList(props: any) {
  const { activeKey } = props;
  const { tabs } = React.useContext(TabContext);
  return (
    <TabContentView>
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
