import { createContext } from 'react';
import { SelectContextProps } from '../interface';

export const SelectContext = createContext<SelectContextProps>({
  width: 0,
  showSearch: false,
  keyboardActiveValue: null,
  option: new Map(),
  onSelect: () => {},
  onFocus: () => {},
  onHover: () => {},
});
