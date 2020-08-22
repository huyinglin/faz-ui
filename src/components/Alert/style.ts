import styled from 'styled-components';
import { animated } from 'react-spring';
import {
  AlertType,
} from './interface';

enum Color {
  info = '#e6f7ff',
  success = '#f6ffed',
  warning = '#fffbe6',
  danger = '#fff2f0',
}

enum BorderColor {
  info = '#91d5ff',
  success = '#b7eb8f',
  warning = '#ffe58f',
  danger = '#ffccc7',
}

export const AlertView = styled(animated.div)<{ type: AlertType }>`
  box-sizing: border-box;
  margin: 0;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  padding: 8px 15px;
  word-wrap: break-word;
  border-radius: 2px;
  background: ${({ type }) => Color[type]};
  border: 1px solid ${({ type }) => BorderColor[type]};
`;

export const AlertContentView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

export const AlrtDescView = styled.div<{ showIcon: boolean; }>`
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  ${({ showIcon }) => showIcon && 'padding-left: 32px;'}
`;

export const AlertCloseView = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgba(0,0,0,.45);
  cursor: pointer;
`;

export const AlertIconView = styled.span<{ hasDesc: boolean; }>`
  display: flex;
  align-items: center;
  font-size: ${({ hasDesc }) => hasDesc ? '24px' : '14px'};
  margin-right: 8px;
`;

export const AlertMessageView = styled.div<{ hasDesc: boolean; }>`
  display: flex;
  align-items: center;
  font-size: ${({ hasDesc }) => hasDesc ? '16px' : '14px'};
  ${({ hasDesc }) => hasDesc && 'margin-bottom: 4px;color: rgba(0,0,0,.85);'}
`;
