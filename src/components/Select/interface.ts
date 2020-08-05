export interface SelectProps {
  /** 支持清除 */
  allowClear: boolean;

  /** 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效 */
  autoClearSearchValue: boolean;

  /** 是否禁用 */
  disabled: boolean;

  /** 使单选模式可搜索 */
  showSearch: boolean;

  /** 自定义选择框后缀图标 */
  suffixIcon: React.ReactNode;

  /** 自定义多选框清空图标	 */
  clearIcon: React.ReactNode;

  defaultValue: any;

  value: any;

  /** 选择框默认文字 */
  placeholder: string;

  /** 设置弹窗滚动高度 */
  listHeight: number;

  style: React.CSSProperties;

  className: string;

  children: React.ReactNode;
}

export interface SelectOptionProps {
  /** 是否禁用该 Option */
  disabled?: boolean;

  /** 默认根据此属性值进行筛选 */
  value: string | number;

  style?: React.CSSProperties;

  className?: string;

  children?: string;
}

export interface SelectContextProps {
  width: number;
  value?: string | number;
  onSelect: (selectValue: string | number, label?: string) => void;
  onFocus: () => void;
}
