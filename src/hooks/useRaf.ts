import { useRef, useEffect, useState } from 'react';
import raf from 'raf';

function useRaf<Callback extends Function>(callback: Callback) {
  const rafRef = useRef<number>();
  const removeRef = useRef<boolean>(false);

  function trigger(...args: any[]) {
    if (!removeRef.current) {
      raf.cancel(rafRef.current as number);
      rafRef.current = raf(() => {
        callback(...args);
      });
    }
  }

  useEffect(() => {
    return () => {
      removeRef.current = true;
      raf.cancel(rafRef.current as number);
    }
  }, [])

  return trigger;
}

type Callback<T> = (value: T) => T;

function useRafState<T>(defaultState: T | (() => T)): [T, (updater: Callback<T>) => void] {
  const batchRef = useRef<Callback<T>[]>([]);
  const [, forceUpdate] = useState({});
  const state = useRef<T>(
    typeof defaultState === 'function' ? (defaultState as Function)() : defaultState,
  );

  const flushUpdate = useRaf(() => {
    let current = state.current;
    batchRef.current.forEach(callback => {
      current = callback(current);
    });
    batchRef.current = [];

    state.current = current;
    forceUpdate({});
  });

  function updater(callback: Callback<T>) {
    batchRef.current.push(callback);
    flushUpdate();
  }

  return [state.current, updater];
}

export {
  useRaf,
  useRafState,
}
