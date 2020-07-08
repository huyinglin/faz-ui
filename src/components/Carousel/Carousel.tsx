import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { throttle, debounce } from 'lodash';

import {
  CarouselProps,
  Carousels,
  CarouselThis,
  CarouselKeys,
  ChangeInfo,
} from './interface';
import {
  CarouselView,
} from './style';

import toArray from '../../utils/toArray';
import CarouselList from './component/CarouselList';
import CarouselDots from './component/CarouselDots';
import CarouselPrevAndNext from './component/CarouselPrevAndNext';
import CarouselCaption from './component/CarouselCaption';
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

function Carousel(this: CarouselThis, props: Partial<CarouselProps>) {
  const {
    activeIndex,
    autoplay,
    dotPosition,
    dots,
    controls,
    style,
    className,
    children,
    renderNext,
    renderPrev,
    renderDots,
    onChange,
    onSelect,
  } = props;

  const carousels = React.useMemo(() => parserCarousels(children), [children]);
  const carouselKeys = React.useMemo(() => getCarouselKeys(carousels), [carousels]);

  const [changeInfo, setChangeInfo] = useThrottleState<ChangeInfo | null>(null, 600, { trailing: false });
  const [mergedActiveIndex, setMergedActiveIndex] = useMergedState(() => carousels[0]?.key, {
    value: activeIndex,
  });

  const throttledSetMergedActiveIndex = React.useCallback(throttle(setMergedActiveIndex, 600, { trailing: false }), []);

/* ============================== static method ============================= */

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
    setChangeInfo,
    throttledSetMergedActiveIndex,
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
        <CarouselPrevAndNext position="left" onClick={onPrev}/>
        <CarouselPrevAndNext position="right" onClick={onNext}/>
        <CarouselList/>
        <CarouselDots onGoto={onGoto}/>
      </CarouselView>
    </CarouselContext.Provider>
  );
}

Carousel.Item = CarouselItem;
Carousel.Caption = CarouselCaption;

Carousel.displayName = 'Carousel';

Carousel.defaultProps = {
  dotPosition: 'bottom',
  dots: true,
  autoplay: true,
};

Carousel.propTypes = {

};

/** @component */
export default Carousel;
