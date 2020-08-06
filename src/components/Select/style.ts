import styled, { css } from 'styled-components/macro';
import { themeColor } from '../../styled';
import Tooltip from '../Tooltip';
import Input from '../Input';
import { TagView } from '../Tag/style';

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
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ disabled, hover }) => !disabled && hover ? '#f5f5f5' : 'unset'};

  ${({ selected }) => selected && selectCSS}
  ${({ disabled }) => disabled && disabledCSS}
`;

export const SelectOptionChildView = styled.span<{ multiple: boolean; }>`
  width: ${({ multiple }) => multiple ? 'calc(100% - 20px)' : '100%'};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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

export const MultiSelectView = styled.div<{ showMutiSelectClear: boolean; }>`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  min-width: 32px;
  min-height: 32px;
  padding: 4px;
  padding-bottom: 0;
  padding-right: ${({ showMutiSelectClear }) => showMutiSelectClear ? '22px' : '4px'};
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  transition: all 0.3s;
  line-height: 1.5715;
  border-radius: 2px;
  display: inline-flex;
  flex-wrap: wrap;
  cursor: pointer;

  &:focus {
    border-color: #40a9ff;
    border-right-width: 1px;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &:hover:not(:disabled) {
    border-color: #40a9ff;
  }

  ${TagView} {
    margin-right: 4px;
    margin-bottom: 4px;
  }

  input {
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
  }
`;

export const MultiSelectPlaceholderView = styled.span`
  color: rgba(0, 0, 0, 0.25);
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 8px;
`;

export const MultiSelectClearView = styled.span`
  position: absolute;
  right: 4px;
  bottom: 8px;
  display: flex;
`;
