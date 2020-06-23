export type TabSize = 'large' | 'default' | 'small';
export type TabPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  // prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;

  activeKey?: string;
  defaultActiveKey?: string;
  direction?: 'ltr' | 'rtl'; // 文字方向
  // animated?: boolean | AnimatedConfig; // TODO
  // renderTabBar?: RenderTabBar; // TODO
  tabBarExtraContent?: React.ReactNode;
  tabBarGutter?: number;
  tabBarStyle?: React.CSSProperties;
  tabPosition?: TabPosition;
  destroyInactiveTabPane?: boolean;

  onChange?: (activeKey: string) => void;
  onTabClick?: (activeKey: string, e: React.KeyboardEvent | React.MouseEvent) => void;
  // onTabScroll?: OnTabScroll; // TODO

  // editable?: EditableConfig; // TODO

  // ARIA
  // locale?: TabsLocale;

  // Icons
  moreIcon?: React.ReactNode;
  /** @private Internal usage. Not promise will rename in future */
  moreTransitionName?: string;
}

export interface TabPaneProps {
  tab?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
  forceRender?: boolean;
  closable?: boolean;
  closeIcon?: React.ReactNode;

  // Pass by TabPaneList
  prefixCls?: string;
  tabKey?: string;
  id?: string;
  animated?: boolean;
  active?: boolean;
  destroyInactiveTabPane?: boolean;
}

export interface Tab extends TabPaneProps {
  key: string;
  node: React.ReactElement;
}

export interface TabContextProps {
  tabs: Tab[];
}

export interface TabNavListProps extends TabPaneProps, TabsProps {
  onTabClick(key: string): void;
}

export type TabSizeMap = Map<
  React.Key,
  { width: number; height: number; left: number; top: number }
>;

export interface TabOffset {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
}

export type TabOffsetMap = Map<React.Key, TabOffset>;
