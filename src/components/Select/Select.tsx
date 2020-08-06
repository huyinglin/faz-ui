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
} from './style';
import { SelectContext } from './component/SelectContext';
import { useMergedState } from '../../hooks/useMergedState';
import { AiOutlineDown, AiFillCloseCircle } from 'react-icons/ai';
import { useMeasureDirty } from '../../hooks/useMeasure';
import Empty from '../Empty';
import { ArrayIterator } from 'lodash';

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
    style,
    className,
    children,
  } = props;

  const selectInputRef = React.useRef<HTMLInputElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const selectLabel = React.useRef<string | undefined>(); // 缓存当前选中的 label
  const searchEmpty = React.useRef<boolean>(false);
  const option = React.useRef<OptioinMap>(new Map());

  const [keyboardActiveValue, setKeyboardActiveValue] = React.useState<string | number | null>(null); // 上下建控制选择
  const { width } = useMeasureDirty(inputRef);
  const hideCaret = React.useMemo(() => !showSearch, [showSearch]);
  const [inputValue, setInputValue] = React.useState<string>();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [suffixHover, setSuffixHover] = React.useState<boolean>(false);
  const [placeholder, setPlaceholder] = React.useState<string | undefined>(props.placeholder);

  const [value, setValue] = useMergedState(defaultValue, {
    value: props.value,
    isProps: 'value' in props,
  });

  React.useEffect(() => {
    React.Children.forEach(children, (child: any) => {
      if (child) {
        const label = formatChildren(child.props.children);
        option.current.set(label, {
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
    if (!visible) {
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

  function handleSelect(selectValue: string | number, label?: string) {
    console.log('selectValue: ', selectValue, label);
    setValue(selectValue);
    setInputValue(label);
    handelResetSearch();
    selectLabel.current = label;
    setKeyboardActiveValue(selectValue);
    setVisible(false);
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
    // if (!visible) {
    //   setKeyboardActiveValue(null);
    // }
  }

  function handleSelectInputFocus() {
    setTimeout(() => {
      selectInputRef.current?.focus();
    }, 0);
  }

  function handleClear() {
    setValue(undefined);
    setInputValue(undefined);
    selectLabel.current = undefined;
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

  function handleChildrenHover(value: string | number) {
    setKeyboardActiveValue(value);
}

  const selectSuffix = (
    <SelectSuffixView
      disabled={disabled}
      onMouseEnter={handleSuffixMouseEnter}
      onMouseLeave={handleSuffixMouseLeave}
    >
      {suffixHover && allowClear && value
        ? <span onClick={handleClear}>{clearIcon}</span>
        : <span onClick={handleSuffixClick}>{suffixIcon}</span>
      }
    </SelectSuffixView>
  );

  const contextValue = {
    value,
    width,
    showSearch,
    option: option.current,
    keyboardActiveValue,
    onSelect: handleSelect,
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
        width={width}
        listHeight={listHeight}
        onChange={handleVisibleChange}
        childrenFocus={handleSelectInputFocus}
        title={searchEmpty.current ? <Empty size={56}/> : children}
      >
        <SelectInputView
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
