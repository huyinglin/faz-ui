import React from 'react';

export function useMergedState<T, R = T>(
  defaultStateValue: T | (() => T),
  option?: {
    defaultValue?: T | (() => T);
    value?: T;
    isProps?: boolean; // 是否为 props 中的属性
    innerControlled?: boolean; // 当内部值需要主动变化时，忽略外部的控制
    onChange?: (value: T, prevValue: T) => void;
  },
): [R, (value: T) => void] {
  const {
    defaultValue,
    value,
    onChange,
    isProps,
    innerControlled,
  } = option || {};
  const [innerValue, setInnerValue] = React.useState<T | undefined>(() => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function'
        ? (defaultValue as any)()
        : defaultValue;
    }
    return typeof defaultStateValue === 'function'
      ? (defaultStateValue as any)()
      : defaultStateValue;
  });

  let mergedValue = value !== undefined ? value : innerValue;

  function triggerChange(newValue: T) {
    if (isProps && !innerControlled) {
      return;
    }
    setInnerValue(newValue);
    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  }

  // Effect of reset value to `undefined`
  const firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (isProps) {
      setInnerValue(value);
    }
  }, [value]);

  return [(mergedValue as unknown) as R, triggerChange];
}
