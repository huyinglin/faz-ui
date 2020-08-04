import { useState, useEffect, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export function useMeasure(ref?: React.RefObject<HTMLElement>) {
  const frame = useRef(0);
  const [rect, set] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  const [observer] = useState(
    () =>
      new ResizeObserver(entries => {
        const entry = entries[0];

        if (entry) {
          cancelAnimationFrame(frame.current);

          frame.current = requestAnimationFrame(() => {
            set(entry.contentRect);
          });
        }
      })
  );

  useEffect(() => {
    if (ref && ref.current) {
      observer.observe(ref.current);
    } else {
      observer.observe(document.body);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return rect;
}
