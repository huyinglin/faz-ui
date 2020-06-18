import styled from 'styled-components';
import { themeColor } from '../../styled';

export const TabsView = styled.div`
  width: 100%;
`;

export const TabTitleView = styled.div`
  display: flex;
  margin-bottom: 8px;
  border-bottom: 2px solid #ccc;
`;

export const TabNavView = styled.div<{ active: boolean; disabled?: boolean; }>`
  padding: 8px;
  margin-bottom: -2px;
  border-bottom: ${({active}) => active ? `2px solid ${themeColor.primary}` : ''};
  color: ${({active}) => active ? themeColor.primary : ''};
  cursor: pointer;

  ${({disabled}) => disabled && `
    opacity: 0.3;
    cursor: not-allowed;
  `};
`;