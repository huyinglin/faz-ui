import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import TabContext from './component/TabContext';
import TabPaneList from './component/TabPaneList';
import TabPane from './component/TabPane';
import TabNavList from './component/TabNavList';
import toArray from '../../utils/toArray';

import {
  Tab,
  TabsProps,
  TabPaneProps,
} from './interface';
import {
  TabsView,
} from './style';

function parseTabList(children: React.ReactNode): Tab[] {
  const tabList: Tab[] = [];
  toArray(children).forEach((node: React.ReactElement<TabPaneProps>) => {
    if (React.isValidElement(node)) {
      if (node.key === undefined) {
        throw new Error('The TabPane must have the `key` props!');
      }
      tabList.push({
        key: String(node.key),
        ...node.props,
        node,
      });
    }
  });
  return tabList;
}

function Tabs({
  tabPosition,
  activeKey,
  defaultActiveKey,
  children,
  onChange,
}: TabsProps) {
  const [active, setActive] = useState<string>('');

  const tabs = parseTabList(children);

  useEffect(() => {
    if (activeKey !== undefined) {
      setActive(activeKey);
    }
  }, [activeKey]);

  useEffect(() => {
    if (defaultActiveKey !== undefined) {
      setActive(defaultActiveKey);
    }
  }, [defaultActiveKey]);

  const handleTabClick = useCallback((key: string) => {
    setActive(key);
    if (onChange) {
      onChange(key);
    }
  }, [onChange]);

  return (
    <TabContext.Provider value={{ tabs }}>
      <TabsView tabPosition={tabPosition}>
        <TabNavList
          activeKey={active}
          tabPosition={tabPosition}
          onTabClick={handleTabClick}
        />
        <TabPaneList
          activeKey={active}
          tabPosition={tabPosition}
        />
      </TabsView>
    </TabContext.Provider>
  );
}

Tabs.TabPane = TabPane;
Tabs.displayName = 'Tabs';

Tabs.defaultProps = {
  tabPosition: 'top',
};

Tabs.propTypes = {

};

/** @component */
export default Tabs;
