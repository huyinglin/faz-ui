import React from 'react';

import {
  InputProps,
  LimitProps,
  PasswordProps,
  SearchProps,
  TextAreaProps,
} from './interface';
import {
  InputView,
  AffixView,
  AddonView,
  ClearView,
  InputContainerView,
  PasswordIconView,
  SearchIconView,
  SearchView,
  TextareaView,
} from './style';
import { useMeasureDirty as useMeasure } from '../../hooks/useMeasure';
import { useMergedState } from '../../hooks/useMergedState';
import {
  AiFillCloseCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineSearch,
} from 'react-icons/ai';

import { useCopyRef } from '../../hooks/useCopyRef';

function validatedValue(value: any) {
  return typeof value === 'undefined' || value === null ? '' : value;
}

const Input = React.forwardRef(
  (props: Partial<InputProps>, ref: React.Ref<HTMLInputElement>) => {
    const {
      addonAfter,
      addonBefore,
      prefix,
      suffix,
      value,
      defaultValue = '',
      size,
      allowClear,
      style,
      className,
      inputRef,
      onChange,
      onPressEnter,
      onKeyDown,
      ...rest
    } = props;

    const [mergedValue, setMergedValue] = useMergedState<string>(
      value || defaultValue,
      {
        value,
        isProps: 'value' in props,
      },
    );

    const [hover, setHover] = React.useState(false);

    const innerInputRef = React.useRef<HTMLInputElement | null>(null);
    const prefixRef = React.useRef<HTMLSpanElement | null>(null);
    const suffixRef = React.useRef<HTMLSpanElement | null>(null);
    const addonBeforeRef = React.useRef<HTMLSpanElement | null>(null);
    const addonAfterRef = React.useRef<HTMLSpanElement | null>(null);

    const mergedRef = useCopyRef(inputRef, innerInputRef);
    const { height: inputHeight } = useMeasure(innerInputRef);
    const { width: prefixWidth } = useMeasure(prefixRef);
    const { width: suffixWidth } = useMeasure(suffixRef);
    const { width: addonBeforeWidth } = useMeasure(addonBeforeRef);
    const { width: addonAfterWidth } = useMeasure(addonAfterRef);

    React.useEffect(() => {
      clearPasswordValueAttribute();
    }, [props.type]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      clearPasswordValueAttribute();
      setMergedValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    }

    function handleClear(e: React.MouseEvent<HTMLSpanElement>) {
      setMergedValue('');
      innerInputRef.current?.focus();
      if (onChange) {
        const event = Object.create(e);
        event.target = innerInputRef.current;
        event.currentTarget = innerInputRef.current;
        event.target.value = '';
        onChange(event);
      }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    }

    function clearPasswordValueAttribute() {
      if (props.type === 'password') {
        setTimeout(() => innerInputRef.current?.removeAttribute('value'), 0);
      }
    }

    function handleMouseEnter() {
      if (props.disabled) {
        return;
      }
      setHover(true);
    }

    function handleMouseLeave() {
      if (props.disabled) {
        return;
      }
      setHover(false);
    }

    return (
      <InputContainerView
        style={style}
        className={`faz-ui_input ${className}`}
        ref={ref}
      >
        {addonBefore && (
          <AddonView
            inputHeight={inputHeight}
            addonType="addonBefore"
            ref={addonBeforeRef}
            hover={hover}
            className={`faz-ui_input-addonBefore`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {addonBefore}
          </AddonView>
        )}
        <InputView
          ref={mergedRef}
          hover={hover}
          prefixWidth={prefixWidth}
          suffixWidth={suffixWidth}
          addonAfter={addonAfter}
          addonBefore={addonBefore}
          value={validatedValue(mergedValue)}
          allowClear={allowClear}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...rest}
        />
        {addonAfter && (
          <AddonView
            inputHeight={inputHeight}
            addonType="addonAfter"
            ref={addonAfterRef}
            hover={hover}
            className={`faz-ui_input-addonAfter`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {addonAfter}
          </AddonView>
        )}
        {prefix && (
          <AffixView
            addonBeforeWidth={addonBeforeWidth}
            addonAfterWidth={addonAfterWidth}
            affixType="prefix"
            className={`faz-ui_input-prefix`}
            ref={prefixRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {prefix}
          </AffixView>
        )}
        {suffix && (
          <AffixView
            addonBeforeWidth={addonBeforeWidth}
            addonAfterWidth={addonAfterWidth}
            affixType="suffix"
            className={`faz-ui_input-suffix`}
            ref={suffixRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {suffix}
          </AffixView>
        )}
        {allowClear && mergedValue && (
          <ClearView
            onClick={handleClear}
            addonBeforeWidth={addonBeforeWidth}
            addonAfterWidth={addonAfterWidth}
            suffixWidth={suffixWidth}
            affixType="suffix"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AiFillCloseCircle />
          </ClearView>
        )}
      </InputContainerView>
    );
  },
);

Input.displayName = 'Input';

const Limit = React.forwardRef(
  (props: LimitProps, ref: React.Ref<HTMLInputElement>) => {
    const { maxLength = 0, suffix, onChange, ...rest } = props;

    const [inputLength, setInputLength] = React.useState<number>(0);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInputLength(e.target.value?.length);
      if (onChange) {
        onChange(e);
      }
    }

    return (
      <Input
        ref={ref}
        {...rest}
        maxLength={maxLength}
        onChange={handleChange}
        suffix={`${inputLength}/${maxLength}`}
      />
    );
  },
);

const Password = React.forwardRef(
  (props: PasswordProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      type,
      suffix,
      visibilityToggle = true,
      visibleIcon = <AiOutlineEye />,
      invisibleIcon = <AiOutlineEyeInvisible />,
      ...rest
    } = props;

    const [visible, setVisible] = React.useState<boolean>(false);

    function handleVisibleChange(e: React.MouseEvent<HTMLSpanElement>) {
      e.stopPropagation();
      setVisible(!visible);
    }

    return (
      <Input
        ref={ref}
        {...rest}
        type={visible ? 'text' : 'password'}
        suffix={
          visibilityToggle && (
            <PasswordIconView onClick={handleVisibleChange}>
              {visible ? visibleIcon : invisibleIcon}
            </PasswordIconView>
          )
        }
      />
    );
  },
);

Password.displayName = 'Password';

const Search = React.forwardRef(
  (props: SearchProps, ref: React.Ref<HTMLInputElement>) => {
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

    const handleSearch = React.useCallback(
      (e: React.MouseEvent<HTMLSpanElement>) => {
        searchRef.current?.focus();
        if (onSearch) {
          onSearch(value, e);
        }
      },
      [onSearch, value],
    );

    const renderIcon = React.useMemo(
      () => (
        <SearchIconView enterButton={!!enterButton} onClick={handleSearch}>
          {enterButton && typeof enterButton !== 'boolean' ? (
            enterButton
          ) : (
            <AiOutlineSearch />
          )}
        </SearchIconView>
      ),
      [enterButton, handleSearch],
    );

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
  },
);

Search.displayName = 'Search';

const TextArea = React.forwardRef(
  (props: Partial<TextAreaProps>, ref: React.Ref<HTMLTextAreaElement>) => {
    const {
      defaultValue,
      value,
      autoSize,
      rows,
      onChange,
      onPressEnter,
      onResize,
      ...rest
    } = props;

    const [mergedValue, setMergedValue] = React.useState(defaultValue);
    const [row, setRow] = React.useState<number>(() => (autoSize ? 1 : 2));
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const { width, height } = useMeasure(textareaRef);

    React.useImperativeHandle<HTMLTextAreaElement, any>(ref, () => ({
      element: textareaRef.current,
      focus: () => textareaRef.current?.focus(),
      blur: () => textareaRef.current?.blur(),
      select: () => textareaRef.current?.select(),
    }));

    React.useEffect(() => {
      if (value !== undefined || value !== mergedValue) {
        setMergedValue(value);
      }
    }, [value]);

    React.useEffect(() => {
      if (typeof autoSize === 'object' && autoSize !== null) {
        const { minRows, maxRows } = autoSize || {};

        if (typeof minRows === 'number' && row < minRows) {
        }
      }
    }, [row]);

    React.useEffect(() => {
      if (onResize) {
        onResize(width, height);
      }
    }, [width, height]);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setMergedValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    }

    return (
      <TextareaView
        {...rest}
        value={validatedValue(mergedValue)}
        onChange={handleChange}
        ref={textareaRef}
        rows={rows}
      />
    );
  },
);

TextArea.displayName = 'TextArea';

export type ForwardInputType = typeof Input & {
  Limit: typeof Limit;
  Password: typeof Password;
  TextArea: typeof TextArea;
  Search: typeof Search;
};

(Input as ForwardInputType).Limit = Limit;
(Input as ForwardInputType).Password = Password;
(Input as ForwardInputType).TextArea = TextArea;
(Input as ForwardInputType).Search = Search;

export default Input;
