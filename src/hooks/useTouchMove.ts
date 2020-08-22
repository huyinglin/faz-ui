import React, { useState, useRef, useEffect } from 'react';

type TouchEventHandler = (e: TouchEvent) => void;
type WheelEventHandler = (e: WheelEvent) => void;

const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = 0.995 ** REFRESH_INTERVAL;

export function useTouchMove(
  ref: React.RefObject<HTMLDivElement>,
  onOffset: (offsetX: number, offsetY: number) => boolean,
) {
  const [touchPosition, setTouchPosition] = useState<{ x: number; y: number; } | null>(null);
  const [lastTimestamp, setLastTimestamp] = useState<number>(0);
  const [lastTimeDiff, setLastTimeDiff] = useState<number>(0);
  const [lastOffset, setLastOffset] = useState<{ x: number; y: number; } | null>(null);
  const motionRef = useRef<number>();

/* ================================= Touch Event ================================= */

  function onTouchStart(e: TouchEvent) {
    const { screenX, screenY } = e.touches[0];
    setTouchPosition({ x: screenX, y: screenY });
    window.clearInterval(motionRef.current);
  }

  function onTouchMove(e: TouchEvent) {
    if (!touchPosition) {
      return;
    }

    e.preventDefault(); // 使用 preventDefault() 来取消鼠标事件

    const { screenX, screenY } = e.touches[0];
    setTouchPosition({ x: screenX, y: screenY });
    const offsetX = screenX - touchPosition.x;
    const offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    const now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({ x: offsetX, y: offsetY });
  }

  function onTouchEnd() {
    if (!touchPosition) {
      return;
    }

    setTouchPosition(null);
    setLastOffset(null);

    // Swipe if needed
    if (lastOffset) {
      const distanceX = lastOffset.x / lastTimeDiff;
      const distanceY = lastOffset.y / lastTimeDiff;
      const absX = Math.abs(distanceX);
      const absY = Math.abs(distanceY);

      // Skip swipe if low distance
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
        return;
      }

      let currentX = distanceX;
      let currentY = distanceY;

      motionRef.current = window.setInterval(() => {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }

        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }

/* =============================== Wheel Event ============================== */

  const lastMixedWheelRef = useRef(0);
  const lastWheelTimestampRef = useRef(0);
  const lastWheelPreventRef = useRef(false);
  const lastWheelDirectionRef = useRef<'x' | 'y'>();

  function onWheel(e: WheelEvent) {
    const { deltaX, deltaY } = e;
    // Convert both to x & y since wheel only happened on PC
    let mixed: number = 0;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }

    // Optimize mac touch scroll
    const now = Date.now();
    const absMixed = Math.abs(mixed);

    if (now - lastWheelTimestampRef.current > 100 || absMixed - lastMixedWheelRef.current > 10) {
      lastWheelPreventRef.current = false;
    }

    if (onOffset(-mixed, -mixed) || lastWheelPreventRef.current) {
      e.preventDefault();
      lastWheelPreventRef.current = true;
    }

    lastWheelTimestampRef.current = now;
    lastMixedWheelRef.current = absMixed;
  }

/* ================================= Effect ================================= */

  const touchEventsRef = useRef<{
    onTouchStart: TouchEventHandler;
    onTouchMove: TouchEventHandler;
    onTouchEnd: TouchEventHandler;
    onWheel: WheelEventHandler;
  }>();
  // ! 如果像下面这样，在开始的时候就把值赋给 useRef ，那么如果 useRef 里使用了外部变量，这个
  // ! 变量不会更新，要在每次 render 的时候赋值，这样可以保证值一直是最新的
  // const touchEventsRef = useRef<{
  //   onTouchStart: TouchEventHandler;
  //   onTouchMove: TouchEventHandler;
  //   onTouchEnd: TouchEventHandler;
  //   onWheel: WheelEventHandler;
  // }>({
  //   onTouchStart,
  //   onTouchMove,
  //   onTouchEnd,
  //   onWheel
  // });

  touchEventsRef.current = { onTouchStart, onTouchMove, onTouchEnd, onWheel };

  useEffect(() => {

    function onProxyTouchStart(e: TouchEvent) {
      touchEventsRef.current?.onTouchStart(e);
    }

    function onProxyTouchMove(e: TouchEvent) {
      touchEventsRef.current?.onTouchMove(e);
    }

    function onProxyTouchEnd(e: TouchEvent) {
      touchEventsRef.current?.onTouchEnd(e);
    }

    function onProxyWheel(e: WheelEvent) {
      touchEventsRef.current?.onWheel(e);
    }

    document.addEventListener('touchmove', onProxyTouchMove, { passive: false });
    document.addEventListener('touchend', onProxyTouchEnd, { passive: false });

    // No need to clean up since element removed
    ref.current?.addEventListener('touchstart', onProxyTouchStart, { passive: false });
    ref.current?.addEventListener('wheel', onProxyWheel);

    return () => {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    }
  }, []);
}
