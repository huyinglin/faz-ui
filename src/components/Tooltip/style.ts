import styled, { css } from 'styled-components/macro';
import { animated } from 'react-spring'
import { presetColor } from '../../styled';
import { TooltipPlacement } from './interface';

type TooltipContentViewProps = {
  position: { top?: number; left?: number; right?: number; };
  visible: boolean;
  color: string;
}

export const TooltipContentView = styled(animated.div)<TooltipContentViewProps>`
  position: absolute;
  top: ${({ position }) => position.top === undefined ? 'unset' : `${position.top}px`};
  left: ${({ position }) => position.left === undefined ? 'unset' : `${position.left}px`};
  right: ${({ position }) => position.right === undefined ? 'unset' : `${position.right}px`};
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
  background: ${({ color }) => presetColor[color] ? presetColor[color].color : color};
  color: #fff;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
`;

export const TooltipView = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;

function arrowHorizontal(placement: TooltipPlacement) {
  if (placement.substr(-4) === 'Left') {
    return '25%';
  }
  if (placement.substr(-5) === 'Right') {
    return '75%';
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

export const TooltipArrowView = styled.div<{ color: string; placement: TooltipPlacement; }>`
  font-size: 10px;
  position: absolute;
  ${({ placement }) => arrowPlacement(placement)};
  color: ${({ color }) => presetColor[color] ? presetColor[color].color : color};
`;
