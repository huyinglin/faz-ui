type MenuMode = 'horizontal' |'vertical';

export interface MenuProps {
  defaultIndex: number;
  className: string;
  mode: MenuMode;
  style: React.CSSProperties;
  children: React.ReactNode;
  onSelect: (selectedIndex: number) => void;
}

export interface MenuItemProps {
  index: number;
  disabled: boolean;
  className: string;
  style: React.CSSProperties;
  children: React.ReactNode;
}
