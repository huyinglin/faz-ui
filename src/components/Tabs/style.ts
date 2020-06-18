import styled, { css } from 'styled-components';
import { themeColor } from '../../styled';
import { TabsProps, TabPosition } from './interface';

const reversePosition = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right',
};

const direction = {
  top: 'column',
  bottom: 'column-reverse',
  right: 'left',
  left: 'right',
};

export const TabsView = styled.div<TabsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({tabPosition}) => direction[tabPosition]};
`;

export const TabNavView = styled.div<TabsProps>`
  display: flex;
  ${({tabPosition}) => `margin-${reversePosition[tabPosition]}: 8px;`}
  ${({tabPosition}) => `border-${reversePosition[tabPosition]}: 2px solid #ccc;`}
`;

const disabledCSS = css`
  opacity: 0.3;
  cursor: not-allowed;
`;

export const TabNavItemView = styled.div<{ active: boolean;disabled?: boolean;tabPosition: TabPosition; }>`
  padding: 8px;
  ${({tabPosition, active}) => active &&
    `
    margin-${reversePosition[tabPosition]}: -2px;
    border-${reversePosition[tabPosition]}: 2px solid ${themeColor.primary};
    `
  }
  color: ${({active}) => active ? themeColor.primary : ''};
  cursor: pointer;

  ${({disabled}) => disabled && disabledCSS};

  &:hover {
    color: ${({disabled}) => disabled ? '' : themeColor.primary};
  }
`;