import { styledFactory } from './index';

export const Flex = styledFactory('div', `
  display: flex;
`);

export const FlexCenter = styledFactory('div', `
  display: flex;
  justify-content: center;
  align-content: center;
`);

export const FlexBetween = styledFactory('div', `
  display: flex;
  justify-content: space-between;
  align-content: center;
`);

export const Ellipsis = styledFactory('div', `
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`);
