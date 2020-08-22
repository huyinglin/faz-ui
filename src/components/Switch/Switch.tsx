import React from 'react';

import {
  SwitchProps
} from './interface';
import {
  SwitchView,
  SwitchInnerInputView,
  SwitchIconView,
  SwitchTrackView,
  SwitchValueView,
  SwitchThumbView,
  SwitchInnerView,
} from './style';
import { useMeasure } from '../../hooks/useMeasure';

const Switch = React.forwardRef((props: Partial<SwitchProps>, ref: React.Ref<HTMLLabelElement>) => {
  const {
    defaultChecked = false,
    disabled = false,
    checkedChildren,
    unCheckedChildren,
    color = "#1890ff",
    inputRef,
    size = 'default',
    children,
    style,
    className,
    onChange,
  } = props;

  const controlled = 'checked' in props;
  const switchInnerRef = React.useRef<HTMLSpanElement>(null);
  const [checked, setChecked] = React.useState<boolean>(controlled ? props.checked! : defaultChecked);
  const { width: switchInnerWidth } = useMeasure(switchInnerRef);

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
    <SwitchView
      disabled={disabled}
      style={style}
      className={`faz-ui_switch ${className}`}
    >
      <SwitchIconView>
        <SwitchTrackView
          color={color}
          size={size}
          switchInnerWidth={switchInnerWidth}
          checked={checked}
        >
          <SwitchThumbView checked={checked}/>
          <SwitchInnerView
            ref={switchInnerRef}
            checked={checked}
          >
            {checked ? checkedChildren : unCheckedChildren}
          </SwitchInnerView>
        </SwitchTrackView>
        <SwitchInnerInputView
          type="checkbox"
          ref={inputRef}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
      </SwitchIconView>
      <SwitchValueView>{children}</SwitchValueView>
    </SwitchView>
  );
});

Switch.displayName = 'Switch';

export default Switch;
