import styled from 'styled-components/macro';
import { themeColor } from '../../styled';

export const MessageHubView = styled.div`
  position: fixed;
  z-index: 1000;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MessageView = styled.div`
  background: #fff;
  height: auto;
  padding: 16px 24px;
  border-radius: 3px;
  height: auto;
  margin-bottom: 16px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`;
