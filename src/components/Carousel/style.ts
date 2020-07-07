import styled from 'styled-components/macro';
import { themeColor } from '../../styled';
import { CarouselPrevAndNextProps, CarouselItemProps } from './interface';

export const CarouselView = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

export const CarouselListView = styled.div`
  /* width: 100%;
  white-space: nowrap;
  overflow: hidden; */

  display: flex;
  transition: transform 0.3s ease;
`;

export const CarouselWrapperView = styled.div`
  transform: translate(0);
  display: flex;
  flex: auto;
  white-space: nowrap;
  overflow: hidden;
`;

export const CarouselItemView = styled.div<CarouselItemProps>`
  width: ${({ carouselItemWidth }) => `${carouselItemWidth}px`};
`;

export const CarouselPrevAndNextView = styled.div<CarouselPrevAndNextProps>`
  position: absolute;
  top: 0;
  ${({ position }) => position === 'left' ? 'left: 20px;' : 'right: 20px;'}
  color: #fff;
  z-index: 99;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
`;
