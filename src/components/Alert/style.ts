import styled from 'styled-components';
import {
  AlertType,
} from './interface';

enum Color {
  info = '#fff',
  success = '#52c41a',
  warning = '#fadb14',
  danger = '#dc3545',
}

export const AlertView = styled.div<{ type: AlertType }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  /* width: 100%; */
  min-height: 40px;
  margin-bottom: 16px;
  padding: 8px 16px;
  border-radius: $border-radius;
  color: #fff;
  background: ${({ type }) => Color[type]};
`;

export const AlrtDescView = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
