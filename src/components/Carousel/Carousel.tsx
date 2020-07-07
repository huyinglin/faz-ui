import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

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
  console.log('carouselKeys: ', carouselKeys);

  const [changeInfo, setChangeInfo] = React.useState<ChangeInfo | null>(null);
  const [mergedActiveIndex, setMergedActiveIndex] = useMergedState(() => carousels[0]?.key, {
    value: activeIndex,
  });

/* ============================== static method ============================= */

  // this.next = handleNext();
  // this.prev = handlePrev();
  // this.goto = handleGoto();

  // function handleNext() {
  //   return 3;
  // }

  // function handlePrev() {
  //   return 3;
  // }

  // function handleGoto(slideIndex: number) {
  // }

  function onPrev() {
    const prevIndex = carouselKeys[mergedActiveIndex].prev;
    setChangeInfo({
      type: 'prev',
      current: mergedActiveIndex,
      target: prevIndex,
    });
    setMergedActiveIndex(prevIndex);
  }

  function onNext() {
    const nextIndex = carouselKeys[mergedActiveIndex].next;
    setChangeInfo({
      type: 'next',
      current: mergedActiveIndex,
      target: nextIndex,
    });
    setMergedActiveIndex(nextIndex);
  }

  // TODO
  function onGoto(key: React.Key) {
    setChangeInfo({
      type: 'next',
      current: mergedActiveIndex,
      target: key,
    });
    if (carouselKeys[key]) {
      setMergedActiveIndex(key);
    }
  }

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
        <CarouselDots/>
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
