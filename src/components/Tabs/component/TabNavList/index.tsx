import React from 'react';
import { TabPosition } from '../../interface';
import TabContext from '../TabContext';

export interface TabNavListProps {
  id: string;
  tabPosition: TabPosition;
  activeKey: string;
  rtl: boolean;
  // animated?: AnimatedConfig;
  extra?: React.ReactNode;
  // editable?: EditableConfig;
  moreIcon?: React.ReactNode;
  mobile: boolean;
  tabBarGutter?: number;
  // renderTabBar?: RenderTabBar;
  className?: string;
  style?: React.CSSProperties;
  // locale?: TabsLocale;
  onTabClick: (activeKey: React.Key, e: React.MouseEvent | React.KeyboardEvent) => void;
  children?: (node: React.ReactElement) => React.ReactElement;
}

function TabNavList(props: TabNavListProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    style,
  } = props;

  const { tabs } = React.useContext(TabContext);

  const tabsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const tabListRef = React.useRef<HTMLDivElement | null>(null);

  const [inkStyle, setInkStyle] = React.useState<React.CSSProperties>();

  return (
    <div
      ref={ref}
      role="tablist"
      className={className}
      style={style}
    >
      <div ref={tabsWrapperRef}>
        <div
          ref={tabListRef}
          // style={{
          //   transform: `translate(${transformLeft}px, ${transformTop}px)`,
          //   transition: lockAnimation ? 'none' : undefined,
          // }}
        >
          {tabNodes}
          <div
            style={inkStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default TabNavList;
