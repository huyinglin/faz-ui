import { createContext } from 'react';
import { RadioContextProps } from '../interface';

export const RadioContext = createContext<RadioContextProps | null>(null);
