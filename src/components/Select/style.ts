import styled, { css } from 'styled-components/macro';
import { themeColor } from '../../styled';
import Tooltip from '../Tooltip';
import Input from '../Input';

export const SelectView = styled(Tooltip)`
  padding: 4px 0;
  max-width: unset;
`;

export const SelectInputView = styled(Input)<{ hideCaret: boolean; }>`
  > input {
    cursor: pointer;
    caret-color: ${({ hideCaret }) => hideCaret ? 'transparent' : 'auto'};
  }
`;

const selectCSS = css`
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
  background-color: #e6f7ff;

  &:hover {
    background: #e6f7ff;
  }
`;

const disabledCSS = css`
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;

  &:hover {
    background: unset;
  }
`;

export const SelectOptionView = styled.div<{ selected: boolean; disabled: boolean; }>`
  width: 120px;
  min-height: 32px;
  padding: 6px 12px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
  }

  ${({ selected }) => selected && selectCSS}
  ${({ disabled }) => disabled && disabledCSS}
`;

export const SelectSuffixView = styled.div<{ disabled: boolean; }>`
  width: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};

  > span {
    display: flex;
    align-items: center;
  }
`;
