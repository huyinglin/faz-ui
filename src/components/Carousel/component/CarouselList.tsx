import React from 'react';
import CarouselContext from './CarouselContext';
import { Carousels, CarouselItemProps } from '../interface';
import Carousel from '../Carousel';
import { CarouselListView, CarouselWrapperView } from '../style';

const TRANSFORM_SYMBOL = {
  prev: 1,
  next: -1,
};

function CarouselList() {
  const {
    carousels,
    activeIndex,
    changeInfo,
    carouselKeys,
  } = React.useContext(CarouselContext);

  const carouselWrapRef = React.useRef<HTMLDivElement | null>(null);
  const carouselListRef = React.useRef<HTMLDivElement | null>(null);

  const [wrapperWidth, setWrapperWidth] = React.useState<number>(0);
  const [wrapperScrollWidth, setWrapperScrollWidth] = React.useState<number>(0);
  const [transformLeft, setTransformLeft] = React.useState<number>(0);
  const [lockTransition, setLockTransition] = React.useState<boolean>(false);

  React.useEffect(() => {
    const { width } = carouselWrapRef.current?.getBoundingClientRect() || { width: 0 };
    // const { width } = carouselListRef.current?.getBoundingClientRect() || {};
    console.log('carouselListRef', carouselListRef.current?.getBoundingClientRect());
    setWrapperWidth(width);
    setTransformLeft(-width);
  }, []);

  React.useEffect(() => {
    if (changeInfo) {
      const { type, current, target } = changeInfo;
      const symbol = TRANSFORM_SYMBOL[type];
      setTransformLeft(transformLeft + (symbol * wrapperWidth));
      // // setTransformLeft(0);

      // if (type === 'next' && carouselKeys[current].tail) {
      //   // end
      //   setTransformLeft(0);
      // }

      // if (type === 'prev' && carouselKeys[current].head) {
      //   // start
      //   setTransformLeft(-(carousels.length - 1) * wrapperWidth);
      // }

    }
  }, [changeInfo]);

  const carouselStore: CarouselItemProps[] = React.useMemo(() => {
    return carousels.map((carousel: Carousels) =>
      React.cloneElement(carousel.node, {
        carouselKey: carousel.key,
        carouselItemWidth: wrapperWidth,
      }) as CarouselItemProps
    );
  }, [carousels, wrapperWidth]);

  // const projectionList: CarouselItemProps[] = React.useMemo(() => {
  //   const currentIndex = carouselKeys[activeIndex].index;
  //   const prevNode = carouselStore[currentIndex - 1] || carouselStore[carouselStore.length - 1];
  //   const currentNode = carouselStore[currentIndex];
  //   const nextNode = carouselStore[currentIndex + 1] || carouselStore[0];
  //   return [prevNode, currentNode, nextNode];
  // }, [carouselKeys, activeIndex, carouselStore]);

  // React.useEffect(() => {
  //   setTransformLeft(-wrapperWidth);
  // }, [projectionList, wrapperWidth]);

  return (
    <CarouselWrapperView ref={carouselWrapRef}>
      <CarouselListView
        ref={carouselListRef}
        style={{
          // transform: `translate3d(${transformLeft}px, 0px, 0px)`,
          // transition: lockTransition ? 'none' : undefined,
          // transform: 'translateX(100%)',
          transition: 'transform .6s ease-in-out'
        }}
      >
        {carouselStore[carouselKeys[activeIndex].index]}
      </CarouselListView>
    </CarouselWrapperView>
  );
}

export default CarouselList;
