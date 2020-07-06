import { createContext } from 'react';
import { Carousels } from '../interface';

export default createContext<Carousels>({ carousels: [] });
