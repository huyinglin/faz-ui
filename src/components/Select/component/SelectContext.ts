import { createContext } from 'react';
import { SelectContextProps } from '../interface';

export const SelectContext = createContext<SelectContextProps>({ width: 0, onSelect: () => {}, onFocus: () => {} });
