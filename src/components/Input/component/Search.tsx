import React from 'react';
import Input from '../Input';
import { SearchProps } from '../interface';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchIconView, SearchView } from '../style';

const Search = React.forwardRef((props: SearchProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    suffix,
    enterButton,
    defaultValue,
    onPressEnter,
    onChange,
    onSearch,
    ...rest
  } = props;

  const [value, setValue] = React.useState<string>(defaultValue || '');
  const searchRef = React.useRef<HTMLInputElement | null>(null);

  React.useImperativeHandle<HTMLInputElement, any>(ref, () => ({
    element: searchRef.current,
    focus: () => searchRef.current?.focus(),
    blur: () => searchRef.current?.blur(),
    select: () => searchRef.current?.select(),
  }));

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (onSearch) {
      onSearch(value, e);
    }
    if (onPressEnter) {
      onPressEnter(e);
    }
  }

  const handleSearch = React.useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    searchRef.current?.focus();
    if (onSearch) {
      onSearch(value, e);
    }
  }, [onSearch, value]);

  const renderIcon = React.useMemo(() => (
    <SearchIconView enterButton={!!enterButton} onClick={handleSearch}>
      {enterButton && typeof enterButton !== 'boolean'
        ? enterButton
        : <AiOutlineSearch/>
      }
    </SearchIconView>
  ), [enterButton, handleSearch]);

  return (
    <SearchView enterButton={!!enterButton}>
      <Input
        ref={searchRef}
        {...rest}
        defaultValue={defaultValue}
        onChange={handleChange}
        onPressEnter={handlePressEnter}
        addonAfter={renderIcon}
      />
    </SearchView>
  );
});

Search.displayName = 'Search';

export default Search;
