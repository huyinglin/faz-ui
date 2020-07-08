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
  const [lockTransition, setLockTransition] = React.useState<boolean>(true);

  React.useEffect(() => {
    const { width } = carouselWrapRef.current?.getBoundingClientRect() || { width: 0 };
    setWrapperWidth(width);
    setTransformLeft(-width);
  }, []);

  React.useEffect(() => {
    if (changeInfo) {
      const { type, current, target } = changeInfo;
      const symbol = TRANSFORM_SYMBOL[type];
      setLockTransition(false);
      setTransformLeft((transformLeft) + (symbol * wrapperWidth));
    }
  }, [changeInfo]);

  React.useEffect(() => {
    if (wrapperWidth && Math.abs(transformLeft) === wrapperWidth * (carousels.length + 1)) {
      setTimeout(() => {
        setLockTransition(true);
        setTransformLeft(-wrapperWidth);
      }, 600);
    }

    if (transformLeft === 0 && !lockTransition) {
      setTimeout(() => {
        setLockTransition(true);
        setTransformLeft(-(wrapperWidth * carousels.length));
      }, 600);
    }

  }, [transformLeft]);

  const carouselStore: CarouselItemProps[] = React.useMemo(() => {
    const carouselStore = carousels.map((carousel: Carousels) =>
      React.cloneElement(carousel.node, {
        key: carousel.key,
        carouselKey: carousel.key,
        carouselItemWidth: wrapperWidth,
      }) as CarouselItemProps
    );
    const firstCarousel = carousels[0];
    const lastCarousel = carousels[carousels.length - 1];
    const clonedFirstCarousel = React.cloneElement(firstCarousel.node, {
      key: `$$_carousel_item_cloned_${firstCarousel.key}`,
      carouselKey: firstCarousel.key,
      carouselItemWidth: wrapperWidth,
    }) as CarouselItemProps;
    const clonedLastCarousel = React.cloneElement(lastCarousel.node, {
      key: `$$_carousel_item_cloned_${lastCarousel.key}`,
      carouselKey: lastCarousel.key,
      carouselItemWidth: wrapperWidth,
    }) as CarouselItemProps;
    return [clonedLastCarousel, ...carouselStore, clonedFirstCarousel];
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
          transform: `translate3d(${transformLeft}px, 0px, 0px)`,
          transition: lockTransition ? 'none' : undefined,
        }}
      >
        {carouselStore}
      </CarouselListView>
    </CarouselWrapperView>
  );
}

export default CarouselList;
