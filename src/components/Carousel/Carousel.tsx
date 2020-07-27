import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { omit } from 'lodash';

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
import { useThrottleState } from '../../hooks/useThrottleState';

const defaultLineDotTypeStyle = {
  background: '#000',
  width: 30,
  height: 3,
  margin: '0 4px',
  activeOpacity: .75,
  opacity: .25,
};

const defaultCircleDotTypeStyle = {
  background: '#000',
  width: 10,
  height: 10,
  margin: '0 8px',
  activeOpacity: .75,
  opacity: .25,
};

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

const Carousel: FC<Partial<CarouselProps>> = React.forwardRef((props: Partial<CarouselProps>, ref: React.Ref<HTMLDivElement>) => {
  const {
    autoplay,
    autoplayDuration,
    dotType,
    dotStyle,
    showDots,
    animation,
    arrows,
    style,
    className,
    children,
    nextArrow,
    prevArrow,
    onChange,
  } = props;

  const mergedAnimation: CarouselAnimation = React.useMemo(() => ({
    timingFunction: 'ease',
    duration: .6,
    delay: 0,
    ...animation
  }), [animation]);
  const mergedDotStyle: DotStyle = React.useMemo(() => {
    const defaultDotStyle: DotStyle = dotType === 'line'
      ? defaultLineDotTypeStyle
      : defaultCircleDotTypeStyle;
    return {
      ...defaultDotStyle,
      ...dotStyle,
    }
  }, [dotType, dotStyle]);

  const duration = React.useMemo(() => mergedAnimation.duration * 1000, [mergedAnimation]);
  const carousels = React.useMemo(() => parserCarousels(children), [children]);
  const carouselKeys = React.useMemo(() => getCarouselKeys(carousels), [carousels]);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [mergedAutoplay, setMergedAutoplay] = React.useState(autoplay);
  const [changeInfo, setChangeInfo] = useThrottleState<ChangeInfo | null>(null, duration, { trailing: false });
  const [mergedActiveIndex, setMergedActiveIndex] = useThrottleState(carousels[0]?.key, duration, { trailing: false });

/* ============================= Methods ============================ */

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
    setMergedActiveIndex(key);

    if (onChange) {
      onChange(key);
    }
  }, [
    carouselKeys,
    mergedActiveIndex,
    setMergedActiveIndex,
    setChangeInfo,
    onChange,
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

/* ================================ Autoplay ================================ */

  React.useEffect(() => {
    let timer: number;
    if (mergedAutoplay) {
      const minDuration = (mergedAnimation.duration || 0) * 2;
      timer = setInterval(() => {
        onNext();
      }, Math.max((autoplayDuration || 0), minDuration));
    }

    return () => clearInterval(timer);
  }, [mergedAnimation, mergedAutoplay, autoplayDuration, onNext]);

  React.useEffect(() => {
    setMergedAutoplay(autoplay);
  }, [autoplay]);

  function onAutoplay(value: boolean) {
    if (autoplay) {
      setMergedAutoplay(value && autoplay);
    }
  }

/* ================================= Render ================================= */

  function onActiveChange(value: React.ReactText) {
    setMergedActiveIndex(value);
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <CarouselView
      ref={carouselRef}
      style={style}
      className={className}
    >
      {arrows &&
        <>
          <CarouselPrevAndNextView
            key="prev-bar"
            position="left"
            onClick={onPrev}
          >
            {prevArrow ||
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
            {nextArrow ||
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
        onActiveChange={onActiveChange}
        onAutoplay={onAutoplay}
      />
      {showDots &&
        <CarouselDotsWrapperView>
          {carousels.map(carousel =>
            <CarouselDotView
              key={carousel.key}
              style={omit(mergedDotStyle, ['activeOpacity', 'opacity'])}
              activeOpacity={mergedDotStyle.activeOpacity}
              opacity={mergedDotStyle.opacity}
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
  arrows: true,
  autoplay: true,
  showDots: true,
  autoplayDuration: 3000,
};

// Carousel.propTypes = {
//   /**
//    * 是否自动切换
//    */
//   autoplay: PropTypes.bool,

//   /**
//    * 自动切换间隔时长
//    */
//   autoplayDuration: PropTypes.number,

//   /**
//    * 自定义面板切换动画，可定义 timingFunction | duration | delay
//    */
//   animation: PropTypes.object,

//   /**
//    * 是否展示上一页下一页导航箭头
//    */
//   arrows: PropTypes.bool,

//   /**
//    * 自定义下一页导航箭头
//    */
//   nextArrow: PropTypes.element,

//   /**
//    * 自定义上一页导航箭头
//    */
//   prevArrow: PropTypes.element,

//   /**
//    * 是否展示面板指示点
//    */
//   showDots: PropTypes.bool,

//   /**
//    * 面板指示点类型
//    */
//   dotType: PropTypes.oneOf(['line', 'circle']),

//   /**
//    * 覆盖面板指示点样式
//    */
//   dotStyle: PropTypes.any,

//   /**
//    *  面板变化时的回调
//    */
//   onChange: PropTypes.func,
// };

export type ForwardCarouselType = typeof Carousel & { Item: typeof CarouselItem };

(Carousel as ForwardCarouselType).Item = CarouselItem;

/** @component */
export default Carousel;
