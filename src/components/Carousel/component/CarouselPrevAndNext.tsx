import React from 'react';
import { CarouselPrevAndNextProps } from '../interface';
import { CarouselPrevAndNextView } from '../style';

function CarouselPrevAndNext(props: CarouselPrevAndNextProps) {
  const { position } = props;

  return (
    <CarouselPrevAndNextView {...props}>
      {position === 'left' ? '<' : '>'}
    </CarouselPrevAndNextView>
  )
}

export default CarouselPrevAndNext;
