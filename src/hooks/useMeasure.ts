import { useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export function useMeasure(ref: React.RefObject<HTMLElement>) {
  const [rect, setRect] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const [ro] = useState(() => new ResizeObserver(([entry]) => setRect(entry.contentRect)));

  useEffect(() => {
    if (ref.current) {
      ro.observe(ref.current);
    }

    return () => ro.disconnect();
  }, []);

  return rect;
}
