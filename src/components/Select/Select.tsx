import React from 'react';
import Input from '../Input';

import {
  SelectProps
} from './interface';
import {
  SelectView,
} from './style';

function Select(props: SelectProps) {
  const {
    ...other
  } = props;

  return (
    <SelectView
      {...other}
      color="#fff"
      title={21}
    >
      <Input/>
    </SelectView>
  );
}

Select.displayName = 'Select';

Select.defaultProps = {

};

/** @component */
export default Select;
