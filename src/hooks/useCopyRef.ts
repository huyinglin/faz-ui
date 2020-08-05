import { Ref, useMemo } from 'react';

function setRef<T>(value: T | null, ref?: Ref<T>): void {
  if (!ref) {
    return;
  }
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function useCopyRef<T>(refA?: Ref<T>, refB?: Ref<T>): Ref<T> {
  return useMemo(() => {
    if (!refA && !refB) {
      return null;
    }
    return (refValue) => {
      setRef<T>(refValue, refA);
      setRef<T>(refValue, refB);
    }
  }, [refA, refB]);
}
