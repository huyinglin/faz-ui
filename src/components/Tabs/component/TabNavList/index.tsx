import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import raf from 'raf';

import TabContext from '../TabContext';
import TabNode from './TabNode';
import { TabPosition, TabSizeMap } from '../../interface';
import {
  InkBarView,
  TabListView,
  TabNavView,
  TabNavWrapView,
} from '../../style';
import { useOffsets } from '../hooks/useOffsets';
import { useRefs } from '../../../../hooks/useRefs';
import { useTouchMove } from '../../../../hooks/useTouchMove';
import { useSyncState } from '../../../../hooks/useSyncState';
import { useRaf, useRafState } from '../../../../hooks/useRaf';

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

  const [wrapperScrollWidth, setWrapperScrollWidth] = React.useState<number>(0); // tabListRef, 整个 Nav 的宽度，包括不可见 Tab
  const [wrapperWidth, setWrapperWidth] = React.useState<number>(0); // tabsWrapperRef
  const [tabSizes, setTabSizes] = useRafState<TabSizeMap>(new Map());
  const tabOffsets = useOffsets(tabs, tabSizes, wrapperScrollWidth);

  const [transformLeft, setTransformLeft] = useSyncState(0, (next, prev) => {
    console.log('prev: ', prev);
    console.log('next: ', next);
  });

/* =================================== Ink ================================== */

  const [inkStyle, setInkStyle] = React.useState<React.CSSProperties>();

  const activeTabOffset = tabOffsets.get(activeKey);


  // 避免闪烁
  const inkBarRafRef = React.useRef<number>();

  function cleanInkBarRaf() {
    raf.cancel(inkBarRafRef.current as number);
  }

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

    cleanInkBarRaf();
    inkBarRafRef.current = raf(() => setInkStyle(newInkStyle));

    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]);

/* ================================ Transform =============================== */

  let transformMin = 0; // 可滑动的最小值
  let transformMax = 0; // 可滑动的最大值

  if (!tabPositionTopOrBottom) {

  } else if (rtl) {

  } else {
    // 正常模型
    transformMin = Math.min(0, wrapperWidth - wrapperScrollWidth);
    transformMax = 0;
  }

  // 防止越界
  function alignInRange(value: number): [number, boolean] {
    if (value < transformMin) {
      return [transformMin, false];
    }
    if (value > transformMax) {
      return [transformMax, false];
    }
    return [value, true];
  }

  useTouchMove(tabsWrapperRef, (offsetX, offsetY) => {
    let preventDefault = false;

    function doMove(setState: React.Dispatch<React.SetStateAction<number>>, offset: number) {
      setState(value => {
        const [newValue, needPrevent] = alignInRange(value + offset);

        preventDefault = needPrevent;
        return newValue;
      });
    }

    if (tabPositionTopOrBottom) {
      if (wrapperWidth >= wrapperScrollWidth) {
        return preventDefault;
      }
      doMove(setTransformLeft, offsetX);
    }

    return preventDefault;
  });

  React.useEffect(() => {
    onListHolderResize();
  }, [activeKey]);

  const onListHolderResize = useRaf(() => {
    const offsetWidth = tabsWrapperRef.current?.offsetWidth || 0;

    setWrapperWidth(offsetWidth);
    setWrapperScrollWidth(tabListRef.current?.offsetWidth || 0);

    setTabSizes(() => {
      const newSizes: TabSizeMap = new Map();
      tabs.forEach(({ key }) => {
        const btnNode = getBtnRef(key).current;
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
  });

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
      <ResizeObserver onResize={onListHolderResize}>
        <TabNavWrapView ref={tabsWrapperRef}>
          <ResizeObserver onResize={onListHolderResize}>
            <TabListView
              ref={tabListRef}
              style={{
                transform: `translate(${transformLeft}px, ${0}px)`,
                // transition: lockAnimation ? 'none' : undefined,
              }}
            >
              {tabNodes}
              <InkBarView
                style={inkStyle}
              />
            </TabListView>
          </ResizeObserver>
        </TabNavWrapView>
      </ResizeObserver>
    </TabNavView>
  );
}

export default React.forwardRef(TabNavList);
