import React from 'react';
import { SelectOptionProps } from '../interface';
import { SelectOptionView, SelectOptionChildView } from '../style';
import { SelectContext } from './SelectContext';
import { formatChildren } from '../Select';
import { AiOutlineCheck } from 'react-icons/ai';

function Option(props: SelectOptionProps, context: any) {
  console.log('context: ', context);
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
    selectWidth,
    multiple,
    keyboardActiveValue,
    value: selectdValue,
    onHover,
    onSelect,
    onUnselect,
    onFocus,
  } = React.useContext(SelectContext);

  const optionRef = React.useRef<HTMLDivElement>(null);
  const selected = React.useMemo(() => selectdValue.includes(value), [selectdValue, value]);
  const hover = keyboardActiveValue === value;

  const child = React.useMemo(() => formatChildren(children), [children]);

  React.useEffect(() => {
    if (hover) {
      optionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [hover]);

  function handleClick() {
    if (disabled) {
      return;
    }
    if (multiple) {
      if (selected) {
        onUnselect(value, child)
      } else {
        onSelect(value, child);
      }
    } else {
      onSelect(value, child);
    }
  }

  function handleMouseEnter() {
    if (disabled) {
      return;
    }
    onHover(value);
  }

  if (showSearch && !option.get(value)?.searchTarget) {
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
      <SelectOptionChildView multiple={multiple}>
        {children}
      </SelectOptionChildView>
      {multiple && selected && <AiOutlineCheck style={{ color: '#1890ff' }}/>}
    </SelectOptionView>
  );
}

export default Option;
