export type DotPosition = 'top' | 'bottom' | 'left' | 'right';

export type CarouselAnimation = {
  timingFunction: string;
  duration: number;
  delay: number;
}

export interface CarouselProps {
  activeIndex: number;
  autoplay: boolean;
  controls: boolean; // 显示上一个下一个箭头
  dotPosition: DotPosition;
  showDots: boolean;
  style: React.CSSProperties;
  children: React.ReactNode;
  className: string;
  animation: CarouselAnimation;

  nextBar: React.ReactElement; // 自定义渲染下一张箭头
  prevBar: React.ReactElement; // 自定义渲染上一张箭头
  dot: React.ReactElement; // 自定义渲染单个面板指示点

  onChange: (slideKey: React.Key) => void; // activeIndex 变化的回调
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

export interface ChangeInfo {
  direction: 'rtl' | 'ltr'; // rtl: next direction; ltr: prev direction;
  step: number;
  current: React.Key;
}

export interface CarouselContextProps {
  carousels: Carousels[];
  activeIndex: string | number;
  changeInfo: ChangeInfo | null;
  carouselKeys: CarouselKeys;
}

export interface CarouselDotsProps {
  onGoto: (key: React.Key) => void;
}
