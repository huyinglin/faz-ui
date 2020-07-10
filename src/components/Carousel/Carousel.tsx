import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { throttle } from 'lodash';

import {
  Carousels,
  ChangeInfo,
  CarouselKeys,
  CarouselProps,
  CarouselAnimation,
  DotStyle,
} from './interface';
import {
  CarouselView,
  CarouselDotView,
  CarouselPrevAndNextView,
  CarouselDotsWrapperView,
} from './style';

import toArray from '../../utils/toArray';
import CarouselList from './component/CarouselList';
import CarouselItem from './component/CarouselItem';
import useMergedState from '../../hooks/useMergedState';
import { useThrottleState } from '../../hooks/useThrottleState';

function parserCarousels(children: React.ReactNode): Carousels[] {
  const carousels: Carousels[] = [];

  toArray(children).forEach((node: React.ReactElement<Carousels>) => {
    if (React.isValidElement(node)) {
      const key: React.Key = node.key === undefined || node.key === null ? uuidv4() : node.key;
      carousels.push({
        key,
        node,
      });
    }
  });

  return carousels;
}

function getCarouselKeys(carousels: Carousels[]): CarouselKeys {
  const carouselKeys: CarouselKeys = {};

  carousels.forEach((carousel: Carousels, index: number) => {
    if (carousels[index - 1]) {
      const prevKey = carousels[index - 1].key;

      carouselKeys[carousel.key] = {
        prev: prevKey,
        next: '',
        head: false,
        tail: false,
        index,
      };
      carouselKeys[prevKey].next = carousel.key;

      if (index === carousels.length - 1) {
        carouselKeys[carousel.key].next = carousels[0].key;
        carouselKeys[carousels[0].key].prev = carousel.key;
        carouselKeys[carousel.key].tail = true;
      }
    } else {
      carouselKeys[carousel.key] = {
        prev: '',
        next: '',
        head: true,
        tail: false,
        index,
      };
    }
  });

  return carouselKeys;
}

const Carousel = React.forwardRef((props: Partial<CarouselProps>, ref: React.Ref<HTMLDivElement>) => {
  const {
    activeKey,
    autoplay,
    autoplayDuration,
    dotType,
    dotStyle,
    renderDot,
    showDots,
    animation,
    controls,
    style,
    className,
    children,
    nextBar,
    prevBar,
    onChange,
  } = props;

  const mergedAnimation: CarouselAnimation = React.useMemo(() => ({
    timingFunction: 'ease',
    duration: .6,
    delay: 0,
    ...animation
  }), [animation]);

  const mergedDotStyle: DotStyle = React.useMemo(() => ({
    background: '#000',
    width: 30,
    height: 3,
    margin: '0 4px',
    activeOpacity: .75,
    opacity: .25,
    ...dotStyle
  }), [dotStyle]);
  const duration = React.useMemo(() => mergedAnimation.duration * 1000, [mergedAnimation]);
  const carousels = React.useMemo(() => parserCarousels(children), [children]);
  const carouselKeys = React.useMemo(() => getCarouselKeys(carousels), [carousels]);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [changeInfo, setChangeInfo] = useThrottleState<ChangeInfo | null>(null, duration, { trailing: false });
  const [mergedActiveIndex, setMergedActiveIndex] = useMergedState(() => carousels[0]?.key, {
    value: activeKey,
  });

  const throttledSetMergedActiveIndex = React.useCallback(
    throttle(setMergedActiveIndex, duration, { trailing: false }), []);

/* ============================= Exposes Methods ============================ */

  const onGoto = React.useCallback((key: React.Key, lockAnimation = false, circle?: boolean) => {
    const gotoInfo = carouselKeys[key];
    if (!gotoInfo || key === mergedActiveIndex) {
      return;
    }

    const current = carouselKeys[mergedActiveIndex];
    let direction: 'rtl' | 'ltr' = gotoInfo.index > current.index ? 'rtl' : 'ltr';
    let step: number = Math.abs(gotoInfo.index - current.index);

    if (current.tail && gotoInfo.head && circle) {
      // last to first
      step = 1;
      direction = 'rtl';
    }

    if (current.head && gotoInfo.tail && circle) {
      // first to last
      step = 1;
      direction = 'ltr';
    }

    setChangeInfo({
      direction,
      step,
      lockAnimation,
    });
    throttledSetMergedActiveIndex(key);
  }, [
    carouselKeys,
    mergedActiveIndex,
    throttledSetMergedActiveIndex,
    setChangeInfo,
  ]);

  const onPrev = React.useCallback(() => onGoto(carouselKeys[mergedActiveIndex].prev, false, true), [
    mergedActiveIndex,
    carouselKeys,
    onGoto,
  ]);

  const onNext = React.useCallback(() => onGoto(carouselKeys[mergedActiveIndex].next, false, true), [
    mergedActiveIndex,
    carouselKeys,
    onGoto,
  ]);

  React.useImperativeHandle<HTMLDivElement, any>(ref, () => ({
    element: carouselRef.current,
    prev: onPrev,
    next: onNext,
    goto: onGoto,
  }));

/* ================================ Autoplay & onChange ================================ */

  React.useEffect(() => {
    let timer: number;
    if (autoplay) {
      const minDuration = (mergedAnimation.duration || 0) * 2;
      timer = setInterval(() => {
        onNext();
      }, Math.max((autoplayDuration || 0), minDuration));
    }

    return () => clearInterval(timer);
  }, [mergedAnimation, autoplay, autoplayDuration, onNext]);

  React.useEffect(() => {
    if (onChange) {
      onChange(mergedActiveIndex);
    }
  }, [mergedActiveIndex, onChange]);

  React.useEffect(() => {
    if (activeKey && activeKey !== mergedActiveIndex) {
      setMergedActiveIndex(activeKey);
    }
  }, [activeKey]);

/* ================================= Render ================================= */

  return (
    <CarouselView
      ref={carouselRef}
      style={style}
      className={className}
    >
      {controls &&
        <>
          <CarouselPrevAndNextView
            key="prev-bar"
            position="left"
            onClick={onPrev}
          >
            {prevBar ||
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                width="20"
                height="20"
                viewBox="0 0 8 8"
                style={{
                  display: 'inline-block',
                  background: 'no-repeat 50%/100% 100%'
                }}
              >
                <path d="M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z"/>
              </svg>
            }
          </CarouselPrevAndNextView>
          <CarouselPrevAndNextView
            key="next-bar"
            position="right"
            onClick={onNext}
          >
            {nextBar ||
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                width="20"
                height="20"
                viewBox="0 0 8 8"
                style={{
                  display: 'inline-block',
                  background: 'no-repeat 50%/100% 100%'
                }}
              >
                <path d="M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z"/>
              </svg>
            }
          </CarouselPrevAndNextView>
        </>
      }
      <CarouselList
        duration={duration}
        animation={mergedAnimation}
        carousels={carousels}
        changeInfo={changeInfo}
        carouselKeys={carouselKeys}
        activeKeys={carouselKeys[mergedActiveIndex]}
      />
      {showDots &&
        <CarouselDotsWrapperView>
          {carousels.map(carousel =>
            <CarouselDotView
              key={carousel.key}
              dotStyle={mergedDotStyle}
              dotType={dotType}
              animation={mergedAnimation}
              active={mergedActiveIndex === carousel.key}
              onClick={() => onGoto(carousel.key)}
            />
          )}
        </CarouselDotsWrapperView>
      }
    </CarouselView>
  );
});

Carousel.displayName = 'Carousel';

Carousel.defaultProps = {
  dotType: 'line',
  controls: true,
  autoplay: true,
  showDots: true,
  autoplayDuration: 4000,
};

Carousel.propTypes = {
  /**
   *  当前激活 page 的 key
   */
  activeKey: PropTypes.number,

  /**
   * 是否自动播放
   */
  autoplay: PropTypes.bool,

  /**
   * 自动播放间隔时长
   */
  autoplayDuration: PropTypes.number,

  /**
   * 是否展示上一页下一页按钮
   */
  controls: PropTypes.bool,

  /**
   * 是否展示面板指示点
   */
  showDots: PropTypes.bool,

  /**
   * 自定义 page 切换动画，可定义 timingFunction; duration; delay;
   */
  animation: PropTypes.object,

  /**
   * 自定义渲染下一页按钮
   */
  nextBar: PropTypes.element,

  /**
   * 自定义渲染上一页按钮
   */
  prevBar: PropTypes.element,

  /**
   * 面板指示点类型
   */
  dotType: PropTypes.oneOf(['line', 'circle']),

  /**
   * 覆盖面板指示点样式
   */
  dotStyle: PropTypes.any,

  /**
   * 自定义渲染面板指示点
   */
  renderDot: PropTypes.element,

  /**
   *  activeKey 变化时的回调
   */
  onChange: PropTypes.func,
};

export type ForwardCarouselType = typeof Carousel & { Item: typeof CarouselItem };

(Carousel as ForwardCarouselType).Item = CarouselItem;

/** @component */
export default Carousel as ForwardCarouselType;
