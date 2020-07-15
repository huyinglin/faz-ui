import styled from 'styled-components/macro';
import { CarouselItemProps, CarouselDotViewProps, CarouselAnimation } from './interface';

export const CarouselView = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const CarouselListView = styled.div<{ transform: string; lockTransition: boolean; animation: CarouselAnimation; }>`
  display: flex;
  transition: ${({ lockTransition, animation }) => lockTransition
    ? 'none'
    : `transform ${animation.duration}s ${animation.timingFunction}`};
  transform: ${({ transform }) => transform};
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

export const CarouselPrevAndNextView = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ position }) => position === 'left' ? 'left: 0;' : 'right: 0;'}
  color: #fff;
  z-index: 1;
  width: 10%;
  text-align: center;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CarouselDotsWrapperView = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10%;
  margin: 0 10%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CarouselDotView = styled.div<CarouselDotViewProps>`
  ${({ dotType }) => dotType === 'circle' && 'border-radius: 50%;'}
  opacity: ${({ active, activeOpacity, opacity }) => active ? activeOpacity : opacity};
  transition: ${({ animation: { duration, timingFunction } }) => `opacity ${duration}s ${timingFunction}`};
  cursor: pointer;
`;
