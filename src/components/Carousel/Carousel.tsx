import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { throttle } from 'lodash';

import {
  CarouselProps,
  Carousels,
  CarouselThis,
  CarouselKeys,
  ChangeInfo,
} from './interface';
import {
  CarouselView,
  CarouselPrevAndNextView,
  CarouselDotView,
  CarouselDotsWrapperView,
} from './style';

import toArray from '../../utils/toArray';
import CarouselList from './component/CarouselList';
import CarouselItem from './component/CarouselItem';
import CarouselContext from './component/CarouselContext';
import useMergedState from '../../hooks/useMergedState';
import { useThrottleState } from '../../hooks/useThrottleState';

function parserCarousels(children: React.ReactNode): Carousels[] {
  const carousels: Carousels[] = [];

  toArray(children).forEach((node: React.ReactElement<Carousels>, index: number) => {
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

function Carousel(this: CarouselThis, props: CarouselProps) {
  const {
    activeIndex,
    autoplay,
    autoplayDuration,
    dot,
    dotPosition,
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

  const carousels = React.useMemo(() => parserCarousels(children), [children]);
  const carouselKeys = React.useMemo(() => getCarouselKeys(carousels), [carousels]);

  const [changeInfo, setChangeInfo] = useThrottleState<ChangeInfo | null>(null, 600, { trailing: false });
  const [mergedActiveIndex, setMergedActiveIndex] = useMergedState(() => carousels[0]?.key, {
    value: activeIndex,
  });

  const throttledSetMergedActiveIndex = React.useCallback(throttle(setMergedActiveIndex, 600, { trailing: false }), []);

  React.useEffect(() => {
    if (onChange) {
      onChange(mergedActiveIndex);
    }
  }, [mergedActiveIndex, onChange]);

  const onGoto = React.useCallback((key: React.Key, circle?: boolean) => {
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
      current: mergedActiveIndex,
      direction,
      step,
    });
    throttledSetMergedActiveIndex(key);
  }, [
    carouselKeys,
    mergedActiveIndex,
    throttledSetMergedActiveIndex,
    setChangeInfo,
  ]);

  const onPrev = React.useCallback(() => onGoto(carouselKeys[mergedActiveIndex].prev, true), [
    mergedActiveIndex,
    carouselKeys,
    onGoto,
  ]);

  const onNext = React.useCallback(() => onGoto(carouselKeys[mergedActiveIndex].next, true), [
    mergedActiveIndex,
    carouselKeys,
    onGoto,
  ]);

  React.useEffect(() => {
    let timer: number;
    const minDuration = (animation.duration || 0) * 2;

    timer = setInterval(() => {
      onNext();
    }, Math.max((autoplayDuration || 0), minDuration));

    return () => clearInterval(timer);
  }, [animation, autoplay, autoplayDuration, onNext]);

  const contextValue = {
    carousels,
    activeIndex: mergedActiveIndex,
    changeInfo,
    carouselKeys,
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <CarouselView
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
              {nextBar || '<'}
            </CarouselPrevAndNextView>
            <CarouselPrevAndNextView
              key="next-bar"
              position="right"
              onClick={onNext}
            >
              {prevBar || '>'}
            </CarouselPrevAndNextView>
          </>
        }
        <CarouselList/>
        {showDots &&
          <CarouselDotsWrapperView>
            {carousels.map(carousel =>
              <CarouselDotView
                key={carousel.key}
                dot={dot}
                animation={animation}
                active={mergedActiveIndex === carousel.key}
                onClick={() => onGoto(carousel.key)}
              />
            )}
          </CarouselDotsWrapperView>
        }
      </CarouselView>
    </CarouselContext.Provider>
  );
}

Carousel.Item = CarouselItem;

Carousel.displayName = 'Carousel';

Carousel.defaultProps = {
  dotPosition: 'bottom',
  showDots: true,
  autoplay: true,
  autoplayDuration: 4 * 1000,
  controls: true,
  animation: {
    timingFunction: 'ease',
    duration: .6,
  },
  dot: {
    type: 'circle',
    style: {
      background: '#000',
      width: 10,
      height: 10,
      margin: '0 8px',
      activeOpacity: .75,
      opacity: .25,
    },
  },
};

Carousel.propTypes = {

};

/** @component */
export default Carousel;
