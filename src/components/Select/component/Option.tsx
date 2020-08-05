import React from 'react';
import { SelectOptionProps } from '../interface';
import { SelectOptionView } from '../style';
import { SelectContext } from './SelectContext';

function Option(props: SelectOptionProps) {
  const {
    disabled = false,
    value = '',
    children = '',
    style,
    className,
  } = props;

  const {
    width,
    showSearch,
    searchedLabels,
    value: selectdValue,
    onSelect,
    onFocus,
  } = React.useContext(SelectContext);

  function handleClick() {
    if (disabled) {
      return;
    }
    onSelect(value, children);
  }

  if (showSearch && !searchedLabels[children]) {
    return null;
  }

  return (
    <SelectOptionView
      width={width}
      style={style}
      className={className}
      disabled={disabled}
      selected={selectdValue === value}
      onClick={handleClick}
      onMouseDown={onFocus}
    >
      {children}
    </SelectOptionView>
  );
}

export default Option;
