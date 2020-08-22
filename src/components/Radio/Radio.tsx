import React from 'react';

import {
  RadioProps
} from './interface';
import {
  RadioView,
  CheckIconView,
  RadioInnerInputView,
  RadioIconView,
  RadioValueView,
} from './style';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { RadioContext } from './component/RadioContext';
import Group from './component/RadioGroup';

const Radio = React.forwardRef((props: Partial<RadioProps>, ref: React.Ref<HTMLLabelElement>) => {
  const {
    defaultChecked = false,
    icon = <MdRadioButtonUnchecked/>,
    checkedIcon = <MdRadioButtonChecked/>,
    color = '#1890ff',
    inputRef,
    name,
    value,
    inputProps,
    children,
    style,
    className,
    onChange,
  } = props;

  const radioContext = React.useContext(RadioContext);
  const [checked, setChecked] = React.useState<boolean>(() => props.checked || defaultChecked);
  const disabled = props.disabled || radioContext?.disabled || false;

  React.useEffect(() => {
    if (!radioContext) {
      setChecked(props.checked!);
    }
  }, [props.checked]);

  React.useEffect(() => {
    if (radioContext) {
      setChecked(String(radioContext.value) === String(value));
    }
  }, [radioContext]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(true);
    if (onChange) {
      onChange(e);
    }
    if (radioContext && radioContext.onChange) {
      radioContext.onChange(e);
    }
  }

  return (
    <RadioView
      ref={ref}
      disabled={disabled}
      style={style}
      className={`faz-ui_radio ${className}`}
    >
      <RadioIconView>
        <CheckIconView
          color={color}
          checked={checked}
          disabled={disabled}
        >
          {checked ? checkedIcon : icon}
        </CheckIconView>
        <RadioInnerInputView
          type="radio"
          ref={inputRef}
          checked={checked}
          name={name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          {...inputProps}
        />
      </RadioIconView>
      <RadioValueView>{children}</RadioValueView>
    </RadioView>
  );
});

Radio.displayName = 'Radio';

export type ForwardRadioType = typeof Radio & { Group: typeof Group };

(Radio as ForwardRadioType).Group = Group;

export default Radio;
