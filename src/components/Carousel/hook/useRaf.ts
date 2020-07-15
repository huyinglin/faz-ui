import { useRef, useEffect, useState } from 'react';
import raf from 'raf';

export function useRaf(callback: Function) {
  const rafRef = useRef<number>();
  const removeRef = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      removeRef.current = true;
      raf.cancel(rafRef.current as number);
    }
  }, [])

  function tigger(...args: any[]) {
    if (!removeRef.current) {
      raf.cancel(rafRef.current as number);
      rafRef.current = raf(() => callback(...args));
    }
  }

  return tigger;
}

type Callback<T> = (value: T) => T;

export function useRafState<T>(defaultValue: T | (() => T)): [T, (updater: Callback<T>) => void] {
  // 在 useRaf 里使用的 setState 会有更新不同步的问题。
  // 解决：在 raf 更新的时候批量更新

  const [, forceUpdate] = useState();
  const batchRef = useRef<Callback<T>[]>([]);
  const state = useRef(typeof defaultValue === 'function' ? (defaultValue as Function)() : defaultValue);

  function updater(callback: Callback<T>) {
    batchRef.current.push(callback);
    flushUpdate();
  }

  const flushUpdate = useRaf(() => {
    let current = state.current;
    batchRef.current.forEach((callback: Callback<T>) => {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });

  return [state.current, updater]
}
