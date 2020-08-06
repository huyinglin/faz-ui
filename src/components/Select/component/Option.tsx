import React from 'react';
import { SelectOptionProps } from '../interface';
import { SelectOptionView } from '../style';
import { SelectContext } from './SelectContext';
import { formatChildren } from '../Select';

function Option(props: SelectOptionProps) {
  const {
    disabled = false,
    value = '',
    children = '',
    style,
    className,
  } = props;

  const {
    showSearch,
    option,
    keyboardActiveValue,
    value: selectdValue,
    onHover,
    onSelect,
    onFocus,
  } = React.useContext(SelectContext);

  const optionRef = React.useRef<HTMLDivElement>(null);
  const selected = selectdValue === value;
  const hover = keyboardActiveValue === value;

  const child = React.useMemo(() => formatChildren(children), [children]);

  React.useEffect(() => {
    if (hover) {
      optionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }, [hover]);

  function handleClick() {
    if (disabled) {
      return;
    }
    onSelect(value, child);
  }

  function handleMouseEnter() {
    if (disabled) {
      return;
    }
    onHover(value);
  }

  if (showSearch && !option.get(child)?.searchTarget) {
    return null;
  }

  return (
    <SelectOptionView
      ref={optionRef}
      style={style}
      className={className}
      disabled={disabled}
      selected={selected}
      hover={hover}
      onClick={handleClick}
      onMouseDown={onFocus}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </SelectOptionView>
  );
}

export default Option;
