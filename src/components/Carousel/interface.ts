export type CarouselAnimation = {
  timingFunction: string;
  duration: number;
  delay: number;
}

export type DotStyle = {
  background: string;
  width: string | number;
  height: string | number;
  margin: string | number;
  activeOpacity: number;
  opacity: number;
}

export type DotType = 'line' | 'circle';

export interface CarouselProps {
  activeKey: number;
  autoplay: boolean;
  autoplayDuration: number;
  controls: boolean;
  showDots: boolean;
  animation: Partial<CarouselAnimation>;
  style: React.CSSProperties;
  children: React.ReactNode;
  className: string;

  nextBar: React.ReactElement;
  prevBar: React.ReactElement;

  dotType: DotType;
  dotStyle: DotStyle;
  renderDot: React.ReactElement;

  onChange: (slideKey: React.Key) => void;
}

export interface CarouselItemProps {
  carouselKey?: React.Key;
  carouselItemWidth?: number;
  children?: React.ReactNode;
}

export interface CarouselListProps {
  duration: number;
  carousels: Carousels[];
  changeInfo: ChangeInfo | null;
  carouselKeys: CarouselKeys;
  animation: CarouselAnimation;
  activeKeys: CarouselKey;
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
  lockAnimation: boolean;
}

export interface CarouselDotsProps {
  onGoto: (key: React.Key) => void;
}

export interface CarouselDotViewProps {
  active: boolean;
  animation: CarouselAnimation;
  dotType?: DotType;
  dotStyle: DotStyle;
}
