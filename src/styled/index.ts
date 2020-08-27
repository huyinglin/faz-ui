import React from 'react';
import styled from 'styled-components';
import { firstUpperCase, styledFormat } from './utils';
import { domElements, DomElements } from './htmlElements';
// import * as tools from './tools';
import {
  themeColor,
  themeVariables,
  browserPresetColors,
  presetColor,
  presetType,
} from './theme';

export const tuple = <T extends string[]>(...args: T) => args;

// const a = tuple('handleFilter', 'handleClear', 'checkedKeys');

export type ElementOf<T> = T extends (infer E)[]
  ? E
  : T extends readonly (infer E)[]
  ? E
  : never;

const styledElement: { [tag: string]: React.ReactNode } = {};

domElements.forEach((item: DomElements) => {
  styledElement[firstUpperCase(item)] = styledFactory(item);
});

function styledFactory(
  element?: any,
  // element?: DomElements | React.ReactElement,
  interpolations?: string,
) {
  return styled(element || 'div')`
    ${interpolations || ''}
    ${({ children, theme, forwardedComponent, forwardedRef, ...style }: any) =>
      styledFormat(style)};
  `;
}

export {
  styled,
  styledFactory,
  styledElement,
  browserPresetColors,
  // tools,
  presetColor,
  presetType,
  themeColor,
  themeVariables,
};
