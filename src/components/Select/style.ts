import styled, { css } from 'styled-components/macro';
import { themeColor } from '../../styled';
import Tooltip from '../Tooltip';
import Input from '../Input';

export const SelectView = styled(Tooltip)<{ listHeight: number; width: number; }>`
  padding: 4px 0;
  width: ${({ width }) => width}px;
  max-width: unset;
  max-height: ${({ listHeight }) => listHeight}px;
  overflow-y: auto;
  overflow-x: hidden;
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

export const SelectOptionView = styled.div<{ selected: boolean; disabled: boolean; hover: boolean; }>`
  width: 100%;
  min-height: 32px;
  padding: 6px 12px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  transition: all 0.3s ease;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  background: ${({ disabled, hover }) => !disabled && hover ? '#f5f5f5' : 'unset'};

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
