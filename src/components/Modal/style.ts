import styled from 'styled-components';
import { themeColor } from '../../styled';

export const ModalView = styled.div`
  width: 520px;
  height: 520px;
  border-radius: 3px;
  background: red;
  z-index: 1000;
`;

export const ModalWrapView = styled.div`
  position: relative;
  width: auto;
`;

export const ModalMaskView = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  outline: 0;
  /* background: #ccc; */
  /* opacity: .5; */
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;