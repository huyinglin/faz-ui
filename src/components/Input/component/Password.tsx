import React from 'react';
import Input from '../Input';
import { PasswordProps } from '../interface';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { PasswordIconView } from '../style';

const Password = React.forwardRef((props: PasswordProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    type,
    suffix,
    visibilityToggle,
    visibleIcon,
    invisibleIcon,
    ...rest
  } = props;

  const [visible, setVisible] = React.useState<boolean>(false);

  function handleVisibleChange(e: React.MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    setVisible(!visible)
  }

  return (
    <Input
      ref={ref}
      {...rest}
      type={visible ? 'text' : 'password'}
      suffix={visibilityToggle &&
        <PasswordIconView onClick={handleVisibleChange}>
          {visible ? visibleIcon : invisibleIcon}
        </PasswordIconView>
      }
    />
  );
});

Password.displayName = 'Password';

Password.defaultProps = {
  visibilityToggle: true,
  visibleIcon: <AiOutlineEye/>,
  invisibleIcon: <AiOutlineEyeInvisible/>,
}

export default Password;
