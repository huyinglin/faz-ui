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
  key?: React.Key;
  children?: React.ReactNode;
}

export interface CarouselCaptionProps {
  children?: React.ReactNode;
}

export interface Carousels extends CarouselItemProps {
  node: React.ReactElement;
}

export interface CarouselContextProps {
  carousels: Carousels[];
}
