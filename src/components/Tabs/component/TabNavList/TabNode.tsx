import React from 'react';
import { Tab, TabPosition } from '../../interface';
import { TabNodeView } from '../../style';

export interface TabNodeProps {
  id: string;
  // prefixCls: string;
  tab: Tab;
  active: boolean;
  rtl: boolean;
  closable?: boolean;
  // editable?: EditableConfig;
  tabBarGutter?: number;
  tabPosition: TabPosition;
  removeAriaLabel?: string;
  removeIcon?: React.ReactNode;
  renderWrapper?: (node: React.ReactElement) => React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onResize?: (width: number, height: number, left: number, top: number) => void;
  onRemove: () => void;
  onFocus: React.FocusEventHandler;
}

function TabNode(props: TabNodeProps, ref: React.Ref<HTMLButtonElement>) {
  const {
    // prefixCls,
    id,
    active,
    rtl,
    tab: { key, tab, disabled, closeIcon },
    tabBarGutter,
    tabPosition,
    closable,
    renderWrapper,
    removeAriaLabel,
    // editable,
    onClick,
    onRemove,
    onFocus,
  } = props;

  React.useEffect(() => {
    // onRemove(); // ? 为什么要 remove
  }, []);

  const nodeStyle: React.CSSProperties = {};

  if (tabPosition === 'top' || tabPosition === 'bottom') {
    nodeStyle[rtl ? 'marginLeft' : 'marginRight'] = tabBarGutter;
  } else {
    nodeStyle.marginBottom = tabBarGutter;
  }

  const node: React.ReactElement = (
    <TabNodeView
      active={active}
      key={key}
      ref={ref}
      type="button"
      role="tab"
      disabled={!!disabled}
      style={nodeStyle}
      tabIndex={0}
      id={id && `${id}-tab-${key}`}
      onClick={onClick}
      onFocus={onFocus}
    >
      {tab}
    </TabNodeView>
  );

  if (renderWrapper) {
    return renderWrapper(node);
  }

  return node;
}

export default React.forwardRef(TabNode);
