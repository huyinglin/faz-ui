import React from 'react';
import PropTypes from 'prop-types';

import TabContext from './component/TabContext';
import TabPaneList from './component/TabPaneList';
import TabPane from './component/TabPane';
import TabNavList from './component/TabNavList';
import toArray from '../../utils/toArray';
import useMergedState from '../../hooks/useMergedState';

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
      const key = node.key !== undefined ? String(node.key) : '';
      tabList.push({
        key,
        ...node.props,
        node,
      });
    }
  });
  return tabList;
}

function Tabs(props: TabsProps) {
  const {
    id,
    // prefixCls = 'rc-tabs',
    className,
    children,
    direction,
    activeKey,
    defaultActiveKey,
    // editable,
    // animated,
    tabPosition = 'top',
    tabBarGutter,
    tabBarStyle,
    tabBarExtraContent,
    // locale,
    moreIcon,
    moreTransitionName,
    destroyInactiveTabPane,
    // renderTabBar,
    onChange,
    onTabClick,
    // onTabScroll,
    ...restProps
  } = props;

  const tabs = parseTabList(children);

  const rtl = direction === 'rtl';

  /* =============================== Active key =============================== */
  const [mergedActiveKey, setMergedActiveKey] = useMergedState<string>(() => tabs[0]?.key, {
    value: activeKey,
    defaultValue: defaultActiveKey,
  });

  const [activeIndex, setActiveIndex] = React.useState(() =>
    tabs.findIndex(tab => tab.key === mergedActiveKey),
  );

  // Reset active key if not exist anymore
  React.useEffect(() => {
    let newActiveIndex = tabs.findIndex(tab => tab.key === mergedActiveKey);
    if (newActiveIndex === -1) {
      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey(tabs[newActiveIndex]?.key);
    }
    setActiveIndex(newActiveIndex);
  }, [tabs.map(tab => tab.key).join('_'), mergedActiveKey, activeIndex]);

  /* ================================= Events ================================= */
  const onInternalTabClick = React.useCallback((key, e) => {
    onTabClick?.(key, e);
    onChange?.(key);
    setMergedActiveKey(key);
  }, [onTabClick, onChange, setMergedActiveKey]);

  /* ================================= Render ================================= */
  const sharedProps = {
    id: id || 'faz-tabs',
    activeKey: mergedActiveKey,
    // animated: mergedAnimated,
    tabPosition,
    rtl,
  };

  const tabNavBarProps = {
    ...sharedProps,
    // editable,
    // locale,
    moreIcon,
    moreTransitionName,
    tabBarGutter,
    onTabClick: onInternalTabClick,
    // onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
  };

  return (
    <TabContext.Provider value={{ tabs }}>
      <div
        // ref={ref}
        id={id}
        className={className}
        {...restProps}
      >
        <TabNavList {...tabNavBarProps} />
        <TabPaneList {...sharedProps}/>
      </div>
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
