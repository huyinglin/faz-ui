import React from 'react';
import Input from '../Input';
import { LimitProps } from '../interface';

const Limit = React.forwardRef((props: LimitProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    maxLength = 0,
    suffix,
    onChange,
    ...rest
  } = props;

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
});

export default Limit;
