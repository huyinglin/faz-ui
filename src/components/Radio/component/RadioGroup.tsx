import React from 'react';
import { RadioGroupProps } from '../interface';
import { RadioContext } from './RadioContext';
import { RadioGroupView } from '../style';
import { useMergedState } from '../../../hooks/useMergedState';

const RadioGroup = React.forwardRef((props: Partial<RadioGroupProps>, ref: React.Ref<HTMLDivElement>) => {
  const {
    defaultValue,
    disabled,
    mode = 'row',
    children,
    style,
    className,
    onChange,
  } = props;

  const [value, setValue] = useMergedState(defaultValue, {
    value: props.value,
    isProps: 'value' in props,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <RadioContext.Provider value={{ onChange: handleChange, value, disabled }}>
      <RadioGroupView
        ref={ref}
        style={style}
        className={className}
        mode={mode}
      >
        {children}
      </RadioGroupView>
    </RadioContext.Provider>
  );
});

export default RadioGroup;
