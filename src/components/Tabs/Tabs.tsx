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

function Tabs(props: TabsProps) {
  const {
    activeKey,
    defaultActiveKey,
    children,
    onChange,
  } = props;

  const [active, setActive] = useState<string>('');

  const tabs = parseTabList(children);

  useEffect(() => {
    setActive(activeKey);
  }, [activeKey])

  useEffect(() => {
    setActive(defaultActiveKey);
  }, [defaultActiveKey])

  const handleTabClick = useCallback((key: string) => {
    setActive(key);
    onChange(key);
  }, [onChange]);

  return (
    <TabContext.Provider value={{ tabs }}>
      <TabsView>
        <TabNavList
          activeKey={active}
          onTabClick={handleTabClick}
        />
        <TabPaneList activeKey={active}/>
      </TabsView>
    </TabContext.Provider>
  );
}

Tabs.TabPane = TabPane;
Tabs.displayName = 'Tabs';

Tabs.defaultProps = {

};

Tabs.propTypes = {

};

/** @component */
export default Tabs;
