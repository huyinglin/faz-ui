import { createContext } from 'react';
import { SelectContextProps } from '../interface';

export const SelectContext = createContext<SelectContextProps>({ onSelect: () => {}, onFocus: () => {} });
