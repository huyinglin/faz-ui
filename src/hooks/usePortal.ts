
import { useState, useLayoutEffect, useEffect, useCallback, ReactInstance, ReactNode } from 'react';
import { createPortal, findDOMNode } from 'react-dom';

export type ContainerType = ReactInstance | (() => ReactInstance);

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function getContainer(container: ReactInstance | (() => ReactInstance)): Element {
  container = typeof container === 'function' ? container() : container;
  return findDOMNode(container) as Element;
}

export function usePortal(container?: ContainerType) {
  const [mountNode, setMountNode] = useState<Element>(document.body);

  useEnhancedEffect(() => {
    if (container) {
      setMountNode(getContainer(container));
    }
  }, [container]);

  const Portal = useCallback(({ children }: { children: ReactNode }) => createPortal(children, mountNode), [mountNode]);

  return { Portal };
}
