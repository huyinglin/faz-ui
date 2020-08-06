import { createContext } from 'react';
import { SelectContextProps } from '../interface';

export const SelectContext = createContext<SelectContextProps>({
  value: [],
  showSearch: false,
  multiple: false,
  selectWidth: 0,
  keyboardActiveValue: null,
  option: new Map(),
  onSelect: () => {},
  onUnselect: () => {},
  onFocus: () => {},
  onHover: () => {},
});
