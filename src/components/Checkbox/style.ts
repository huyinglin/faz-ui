import styled from 'styled-components';

export const CheckboxView = styled.label<{ disabled: boolean; }>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({ disabled }) => disabled ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.65)'};
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-flex;
  align-items: center;
  line-height: unset;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

export const CheckIconView = styled.span<{ color: string; checked: boolean; disabled: boolean; indeterminate: boolean; }>`
  color: ${({ color, checked, disabled, indeterminate }) =>
    indeterminate
      ? color
      : disabled
        ? 'rgba(0, 0, 0, 0.26)'
        : checked
          ? color
          : 'rgba(0, 0, 0, 0.54)'
  };
  font-size: 20px;
  width: 1em;
  height: 1em;
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const CheckboxInnerInputView = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  cursor: inherit;
`;

export const CheckboxIconView = styled.span`
  position: relative;
  display: flex;
  align-items: inherit;
`;

export const CheckboxValueView = styled.span`
  margin: 0 8px;
`;
