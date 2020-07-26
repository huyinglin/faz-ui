import styled from 'styled-components/macro';
import { themeColor } from '../../styled';
import { InputProps } from './interface';

function getAddonBorderRadius(addonBefore: boolean, addonAfter: boolean) {
  if (addonBefore && addonAfter) {
    return '0';
  }
  if (addonBefore) {
    return '0 2px 2px 0';
  }
  if (addonAfter) {
    return '2px 0 0 2px';
  }
  return '2px';
}

export const InputView = styled.input<Partial<InputProps> & { prefixWidth: number; suffixWidth: number; }>`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  min-width: 0;
  padding: ${({ prefixWidth, suffixWidth, allowClear }) => `4px ${suffixWidth + 12 + (allowClear ? 18 : 0)}px 4px ${prefixWidth + 12}px`};
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
  border-radius: ${({ addonBefore, addonAfter }) => getAddonBorderRadius(!!addonBefore, !!addonAfter)};

  &:placeholder-shown {
    text-overflow: ellipsis;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:focus {
    border-color: #40a9ff;
    border-right-width: 1px;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px;
  }
`;

export const InputContainerView = styled.div`
  width: 100%;
  position: relative;
  display: inline-flex;
  align-items: center;
  align-content: center;

  input:disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const AffixView = styled.span<{ type: 'prefix' | 'suffix'; addonBeforeWidth: number; addonAfterWidth: number; }>`
  position: absolute;
  top: 0;
  ${({ type, addonBeforeWidth, addonAfterWidth }) =>
    type === 'prefix'
      ? `left: ${addonBeforeWidth ? addonBeforeWidth + 12 * 2 : 0}px;`
      : `right: ${addonAfterWidth ? addonAfterWidth + 12 * 2 : 0}px;`
  }
  ${({ type }) => type === 'prefix' ? 'padding-left: 8px;' : 'padding-right: 8px;'}
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
`;

export const AddonView = styled.span<{ type: 'addonAfter' | 'addonBefore'; }>`
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  line-height: 1.5715;
  transition: all 0.3s;

  border-radius: ${({ type }) => type === 'addonBefore' ? '2px 0 0 2px' : '0 2px 2px 0'};
  ${({ type }) => type === 'addonBefore' ? 'border-right: none;' : 'border-left: none;'}
`;

export const ClearView = styled(AffixView)<{ suffixWidth: number; }>`
  ${({ suffixWidth, addonAfterWidth }) => `right: ${suffixWidth + 12 + (addonAfterWidth ? addonAfterWidth + 12 * 2 : 0)}px;`}
  color: rgba(0, 0, 0, 0.25);
  padding: 0;
  cursor: pointer;
`;
