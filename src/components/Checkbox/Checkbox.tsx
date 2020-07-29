import React from 'react';

import {
  CheckboxProps
} from './interface';
import {
  CheckboxView,
  CheckIconView,
  CheckboxInnerInputView,
  CheckboxIconView,
  CheckboxValueView,
} from './style';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdIndeterminateCheckBox } from "react-icons/md";

function Checkbox(props: Partial<CheckboxProps>) {
  const {
    defaultChecked = false,
    disabled = false,
    children,
    icon = <MdCheckBoxOutlineBlank/>,
    checkedIcon = <MdCheckBox/>,
    color = '#1890ff',
    indeterminate = false,
    style,
    className,
    inputRef,
    inputProps,
    onChange,
  } = props;

  const controlled = 'checked' in props;

  const [checked, setChecked] = React.useState<boolean>(controlled ? props.checked! : defaultChecked);

  React.useEffect(() => {
    if (controlled) {
      setChecked(props.checked!);
    }
  }, [props.checked]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <CheckboxView
      disabled={disabled}
      style={style}
      className={className}
    >
      <CheckboxIconView>
        <CheckIconView
          color={color}
          checked={checked}
          disabled={disabled}
          indeterminate={indeterminate}
        >
          {indeterminate ? <MdIndeterminateCheckBox/> : (checked ? checkedIcon : icon)}
        </CheckIconView>
        <CheckboxInnerInputView
          type="checkbox"
          ref={inputRef}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...inputProps}
        />
      </CheckboxIconView>
      <CheckboxValueView>{children}</CheckboxValueView>
    </CheckboxView>
  );
}

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {

};

/** @component */
export default Checkbox;
