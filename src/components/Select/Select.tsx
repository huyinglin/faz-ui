import React from 'react';
import Option from './component/Option';

import {
  SelectProps,
  OptioinMap,
} from './interface';
import {
  SelectView,
  SelectInputView,
  SelectSuffixView,
  MultiSelectView,
  MultiSelectPlaceholderView,
  MultiSelectClearView,
} from './style';
import { SelectContext } from './component/SelectContext';
import { useMergedState } from '../../hooks/useMergedState';
import { AiOutlineDown, AiFillCloseCircle } from 'react-icons/ai';
import { useMeasureDirty } from '../../hooks/useMeasure';
import Empty from '../Empty';
import Tag from '../Tag';

export function formatChildren(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.join('');
  }
  if (React.isValidElement(children)) {
    throw new Error('Faz-UI: The children of the Select.Option must be either a string or an array.');
  }
  return '';
}

function Select(props: SelectProps) {
  const {
    allowClear,
    autoClearSearchValue,
    disabled,
    showSearch = false,
    defaultValue,
    suffixIcon = <AiOutlineDown style={{ color: 'rgba(0, 0, 0, 0.25)' }}/>,
    clearIcon = <AiFillCloseCircle style={{ color: 'rgba(0, 0, 0, 0.25)' }}/>,
    listHeight = 256,
    multiple = false,
    style,
    className,
    children,
    onSelect,
    onChange,
  } = props;

  const selectInputRef = React.useRef<HTMLInputElement>(null);
  const mutiInputRef = React.useRef<HTMLInputElement>(null);
  const mutiSelectRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const selectLabel = React.useRef<string | undefined>(); // 缓存当前选中的 label
  const searchEmpty = React.useRef<boolean>(false);
  const option = React.useRef<OptioinMap>(new Map());

  const { width } = useMeasureDirty(inputRef);

  const [keyboardActiveValue, setKeyboardActiveValue] = React.useState<string | null>(null); // 上下建控制选择
  const [inputValue, setInputValue] = React.useState<string>();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [suffixHover, setSuffixHover] = React.useState<boolean>(false);
  const [placeholder, setPlaceholder] = React.useState<string | undefined>(props.placeholder);

  const hideCaret = React.useMemo(() => !showSearch, [showSearch]);
  const propsValue = React.useMemo(() => {
    if (!('value' in props)) {
      return undefined;
    }
    if (typeof props.value === 'string') {
      return [props.value];
    }
    return Array.isArray(props.value) ? props.value : [];
  }, [props.value]);
  const propsDefaultValue = React.useMemo(() => {
    if (typeof defaultValue === 'string') {
      return [defaultValue];
    }
    return ('defaultValue' in props) && Array.isArray(defaultValue) ? defaultValue : [];
  }, [defaultValue]);

  const [value, setValue] = useMergedState<string[]>(() => propsDefaultValue, {
    value: propsValue,
    isProps: 'value' in props,
  });

  React.useEffect(() => {
    React.Children.forEach(children, (child: any) => {
      if (child) {
        const label = formatChildren(child.props.children);
        option.current.set(child.props.value, {
          label,
          value: child.props.value,
          disabled: child.props.disabled,
          selected: false,
          searchTarget: true,
        });
      }
    });
  }, [children]);

  const handleKeyboardControll = React.useCallback((e: KeyboardEvent) => {
    if (!visible || multiple) {
      return;
    }
    const up = 38;
    const down = 40;
    const enter = 13;
    const optionArr = [...(option.current.values() as any)]

    if (e.keyCode === up || e.keyCode === down) {
      if (keyboardActiveValue === null) {
        for (let value of (option.current.values() as any)) { //  找到一个 disabled 不为 true 的 children
          if (!value.disabled) {
            setKeyboardActiveValue(value.value);
            break;
          }
        }
      } else {
        const validOption = optionArr.filter(it => !it.disabled);
        const currentIndex = validOption.findIndex(it => it.value === keyboardActiveValue);

        if (e.keyCode === up) {
          const prevIndex = (currentIndex - 1 + validOption.length) % validOption.length;
          setKeyboardActiveValue(validOption[prevIndex].value);
        } else if (e.keyCode === down) {
          const nextIndex = (currentIndex + 1) % validOption.length;
          setKeyboardActiveValue(validOption[nextIndex].value);
        }
      }
    }
    if (e.keyCode === enter && keyboardActiveValue) {
      const current = optionArr.find(it => it.value === keyboardActiveValue);
      if (current) {
        handleSelect(keyboardActiveValue, current.label);
      }
    }
  }, [visible, option, keyboardActiveValue]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyboardControll, false);
    return () => window.removeEventListener('keydown', handleKeyboardControll, false);
  }, [handleKeyboardControll]);

  function handleSelect(selectValue: string, label: string) {
    handelResetSearch();
    setKeyboardActiveValue(selectValue);

    if (multiple) {
      setValue([...value, selectValue]);
      handleMutiSelectFocus();
    } else {
      setValue([selectValue]);
      setInputValue(label);
      selectLabel.current = label;
      setVisible(false);
    }

    if (onSelect) {
      onSelect(multiple ? [...value, selectValue] : selectValue);
    }
    if (onChange) {
      onChange(multiple ? [...value, selectValue] : selectValue)
    }
  }

  function handleUnselect(selectValue: string) {
    const newValue = value.filter(it => it !== selectValue);
    setValue(newValue);
    mutiSelectRef.current?.focus();
    handelResetSearch();

    if (onChange) {
      onChange(newValue);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (hideCaret) {
      return;
    }
    const { value } = e.target;

    setInputValue(value);

    if (showSearch) {
      if (visible) {
        handleSearch(value);
      } else {
        const lastStr = value.substr(-1);
        handleVisibleChange(true);
        setInputValue(lastStr);
        handleSearch(lastStr);
      }
    }
  }

  function handelResetSearch() {
    option.current.forEach((value, key, map) => {
      map.set(key, {...value, searchTarget: true});
    });
  }

  function handleSearch(searchValue: string) {
    let empty = false;
    option.current.forEach((value, key, map) => {
      let searchTarget = true;
      if (!searchValue) {
        searchTarget = true;
      } else if (value.disabled) {
        searchTarget = false;
      } else {
        searchTarget = !!value.label.toLowerCase().includes(searchValue.toLowerCase());
      }
      if (searchTarget) {
        empty = searchTarget;
      }
      map.set(key, {...value, searchTarget});
    });

    searchEmpty.current = !empty;
  }

  function handleVisibleChange(visible: boolean) {
    setVisible(visible);
    if (showSearch) {
      if (visible) {
        setPlaceholder(inputValue);
        setInputValue(undefined);
      } else {
        setPlaceholder(props.placeholder);
        setInputValue(selectLabel.current);
        searchEmpty.current = false;
        handelResetSearch();
      }
    }
  }

  function handleSelectInputFocus() {
    setTimeout(() => {
      selectInputRef.current?.focus();
    }, 0);
  }

  function handleMutiSelectFocus() {
    setTimeout(() => {
      mutiSelectRef.current?.focus();
    }, 0);
  }

  function handleClear() {
    setValue([]);
    setInputValue(undefined);
    selectLabel.current = undefined;

    if (onChange) {
      onChange(undefined);
    }
  }

  function handleSuffixMouseEnter() {
    if (disabled) {
      return;
    }
    setSuffixHover(true);
  }

  function handleSuffixMouseLeave() {
    if (disabled) {
      return;
    }
    setSuffixHover(false);
  }

  function handleSuffixClick() {
    if (disabled) {
      return;
    }
    handleVisibleChange(true);
    handleSelectInputFocus();
  }

  function handleChildrenHover(value: string) {
    setKeyboardActiveValue(value);
}

  const selectSuffix = (
    <SelectSuffixView
      disabled={disabled}
      onMouseEnter={handleSuffixMouseEnter}
      onMouseLeave={handleSuffixMouseLeave}
    >
      {suffixHover && allowClear && value.length
        ? <span onClick={handleClear}>{clearIcon}</span>
        : <span onClick={handleSuffixClick}>{suffixIcon}</span>
      }
    </SelectSuffixView>
  );

  const selectWidth = multiple ? (mutiSelectRef.current?.offsetWidth || 0) : width;

  const contextValue = {
    value,
    multiple,
    showSearch,
    selectWidth,
    option: option.current,
    keyboardActiveValue,
    onSelect: handleSelect,
    onUnselect: handleUnselect,
    onFocus: handleSelectInputFocus,
    onHover: handleChildrenHover,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <SelectView
        trigger="click"
        color="#fff"
        placement="bottomLeft"
        space={4}
        enterDelay={50}
        arrow={false}
        // visible={true}
        visible={visible}
        width={selectWidth}
        listHeight={listHeight}
        onChange={handleVisibleChange}
        childrenFocus={handleSelectInputFocus}
        title={searchEmpty.current ? <Empty size={56}/> : children}
      >
        {multiple
          ? <MultiSelectView
              ref={mutiSelectRef}
              style={style}
              tabIndex={0}
              showMutiSelectClear={multiple && allowClear}
              className={className}
              onClick={handleMutiSelectFocus}
            >
              {value.length
                ? value.map(selectedValue =>
                    <Tag
                      key={selectedValue}
                      closable
                      onClose={() => handleUnselect(selectedValue)}
                    >
                      {option.current.get(selectedValue)?.label}
                    </Tag>
                  )
                : <MultiSelectPlaceholderView>{placeholder}</MultiSelectPlaceholderView>
              }
              {showSearch && <input ref={mutiInputRef} style={{ border: 'none', outline: 'none', width: 4 }} />}
              {multiple && allowClear && !!value.length && visible &&
                <MultiSelectClearView onClick={handleClear}>{clearIcon}</MultiSelectClearView>
              }
            </MultiSelectView>
          : <SelectInputView
              placeholder={placeholder}
              value={inputValue}
              disabled={disabled}
              suffix={selectSuffix}
              inputRef={selectInputRef}
              onChange={handleInputChange}
              hideCaret={hideCaret}
              style={style}
              ref={inputRef}
              className={className}
            />
        }
      </SelectView>
    </SelectContext.Provider>
  );
}

Select.displayName = 'Select';

Select.defaultProps = {

};

type ForwordSelect = typeof Select & { Option: typeof Option };

(Select as ForwordSelect).Option = Option;

/** @component */
export default Select;
