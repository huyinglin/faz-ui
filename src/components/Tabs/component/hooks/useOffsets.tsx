import { useMemo } from 'react';
import {
  Tab,
  TabSizeMap,
  TabOffsetMap,
  TabOffset,
} from '../../interface';

const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0 };

export function useOffsets(tabs: Tab[], tabSizes: TabSizeMap, holderScrollWidth: number): TabOffsetMap {
  return useMemo(() => {
    const map: TabOffsetMap = new Map();

    const lastOffset = tabSizes.get(tabs[0]?.key) || DEFAULT_SIZE;
    const rightOffset = lastOffset.width + lastOffset.left;

    for (let i = 0; i < tabs.length; i++) {
      const { key } = tabs[i];

      let data = tabSizes.get(key);
      console.log('data: ', data);
      if (!data) {
        data = tabSizes.get(tabs[i - 1]?.key) || DEFAULT_SIZE;
      }

      const entity = (map.get(key) || {...data}) as TabOffset;

      entity.right = rightOffset - entity.width - entity.left;
      console.log('entity: ', entity);

      map.set(key, entity);
    }

    return map;
  }, [tabs.map(tab => tab.key).join('_'), tabSizes, holderScrollWidth]);
}
