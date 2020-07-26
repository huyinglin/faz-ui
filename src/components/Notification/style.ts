import styled, { createGlobalStyle } from 'styled-components/macro';
import { themeColor } from '../../styled';
import { animated } from 'react-spring'

export const NotificationContentView = styled.div`
  width: 336px;
  display: flex;
  padding: 16px 24px;
`;

export const TitleView = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  line-height: 24px;
  word-break: break-all;

  .content-close {
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;

    &:hover {
      color: rgba(0, 0, 0, 0.65);
    }
  }
`;

export const DescriptionView = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
`;
