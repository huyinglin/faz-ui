import styled from 'styled-components/macro';
import { themeColor } from '../../styled';

const spinSize: any = {
  small: 14,
  default: 20,
  large: 32,
};

export const SpinView = styled.span<{ color: string; size: string; }>`
  font-size: ${({ size }) => spinSize[size]}px;
  color: ${({ color }) => color};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @keyframes antRotate {
    to {
      transform: rotate(360deg);
    }
  }

  & >svg {
    transform: rotate(0deg);
    animation: antRotate 1s infinite linear;
  }
`;
