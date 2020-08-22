import styled, { css } from 'styled-components';
import { presetColor } from '../../styled';
import { TooltipPlacement } from './interface';

type TooltipContentViewProps = {
  placement: { top?: number; left?: number; right?: number; };
  background: string;
}

export const TooltipContentView = styled.div<TooltipContentViewProps>`
  position: absolute;
  top: ${({ placement }) => placement.top === undefined ? 'unset' : `${placement.top}px`};
  left: ${({ placement }) => placement.left === undefined ? 'unset' : `${placement.left}px`};
  right: ${({ placement }) => placement.right === undefined ? 'unset' : `${placement.right}px`};
  min-width: 30px;
  max-width: 260px;
  min-height: 32px;
  box-sizing: border-box;
  font-size: 14px;
  word-wrap: break-word;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  padding: 6px 8px;
  border-radius: 2px;
  background: ${({ background }) => presetColor[background] ? presetColor[background].color : background};
  color: #fff;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  visibility: ${({ placement }) => !!placement ? 'visible' : 'hidden'};
`;

function arrowHorizontal(placement: TooltipPlacement) {
  if (placement.substr(-4) === 'Left') {
    return '15%';
  }
  if (placement.substr(-5) === 'Right') {
    return '85%';
  }
  return '50%';
}

function arrowVertical(placement: TooltipPlacement) {
  if (placement.substr(-3) === 'Top') {
    return '25%';
  }
  if (placement.substr(-6) === 'Bottom') {
    return '75%';
  }
  return '50%';
}

function arrowPlacement(placement: TooltipPlacement) {
  if (placement.substr(0, 3) === 'top') {
    return css`
      bottom: -12px;
      left: ${arrowHorizontal(placement)};
      transform: translateX(-50%);
    `;
  }
  if (placement.substr(0, 4) === 'left') {
    return css`
      right: -8px;
      top: ${arrowVertical(placement)};
      transform: translateY(-50%) rotate(-90deg);
    `;
  }
  if (placement.substr(0, 5) === 'right') {
    return css`
      left: -8px;
      top: ${arrowVertical(placement)};
      transform: translateY(-50%) rotate(90deg);
    `;
  }
  if (placement.substr(0, 6) === 'bottom') {
    return css`
      top: -12px;
      left: ${arrowHorizontal(placement)};
      transform: translateX(-50%) rotate(180deg);
    `;
  }
  return '';
}

export const TooltipArrowView = styled.div<{ background: string; placement: TooltipPlacement; }>`
  font-size: 10px;
  position: absolute;
  color: ${({ background }) => presetColor[background] ? presetColor[background].color : background};
  ${({ placement }) => arrowPlacement(placement)};
`;

export const TooltipView = styled.div<{ visible: boolean; }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: ${({ visible }) => visible ? 1000 : 'unset' };
`;
