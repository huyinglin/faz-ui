import styled from 'styled-components';

const switchSize = {
  default: {
    width: 44,
    height: 22,
    thumbWidth: 18,
    thumbHeight: 18,
    innerHeight: 18,
  },
  small: {
    width: 28,
    height: 16,
    thumbWidth: 12,
    thumbHeight: 12,
    innerHeight: 12,
  },
};

export const SwitchView = styled.label<{ disabled: boolean; }>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({ disabled }) => disabled ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.65)'};
  opacity: ${({ disabled }) => disabled ? 0.4 : 1};
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

export const SwitchThumbView = styled.span<{ checked: boolean; }>`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: ${({ checked }) => checked ? 'calc(100% - 2px)' : '2px'};
  transform: ${({ checked }) => checked ? 'translateX(-100%)' : 'none'};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: all 0.2s;
  z-index: 10;
`;

export const SwitchInnerView = styled.span<{ checked: boolean; }>`
  position: absolute;
  top: 2px;
  bottom: 2px;
  right: ${({ checked }) => checked ? 'calc(100% - 8px)' : '8px'};
  transform: ${({ checked }) => checked ? 'translateX(100%)' : 'none'};
  height: 18px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  line-height: 18px;
  color: #fff;
  font-size: 12px;
  transition: all 0.2s;
  z-index: 9;
  user-select: none;
`;

export const SwitchTrackView = styled.span<{ color: string; checked: boolean; size: 'default' | 'small'; switchInnerWidth: number; }>`
  width: ${({ switchInnerWidth, size }) => switchInnerWidth + switchSize[size].thumbWidth + 16}px;
  min-width: ${({ size }) => switchSize[size].width}px;
  height: ${({ size }) => switchSize[size].height}px;
  line-height: ${({ size }) => switchSize[size].height}px;
  background: ${({ checked, color }) => checked ? color: 'rgba(0, 0, 0, 0.25)'};
  border-radius: 100px;
  position: relative;
  transition: background-color .2s;

  ${SwitchThumbView} {
    width: ${({ size }) => switchSize[size].thumbWidth}px;
    height: ${({ size }) => switchSize[size].thumbHeight}px;
  }

  ${SwitchInnerView} {
    height: ${({ size }) => switchSize[size].innerHeight}px;
    line-height: ${({ size }) => switchSize[size].innerHeight}px;
  }
`;

export const SwitchInnerInputView = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 1;
  cursor: inherit;
`;

export const SwitchIconView = styled.span`
  position: relative;
  display: flex;
  align-items: inherit;
`;

export const SwitchValueView = styled.span`
  margin: 0 8px;
`;
