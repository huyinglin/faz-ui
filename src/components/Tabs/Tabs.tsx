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
    tabPosition = 'top',
    activeKey,
    defaultActiveKey,
    children,
    onChange,
  } = props;

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
    <TabContext.Provider value={{ ...props, tabs, activeKey: active }}>
      <TabsView tabPosition={tabPosition}>
        <TabNavList onTabClick={handleTabClick} />
        <TabPaneList/>
      </TabsView>
    </TabContext.Provider>
  );
}

Tabs.TabPane = TabPane;
Tabs.displayName = 'Tabs';

Tabs.defaultProps = {
  tabPosition: 'top',
  size: 'default',
};

Tabs.propTypes = {
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
  tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  children: PropTypes.node,
  onChange: PropTypes.func,
};

/** @component */
export default Tabs;
