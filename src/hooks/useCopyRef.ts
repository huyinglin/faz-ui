import { Ref, useMemo,  } from 'react';

function setRef<T>(ref: Ref<T>, value: T | null): void {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function useCopyRef<T>(refA: Ref<T>, refB: Ref<T>): Ref<T> {
  return useMemo(() => {
    // if (refA === null && refB === null) {
    //   return null;
    // }
    return (refValue) => {
      setRef<T>(refA, refValue);
      setRef<T>(refB, refValue);
    }
  }, [refA, refB]);
}
