import React from 'react';
import { CarouselItemProps } from '../interface';
import { CarouselItemView } from '../style';
import CarouselContext from './CarouselContext';

function CarouselItem(props: CarouselItemProps) {
  const { carouselItemWidth, children, carouselKey } = props;

  const { activeIndex } = React.useContext(CarouselContext);

  return (
    <CarouselItemView carouselItemWidth={carouselItemWidth}>
      {children}
    </CarouselItemView>
  );
}

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
