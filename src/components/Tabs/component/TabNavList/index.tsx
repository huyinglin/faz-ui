import React from 'react';
import { TabPosition } from '../../interface';
import TabContext from '../TabContext';
import TabNode from './TabNode';
import useRefs from '../../../../hooks/useRefs';
import { InkBarView } from '../../style';

export interface TabNavListProps {
  id: string;
  tabPosition: TabPosition;
  activeKey: string;
  rtl: boolean;
  // animated?: AnimatedConfig;
  extra?: React.ReactNode;
  // editable?: EditableConfig;
  moreIcon?: React.ReactNode;
  // mobile: boolean;
  tabBarGutter?: number;
  // renderTabBar?: RenderTabBar;
  className?: string;
  style?: React.CSSProperties;
  // locale?: TabsLocale;
  onTabClick: (activeKey: string, e: React.MouseEvent | React.KeyboardEvent) => void;
  children?: (node: React.ReactElement) => React.ReactElement;
}

function TabNavList(props: TabNavListProps, ref: React.Ref<HTMLDivElement>) {
  const {
    id,
    rtl,
    className,
    activeKey,
    tabPosition,
    tabBarGutter,
    onTabClick,
    children,
    style,
  } = props;

  const { tabs } = React.useContext(TabContext);

  const tabsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const tabListRef = React.useRef<HTMLDivElement | null>(null);

  const [inkStyle, setInkStyle] = React.useState<React.CSSProperties>();

  const [getBtnRef, removeBtnRef] = useRefs<HTMLButtonElement>();

  const tabNodes: React.ReactElement[] = tabs.map(tab => {
    const { key } = tab;
    return (
      <TabNode
        id={id}
        key={key}
        rtl={rtl}
        tab={tab}
        // closable={tab.closable}
        // editable={editable}
        active={key === activeKey}
        tabPosition={tabPosition}
        tabBarGutter={tabBarGutter}
        renderWrapper={children} // ?
        // removeAriaLabel={locale?.removeAriaLabel}
        ref={getBtnRef(key)}
        onClick={e => onTabClick(key, e)}
        onRemove={() => removeBtnRef(key)}
        onFocus={() => {
          // scrollToTab(key);
          // doLockAnimation();

          // // Focus element will make scrollLeft change which we should reset back
          // if (!rtl) {
          //   tabsWrapperRef.current.scrollLeft = 0;
          // }
          // tabsWrapperRef.current.scrollTop = 0;
        }}
      />
    );
  });

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
          <InkBarView
            style={inkStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(TabNavList);
