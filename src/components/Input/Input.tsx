import React from 'react';

import {
  InputProps
} from './interface';
import {
  InputView,
  AffixView,
  AddonView,
  ClearView,
  InputContainerView,
} from './style';
import { useMeasure } from '../../hooks/useMeasure';
import { AiFillCloseCircle } from 'react-icons/ai';

const Input = React.forwardRef((props: Partial<InputProps>, ref: React.Ref<HTMLInputElement>) => {
  const {
    addonAfter,
    addonBefore,
    prefix,
    suffix,
    value = '',
    defaultValue = '',
    size,
    allowClear,
    onChange,
    onPressEnter,
    onKeyDown,
    ...rest
  } = props;

  const [mergedValue, setMergedValue] = React.useState(defaultValue);

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const prefixRef = React.useRef<HTMLSpanElement | null>(null);
  const suffixRef = React.useRef<HTMLSpanElement | null>(null);
  const addonBeforeRef = React.useRef<HTMLSpanElement | null>(null);
  const addonAfterRef = React.useRef<HTMLSpanElement | null>(null);

  const { width: prefixWidth } = useMeasure(prefixRef);
  const { width: suffixWidth } = useMeasure(suffixRef);
  const { width: addonBeforeWidth } = useMeasure(addonBeforeRef);
  const { width: addonAfterWidth } = useMeasure(addonAfterRef);

  React.useImperativeHandle<HTMLInputElement, any>(ref, () => ({
    element: inputRef.current,
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    select: () => inputRef.current?.select(),
  }));

  React.useEffect(() => {
    setMergedValue(value);
  }, [value]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMergedValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  function handleClear(e: React.MouseEvent<HTMLSpanElement>) {
    setMergedValue('');
    inputRef.current?.focus();
    if (onChange) {
      onChange(e);
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

  // function onFocus(e: React.ChangeEvent<HTMLInputElement>) {
  //   console.log('onFocus', e.target.value);
  // }

  // function onBlur(e: React.ChangeEvent<HTMLInputElement>) {
  //   console.log('onBlur', e.target.value);
  // }

  return (
    <InputContainerView>
      {addonBefore && <AddonView type="addonBefore" ref={addonBeforeRef}>{addonBefore}</AddonView>}
      <InputView
        ref={inputRef}
        prefixWidth={prefixWidth}
        suffixWidth={suffixWidth}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        value={mergedValue}
        allowClear={allowClear}
        {...rest}
        // onFocus={onFocus}
        // onBlur={onBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {addonAfter && <AddonView type="addonAfter" ref={addonAfterRef}>{addonAfter}</AddonView>}
      {prefix &&
        <AffixView
          addonBeforeWidth={addonBeforeWidth}
          addonAfterWidth={addonAfterWidth}
          type="prefix"
          ref={prefixRef}
        >
          {prefix}
        </AffixView>
      }
      {suffix &&
        <AffixView
          addonBeforeWidth={addonBeforeWidth}
          addonAfterWidth={addonAfterWidth}
          type="suffix"
          ref={suffixRef}
        >
          {suffix}
        </AffixView>
      }
      {allowClear && mergedValue &&
        <ClearView
          onClick={handleClear}
          addonBeforeWidth={addonBeforeWidth}
          addonAfterWidth={addonAfterWidth}
          suffixWidth={suffixWidth}
          type="suffix"
        >
          <AiFillCloseCircle/>
        </ClearView>
      }
    </InputContainerView>
  );
});

// TODO
// 1. addonBefore 支持 select

Input.displayName = 'Input';

Input.defaultProps = {

};

/** @component */
export default Input;
