import React from 'react';

import { InputProps } from './interface';
import {
  InputView,
  AffixView,
  AddonView,
  ClearView,
  InputContainerView,
} from './style';
import { useMeasureDirty as useMeasure } from '../../hooks/useMeasure';
import { useMergedState } from '../../hooks/useMergedState';
import { AiFillCloseCircle } from 'react-icons/ai';

// import Limit from './component/Limit';
// import Password from './component/Password';
// import TextArea from './component/TextArea';
// import Search from './component/Search';
import { useCopyRef } from '../../hooks/useCopyRef';

export function validatedValue(value: any) {
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

export type ForwardInputType = typeof Input & {
  // Limit: typeof Limit;
  // Password: typeof Password;
  // TextArea: typeof TextArea;
  // Search: typeof Search;
};

// (Input as ForwardInputType).Limit = Limit;
// (Input as ForwardInputType).Password = Password;
// (Input as ForwardInputType).TextArea = TextArea;
// (Input as ForwardInputType).Search = Search;

export default Input;
