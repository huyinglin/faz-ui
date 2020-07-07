import { createContext } from 'react';
import { CarouselContextProps } from '../interface';

export default createContext<CarouselContextProps>({
  carousels: [],
  changeInfo: null,
  carouselKeys: {},
  activeIndex: '',
});
