export type DotPosition = 'top' | 'bottom' | 'left' | 'right';

export interface CarouselProps {
  activeIndex: number;
  autoplay: boolean;
  controls: boolean; // 显示上一个下一个箭头
  dotPosition: DotPosition;
  dots: boolean;
  style: React.CSSProperties;
  children: React.ReactNode;
  className: string;
  easing: string; // 动画效果

  renderNext: () => React.ReactElement; // 自定义渲染下一张箭头
  renderPrev: () => React.ReactElement; // 自定义渲染上一张箭头
  renderDots: () => React.ReactElement; // 自定义渲染面板指示点

  onChange: (slideIndex: number, prevIndex: number, nextIndex: number) => void; // activeIndex 变化的回调
  onSelect: (slideIndex: number) => void; // 点击 dots 的回调
}

export interface CarouselThis {
  next: () => number;
  prev: () => number;
  goto: (slideIndex: number) => void
}

export interface CarouselItemProps {
  carouselKey?: React.Key;
  carouselItemWidth?: number;
  children?: React.ReactNode;
}

export interface CarouselCaptionProps {
  children?: React.ReactNode;
}

export interface Carousels extends CarouselItemProps {
  key: React.Key;
  node: React.ReactElement;
}

export type CarouselKey = {
  next: React.Key;
  prev: React.Key;
  head: boolean;
  tail: boolean;
  index: number;
}

export type CarouselKeys = {
  [key: string]: CarouselKey;
}

export interface CarouselPrevAndNextProps {
  position: 'right' | 'left';
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export interface ChangeInfo {
  type: 'next' | 'prev';
  current: React.Key;
  target: React.Key;
}

export interface CarouselContextProps {
  carousels: Carousels[];
  activeIndex: string | number;
  changeInfo: ChangeInfo | null;
  carouselKeys: CarouselKeys;
}
