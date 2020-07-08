import { useState, useCallback } from 'react';
import { throttle } from 'lodash';

export function useThrottleState<T>(
  defaultState: T,
  wait?: number,
  option?: {
    leading?: boolean;
    trailing?: boolean;
  }
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(defaultState);

  const updater = useCallback(throttle(setState, wait, option), []);

  return [state, updater];
}
