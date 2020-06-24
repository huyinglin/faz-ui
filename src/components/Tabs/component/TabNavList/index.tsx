import React from 'react';
import TabContext from '../TabContext';
import TabNode from './TabNode';
import useRefs from '../../../../hooks/useRefs';
import { TabPosition, TabSizeMap } from '../../interface';
import { useOffsets } from '../hooks/useOffsets';
import {
  InkBarView,
  TabListView,
  TabNavView,
  TabNavWrapView,
} from '../../style';

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

  const tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';

  const { tabs } = React.useContext(TabContext);

  const tabsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const tabListRef = React.useRef<HTMLDivElement | null>(null);
  const [getBtnRef, removeBtnRef] = useRefs<HTMLButtonElement>();

  const [wrapperScrollWidth, setWrapperScrollWidth] = React.useState<number>(0);
  const [tabSizes, setTabSizes] = React.useState<TabSizeMap>(new Map());
  const tabOffsets = useOffsets(tabs, tabSizes, wrapperScrollWidth);

/* =================================== Ink ================================== */

  const [inkStyle, setInkStyle] = React.useState<React.CSSProperties>();
  const activeTabOffset = tabOffsets.get(activeKey);

  React.useEffect(() => {
    const newInkStyle: React.CSSProperties = {};

    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }
        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }

    setInkStyle(newInkStyle);

  }, [activeTabOffset, tabPositionTopOrBottom, rtl]);


  React.useEffect(() => {
    onListHolderResize();
  }, [activeKey]);

  const onListHolderResize = () => {

    setWrapperScrollWidth(tabListRef.current?.offsetWidth || 0);

    setTabSizes(() => {
      const newSizes: TabSizeMap = new Map();
      tabs.forEach(({ key }) => {
        const btnNode = getBtnRef(key).current;
        console.log('btnNode: ', btnNode);
        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop,
          });
        }
      });
      return newSizes;
    });
  };

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
    <TabNavView
      ref={ref}
      role="tablist"
      className={className}
      style={style}
    >
      <TabNavWrapView ref={tabsWrapperRef}>
        <TabListView
          ref={tabListRef}
          style={{
            // transform: `translate(${0}px, ${0}px)`,
            // transition: lockAnimation ? 'none' : undefined,
          }}
        >
          {tabNodes}
          <InkBarView
            style={inkStyle}
          />
        </TabListView>
      </TabNavWrapView>
    </TabNavView>
  );
}

export default React.forwardRef(TabNavList);
