import React from 'react';
import { CarouselDotsWrapperView, CarouselDotView } from '../style';
import CarouselContext from './CarouselContext';
import { CarouselDotsProps } from '../interface';

function CarouselDots(props: CarouselDotsProps) {
  const { onGoto } = props;
  const { carousels, activeIndex } = React.useContext(CarouselContext);

  return (
    <CarouselDotsWrapperView>
      {carousels.map(carousel =>
        <CarouselDotView
          key={carousel.key}
          active={activeIndex === carousel.key}
          onClick={() => onGoto(carousel.key)}
        />
      )}
    </CarouselDotsWrapperView>
  );
}

export default CarouselDots;
