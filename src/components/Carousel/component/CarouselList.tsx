import React, { useContext } from 'react';
import CarouselContext from './CarouselContext';
import { CarouselItemProps } from '../interface';
import Carousel from '../Carousel';

function CarouselList() {
  const { carousels } = useContext(CarouselContext)
  return (
    <div>
      {carousels.map((node: any) => {
        return React.cloneElement(node);
      })}
    </div>
  );
}

export default CarouselList;
