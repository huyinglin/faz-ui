export interface SelectProps {
  /** 支持清除 */
  allowClear: boolean;

  /** 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效 */
  autoClearSearchValue: boolean;

  /** 是否禁用 */
  disabled: boolean;

  /** 使单选模式可搜索 */
  showSearch: boolean;

  /** 开启多选模式 */
  multiple: boolean;

  /** 自定义选择框后缀图标 */
  suffixIcon: React.ReactNode;

  /** 自定义多选框清空图标	 */
  clearIcon: React.ReactNode;

  defaultValue: string | string[];

  value: string | string[];

  /** 选择框默认文字 */
  placeholder: string;

  /** 设置弹窗滚动高度 */
  listHeight: number;

  style: React.CSSProperties;

  className: string;

  children: React.ReactNode;

  onSelect: (value: string | string[]) => void;

  onChange: (value: string | string[] | undefined) => void;
}

export interface SelectOptionProps {
  /** 是否禁用该 Option */
  disabled?: boolean;

  /** 默认根据此属性值进行筛选 */
  value: string;

  style?: React.CSSProperties;

  className?: string;

  children?: string | string[];
}

export interface SelectOption {
  value: string;
  label: string;
  disabled: boolean;
  selected: boolean;
  searchTarget: boolean;
}

export type OptioinMap = Map<string, SelectOption>;

export interface SelectContextProps {
  value: string[];
  selectWidth: number;
  showSearch: boolean;
  multiple: boolean;
  option: OptioinMap;
  keyboardActiveValue: string | null;
  onUnselect: (selectValue: string, label: string) => void;
  onSelect: (selectValue: string, label: string) => void;
  onFocus: () => void;
  onHover: (value: string) => void;
}
