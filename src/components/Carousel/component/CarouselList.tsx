import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import { Carousels, CarouselItemProps, CarouselListProps } from '../interface';
import { CarouselListView, CarouselWrapperView } from '../style';
import { useMouseMove } from '../hook/useMouseMove';
import { useRaf } from '../../../hooks/useRaf';

const TRANSFORM_SYMBOL = {
  ltr: 1,
  rtl: -1,
};

function CarouselList(props: CarouselListProps) {
  const {
    duration,
    carousels,
    changeInfo,
    animation,
    activeKeys,
    onActiveChange,
    onAutoplay,
  } = props;

  const carouselWrapRef = React.useRef<HTMLDivElement | null>(null);

  const [wrapperWidth, setWrapperWidth] = React.useState<number>(0);
  const [transformLeft, setTransformLeft] = React.useState<number>(0);
  const [lockTransition, setLockTransition] = React.useState<boolean>(true);
  const [lastTimestamp, setLastTimestamp] = React.useState<number>(0);

/* ================================= Do Move ================================ */

  React.useEffect(() => {
    const { width } = carouselWrapRef.current?.getBoundingClientRect() || { width: 0 };
    setWrapperWidth(width);
    setTransformLeft(-width);
  }, []);

  React.useEffect(() => {
    onMove();
  }, [changeInfo]);

  const onMove = React.useCallback(() => {
    if (changeInfo) {
      const { direction, step, lockAnimation } = changeInfo;
      const symbol = TRANSFORM_SYMBOL[direction];
      const distance = transformLeft + (step * symbol * wrapperWidth);
      setLockTransition(lockAnimation);
      setTransformLeft(distance);
    }
  }, [changeInfo, transformLeft, wrapperWidth]);

  // Dealing with boundary conditions
  // When moving to the first or last, we need to move the carouselList to the original position.
  React.useEffect(() => {
    let timer: number;

    if (wrapperWidth && Math.abs(transformLeft) === wrapperWidth * (carousels.length + 1)) {
      timer = setTimeout(() => {
        setLockTransition(true);
        setTransformLeft(-wrapperWidth);
      }, duration);
    }

    if (transformLeft === 0 && !lockTransition) {
      timer = setTimeout(() => {
        setLockTransition(true);
        setTransformLeft(-(wrapperWidth * carousels.length));
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [carousels, duration, lockTransition, transformLeft, wrapperWidth]);

/* ============================= Mouse Event ============================ */

  function onMousedown() {
    // Stop Autoplay when mousedown occurs.
    onAutoplay(false);
  }

  const onMousemove = useRaf((offsetX: number) => {
    const now = Date.now();
    const overallWidth = wrapperWidth * (carousels.length + 1);
    const transform = transformLeft + offsetX;

    // In transform, stop the mousemove event.
    if (now - lastTimestamp < duration) {
      return;
    }

    // Prevent dragging distances greater than the overall carousel width.
    if (
      Math.abs(transform) > overallWidth ||
      transform > 0
    ) {
      return;
    }

    setLockTransition(true);
    setTransformLeft(transform);
  });

  const onMouseup = useRaf((offsetX: number) => {
    let offset = 0;
    let distance: number = 0;
    const now = Date.now();

    if (now - lastTimestamp < duration) {
      return;
    }

    const moveThreshold = wrapperWidth * .2;

    if (offsetX > moveThreshold) {
      // prev page
      offset = 1;
    } else if (offsetX < -moveThreshold) {
      // next page
      offset = -1;
    }

    if (offset === 0) {
      distance = -wrapperWidth * (activeKeys.index + 1);
    } else if (offset === -1) {
      distance = offset * wrapperWidth * (activeKeys.index + 2);
      onActiveChange(activeKeys.next);
    } else if (offset === 1) {
      distance = -offset * wrapperWidth * (activeKeys.index);
      onActiveChange(activeKeys.prev);
    }

    // Restore the autoplay
    onAutoplay(true);

    setLastTimestamp(now);
    setLockTransition(false);
    setTransformLeft(distance);
  });

  useMouseMove(carouselWrapRef, { onMousedown, onMousemove, onMouseup });

/* ================================= Resize ================================= */

  const onListWrapperResize = React.useCallback(() => {
    const { width } = carouselWrapRef.current?.getBoundingClientRect() || { width: 0 };
    if (wrapperWidth) {
      const offset = activeKeys.index + 1;
      setLockTransition(true);
      setTransformLeft(transformLeft - (offset * (width - wrapperWidth)));
    }
    setWrapperWidth(width);
  }, [activeKeys, wrapperWidth, transformLeft]);

/* ================================= render ================================= */

  const carouselList: CarouselItemProps[] = React.useMemo(() => {
    /**
     * -------------------------------
     * |  3  |  1  |  2  |  3  |  1  |
     * -------------------------------
     */
    const carouselList = carousels.map((carousel: Carousels) =>
      React.cloneElement(carousel.node, {
        key: carousel.key,
        carouselKey: carousel.key,
        carouselItemWidth: wrapperWidth,
      }) as CarouselItemProps
    );

    const firstCarousel = carousels[0];
    const clonedFirstCarousel = React.cloneElement(firstCarousel.node, {
      key: `$$_carousel_item_cloned_${firstCarousel.key}`,
      carouselKey: firstCarousel.key,
      carouselItemWidth: wrapperWidth,
    }) as CarouselItemProps;

    const lastCarousel = carousels[carousels.length - 1];
    const clonedLastCarousel = React.cloneElement(lastCarousel.node, {
      key: `$$_carousel_item_cloned_${lastCarousel.key}`,
      carouselKey: lastCarousel.key,
      carouselItemWidth: wrapperWidth,
    }) as CarouselItemProps;

    return [clonedLastCarousel, ...carouselList, clonedFirstCarousel];
  }, [carousels, wrapperWidth]);

  return (
    <ResizeObserver onResize={onListWrapperResize}>
      <CarouselWrapperView ref={carouselWrapRef}>
        <CarouselListView
          transform={`translate3d(${transformLeft}px, 0px, 0px)`}
          lockTransition={lockTransition}
          animation={animation}
        >
          {carouselList}
        </CarouselListView>
      </CarouselWrapperView>
    </ResizeObserver>
  );
}

export default CarouselList;
