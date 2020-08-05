import styled from 'styled-components/macro';
import { themeColor } from '../../styled';

export const EmptyView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.25);
  padding: 8px;

  >span {
    margin: 8px;
  }
`;
