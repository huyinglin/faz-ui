import { createContext } from 'react';
import { TabContextProps } from '../interface';

export default createContext<TabContextProps>({ tabs: [] });
