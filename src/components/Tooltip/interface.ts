export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

export interface TooltipProps {
  children: React.ReactElement;

  /** Tooltip 内容，设置 title 为 null 时，Tooltip 不会显示。*/
  title: React.ReactNode;

  /** 背景颜色 */
  color: string;

  /** 默认是否显隐 */
  defaultVisible: boolean;

  /** 浮层渲染父节点，默认渲染到 body 上 */
  container: React.ReactInstance | (() => React.ReactInstance);

  /** 气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom */
  placement: TooltipPlacement;

  /** 触发行为，可选 hover | focus | click，可使用数组设置多个触发行为 */
  trigger: 'hover' | 'focus' | 'click' | Array<'hover' | 'focus' | 'click'>;

  /** 鼠标移入后延时多少才显示 Tooltip，单位：毫秒 */
  enterDelay: number;

  /** 鼠标移出后延时多少才隐藏 Tooltip，单位：毫秒 */
  leaveDelay: number;

  /** 是否展示箭头 */
  arrow: boolean;

  /** 设置浮层的类名 */
  className: string;

  /** 设置浮层的样式 */
  style: React.CSSProperties;

  /** 用于手动控制浮层显隐 */
  visible: boolean;

  /** 显示隐藏的回调 */
  onChange: (visible: boolean) => void;
}

export interface Place {
  top?: number;
  left?: number;
  right?: number;
}
