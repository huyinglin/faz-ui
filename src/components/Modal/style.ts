import styled from 'styled-components';
import { themeColor } from '../../styled';

export const ModalView = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const ModalInnerView = styled.div`
  width: 500px;
  overflow: auto;
  border: 1px solid #ccc;
`;
