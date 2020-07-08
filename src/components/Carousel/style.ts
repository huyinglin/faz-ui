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
  transition: transform 0.6s ease;
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
  outline: none;
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

export const CarouselDotsWrapperView = styled.div`
  height: 3px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10%;
  margin: 0 10%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CarouselDotView = styled.div<{ active: boolean }>`
  width: 30px;
  height: 3px;
  cursor: pointer;
  background: yellow;
  margin: 0 4px;
  opacity: ${props => props.active ? '1' : '.5'};
  transition: opacity 0.6s ease;
`;
