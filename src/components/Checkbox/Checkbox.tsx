import React from 'react';
import PropTypes from 'prop-types';

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
import { useMergedState } from '../../hooks/useMergedState';

function Checkbox(props: Partial<CheckboxProps>) {
  const {
    defaultChecked,
    disabled,
    children,
    icon = <MdCheckBoxOutlineBlank/>,
    checkedIcon = <MdCheckBox/>,
    color = '#1890ff',
    indeterminate,
    inputRef,
    inputProps,
    onChange,
  } = props;

  const [checked, setChecked] = useMergedState<boolean>(!!defaultChecked, {
    value: props.checked,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <CheckboxView disabled={!!disabled}>
      <CheckboxIconView>
        <CheckIconView
          color={color}
          checked={checked}
          disabled={!!disabled}
        >
          {checked ? checkedIcon : icon}
        </CheckIconView>
        <CheckboxInnerInputView
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
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
