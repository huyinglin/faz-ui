import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

export function useDebounceState<T>(
  defaultState: T,
  wait?: number,
  option?: {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
  }
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(defaultState);

  const updater = useCallback(debounce(setState, wait, option), []);

  return [state, updater];
}
