import React from 'react'
import { TextAreaProps } from '../interface';
import { TextareaView } from '../style';
import { useMeasure } from '../../../hooks/useMeasure';
import { validatedValue } from '../Input';

const TextArea = React.forwardRef((props: Partial<TextAreaProps>, ref: React.Ref<HTMLTextAreaElement>) => {
  const {
    defaultValue,
    value,
    autoSize,
    rows,
    onChange,
    onPressEnter,
    onResize,
    ...rest
  } = props;

  const [mergedValue, setMergedValue] = React.useState(defaultValue);
  const [row, setRow] = React.useState<number>(() => autoSize ? 1 : 2);
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const { width, height } = useMeasure(textareaRef);

  React.useImperativeHandle<HTMLTextAreaElement, any>(ref, () => ({
    element: textareaRef.current,
    focus: () => textareaRef.current?.focus(),
    blur: () => textareaRef.current?.blur(),
    select: () => textareaRef.current?.select(),
  }));

  React.useEffect(() => {
    if (value !== undefined || value !== mergedValue) {
      setMergedValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (typeof autoSize === 'object' && autoSize !== null) {
      const { minRows, maxRows } = autoSize || {};

      if (typeof minRows === 'number' && row < minRows) {

      }

    }

  }, [row]);

  React.useEffect(() => {
    if (onResize) {
      onResize(width, height);
    }
  }, [width, height]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMergedValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <>
      <TextareaView
        {...rest}
        value={validatedValue(mergedValue)}
        onChange={handleChange}
        ref={textareaRef}
        rows={row}
      />
    </>
  )
});

TextArea.displayName = 'TextArea';

export default TextArea;
