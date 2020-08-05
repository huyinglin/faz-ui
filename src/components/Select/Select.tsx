import React from 'react';
import Option from './component/Option';

import {
  SelectProps,
  SelectOption,
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
  const selectLabel = React.useRef<string | undefined>();
  const searchedLabels = React.useRef<{[label: string]: boolean}>({});
  const searchLabels = React.useRef<{[label: string]: boolean}>({});
  const option = React.useRef<SelectOption[]>([]);

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
        option.current.push({
          value: child.props.value,
          label: child.props.children,
          disabled: child.props.disabled,
        });
        searchedLabels.current[child.props.children] = true;
        searchLabels.current[child.props.children] = true;
      }
    });
  }, [children]);

  function handleSelect(selectValue: string | number, label?: string) {
    setValue(selectValue);
    setVisible(false);
    setInputValue(label);
    selectLabel.current = label;
    searchedLabels.current = {...searchLabels.current};
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

  function handleSearch(searchValue: string) {
    if (!searchValue) {
      searchedLabels.current = {...searchLabels.current};
      return;
    }
    option.current.forEach((it: SelectOption) => {
      searchedLabels.current[it.label] = it.disabled
        ? false
        : !!it.label.toLowerCase().includes(searchValue.toLowerCase());
    });
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
      }
    }
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
    searchedLabels: searchedLabels.current,
    onSelect: handleSelect,
    onFocus: handleSelectInputFocus,
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
        visible={visible}
        onChange={handleVisibleChange}
        childrenFocus={handleSelectInputFocus}
        title={children}
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
