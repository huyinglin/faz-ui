import React, { useRef } from 'react';

export type UseRefs = ReturnType<typeof useRefs>; // ReturnType 的作用是获取函数的返回类型

export function useRefs<RefType>(): [
  (key: React.Key) => React.RefObject<RefType>,
  (key: React.Key) => void,
] {
  const cacheRefs = useRef(new Map<React.Key, React.RefObject<RefType>>());

  function getRef(key: React.Key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, React.createRef<RefType>());
    }
    return cacheRefs.current.get(key);
  }

  function removeRef(key: React.Key) {
    cacheRefs.current.delete(key);
  }

  return [getRef, removeRef];
}
