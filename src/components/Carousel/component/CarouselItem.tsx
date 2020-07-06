import React from 'react';
import { CarouselItemProps } from '../interface';

function CarouselItem(props: CarouselItemProps) {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
}

export default CarouselItem;
