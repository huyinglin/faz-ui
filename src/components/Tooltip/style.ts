import styled from 'styled-components/macro';
import { animated } from 'react-spring'
import { presetColor } from '../../styled';

export const TooltipContentView = styled(animated.div)<{ position: { top: number; left: number; }, visibility: boolean; color: string; }>`
  position: absolute;
  top: ${({ position }) => position.top || 0}px;
  left: ${({ position }) => position.left || 0}px;
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

  visibility: ${({ visibility }) => visibility ? 'visible' : 'hidden'};
`;

export const TooltipView = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;

export const TooltipArrowView = styled.div<{ color: string; }>`
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  color: ${({ color }) => presetColor[color] ? presetColor[color].color : color};
`;
