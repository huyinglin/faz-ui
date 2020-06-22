import React from 'react';
import { Tab, TabPosition } from '../../interface';

export interface TabNodeProps {
  id: string;
  prefixCls: string;
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
    prefixCls,
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

  const node: React.ReactElement = (
    <button
      key={key}
      ref={ref}
      type="button"
      role="tab"
      disabled={disabled}
      tabIndex={0}

    >

    </button>
  );

  return (
    <div>

    </div>
  );
}

export default TabNode;
