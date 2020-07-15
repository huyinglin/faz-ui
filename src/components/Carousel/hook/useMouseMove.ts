import { useRef, useEffect, RefObject, useState } from 'react';

type TouchEventHandler = (e: MouseEvent) => void;

export function useMouseMove(
  ref: RefObject<HTMLDivElement>,
  event: {
    onMousedown?: (startX: number, startY: number) => void,
    onMousemove?: (offsetX: number, offsetY: number) => void,
    onMouseup?: (offsetX: number, offsetY: number) => void,
  }
) {

  const { onMousedown, onMousemove, onMouseup } = event;
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number; } | null>(null);
  const [startPosition, setStartPosition] = useState<{ x: number; y: number; } | null>(null);

/* ============================== Mouse Events ============================== */

  function mousedown(e: MouseEvent) {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY});
    setStartPosition({ x: clientX, y: clientY});

    if (onMousedown) {
      onMousedown(clientX, clientY);
    }
  }

  function mousemove(e: MouseEvent) {
    if (!mousePosition) {
      return;
    }
    e.preventDefault(); // 使用 preventDefault() 来取消鼠标事件

    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY});

    if (onMousemove) {
      const offsetX = clientX - mousePosition.x;
      const offsetY = clientY - mousePosition.y;
      onMousemove(offsetX, offsetY);
    }
  }

  function mouseup(e: MouseEvent) {
    if (!startPosition) {
      return;
    }

    if (onMouseup) {
      const { clientX, clientY } = e;
      const offsetX = clientX - startPosition.x;
      const offsetY = clientY - startPosition.y;
      onMouseup(offsetX, offsetY);
    }

    setMousePosition(null);
    setStartPosition(null);
  }

/* ================================ Listener ================================ */

  const mouseEventsRef = useRef<{
    mousedown: TouchEventHandler;
    mousemove: TouchEventHandler;
    mouseup: TouchEventHandler;
  }>();

  mouseEventsRef.current = {
    mousedown,
    mousemove,
    mouseup,
  }

  useEffect(() => {
    function onProxyMouseDown(e: MouseEvent) {
      mouseEventsRef.current?.mousedown(e);
    }

    function onProxyMouseMove(e: MouseEvent) {
      mouseEventsRef.current?.mousemove(e);
    }

    function onProxyMouseUp(e: MouseEvent) {
      mouseEventsRef.current?.mouseup(e);
    }

    document.addEventListener('mousemove', onProxyMouseMove);
    document.addEventListener('mouseup', onProxyMouseUp);

    ref.current?.addEventListener('mousedown', onProxyMouseDown);
    ref.current?.addEventListener('selectstart', e => e.preventDefault());
    ref.current?.addEventListener('dragstart', e => e.preventDefault());

    return () => {
      document.removeEventListener('mousemove', onProxyMouseMove);
      document.removeEventListener('mouseup', onProxyMouseUp);
    };
  }, []);
}
