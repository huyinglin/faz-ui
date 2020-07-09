import styled, { css } from 'styled-components/macro';
import { CarouselItemProps, CarouselDotViewProps } from './interface';

export const CarouselView = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

export const CarouselListView = styled.div`
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

export const CarouselPrevAndNextView = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${({ position }) => position === 'left' ? 'left: 20px;' : 'right: 20px;'}
  color: #fff;
  z-index: 99;
  font-size: 20px;
  user-select: none;
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

const LineDotView = css<CarouselDotViewProps>`
  background: ${({ dot }) => dot.style.background};
  width: ${({ dot }) => typeof dot.style.width === 'number' ? `${dot.style.width}px` : dot.style.width};
  height: ${({ dot }) => typeof dot.style.height === 'number' ? `${dot.style.height}px` : dot.style.height};
  margin: ${({ dot }) => typeof dot.style.margin === 'number' ? `${dot.style.margin}px` : dot.style.margin};
`;

const CircleDotView = css<CarouselDotViewProps>`
  background: ${({ dot }) => dot.style.background};
  width: ${({ dot }) => typeof dot.style.width === 'number' ? `${dot.style.width}px` : dot.style.width};
  height: ${({ dot }) => typeof dot.style.height === 'number' ? `${dot.style.height}px` : dot.style.height};
  margin: ${({ dot }) => typeof dot.style.margin === 'number' ? `${dot.style.margin}px` : dot.style.margin};
  border-radius: 50%;
`;

export const CarouselDotView = styled.div<CarouselDotViewProps>`
  ${({ dot }) => dot.type === 'line' ? LineDotView : CircleDotView}
  opacity: ${({ active, dot }) => active ? dot.style.activeOpacity : dot.style.opacity};
  transition: ${({ animation }) => `opacity ${animation.duration} ${animation.timingFunction}`};
  cursor: pointer;
`;
