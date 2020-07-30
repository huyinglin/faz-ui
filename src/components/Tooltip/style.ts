import styled from 'styled-components/macro';
import { themeColor } from '../../styled';

export const TooltipView = styled.div`
  position: relative;
`;

export const TooltipChildrenView = styled.span`

`;

export const TooltipContentView = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  min-width: 30px;
  min-height: 32px;
  box-sizing: border-box;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  padding: 4px 8px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`;
