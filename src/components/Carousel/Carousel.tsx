import React from 'react';
import PropTypes from 'prop-types';

import CarouselCaption from './component/CarouselCaption';
import CarouselItem from './component/CarouselItem';
import CarouselContext from './component/CarouselContext';
import useMergedState from '../../hooks/useMergedState';

import {
  CarouselProps,
  Carousels,
  CarouselThis,
  CarouselItemProps,
} from './interface';
import {
  CarouselView,
} from './style';
import toArray from '../../utils/toArray';
import CarouselList from './component/CarouselList';
import CarouselDots from './component/CarouselDots';

function parserCarousels(children: React.ReactNode): Carousels[] {
  const carousels: Carousels[] = [];
  let uuid = 0;

  toArray(children).forEach((node: React.ReactElement<Carousels>, index: number) => {
    if (React.isValidElement(node)) {
      let key = node.key;
      if (key === undefined || key === null) {
        key = uuid;
        uuid++;
      }
      carousels.push({
        key,
        node,
      });
    }
  });

  return carousels;
}

function Carousel(this: CarouselThis, props: Partial<CarouselProps>) {
  const {
    activeIndex,
    autoplay,
    dotPosition,
    dots,
    style,
    className,
    children,
    renderNext,
    renderPrev,
    renderDots,
    onChange,
    onSelect,
  } = props;

  const carousels = parserCarousels(children);

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



  return (
    <CarouselContext.Provider value={{ carousels }}>
      <CarouselView
        style={style}
        className={className}
      >

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

};

Carousel.propTypes = {

};

/** @component */
export default Carousel;
