export type TabSize = 'large' | 'default' | 'small';

export interface TabsProps {
  activeKey: string;
  defaultActiveKey: string;
  size: TabSize;
  children?: React.ReactNode;
  onChange(activeKey: string): void;
}

export interface TabPaneProps {
  tab?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  tabKey?: string;
  active?: boolean;
}

export interface Tab extends TabPaneProps {
  key: string;
  node: React.ReactElement;
}

export interface TabContextProps {
  tabs: Tab[];
}

export interface TabPanelListProps {
  activeKey: React.Key;
}

export interface TabNavListProps extends TabPaneProps {
  activeKey: React.Key;
  onTabClick(key: string): void;
}
