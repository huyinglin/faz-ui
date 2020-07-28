export type PresetTypeColor = 'success' | 'processing' | 'error' | 'default' | 'warning';
export type PresetPresetColor =
  'pink' |
  'magenta' |
  'red' |
  'volcano' |
  'orange' |
  'yellow' |
  'gold' |
  'cyan' |
  'lime' |
  'green' |
  'blue' |
  'geekblue' |
  'purple';

export type StyleConfig = {
  background: string;
  borderColor: string;
  color: string;
}

export interface TagProps {
  /** 标签是否可以关闭 */
  closable: boolean;

  /** 自定义关闭按钮 */
  closeIcon: React.ReactNode;

  /** 标签颜色 */
  color: string | PresetTypeColor | PresetPresetColor;

  /** 是否显示标签 */
  visible: boolean;

  /** 设置Icon */
  icon: React.ReactNode;

  /** 是否选中 */
  checked: boolean;

  /** 选中后标签的背景色 */
  checkedBackground: string;

  styleConfig: Partial<StyleConfig>;

  /** @ignore */
  children: React.ReactNode;

  style: React.CSSProperties;

  className: string;

  /** 点击带有 checked 属性标签的回调 */
  onCheck: (checked: boolean) => void;

  /** 关闭时的回调 */
  onClose: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export type ColorConfig = {
  value: string;
  type: string;
}

export type TagColorProps = {
  visible: boolean;
  checked: boolean;
  checkable: boolean;
  color: string | PresetTypeColor | PresetPresetColor;
  checkedBackground: string;
  styleConfig?: Partial<StyleConfig>;
}

export type PresetColor = {
  [name: string]: {
    background: string;
    borderColor: string;
    color: string;
  };
}
