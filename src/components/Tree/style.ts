import styled from 'styled-components/macro';
import { themeColor } from '../../styled';
import { animated } from 'react-spring';

export const TreeView =  styled.div`
`;

export const TreeContentView =  styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const TreeIconView =  styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;
`;

export const TreeChildrentView =  styled(animated.div)`
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid #d9d9d9;
  will-change: opacity, height;
  overflow: hidden;
`;

export const TreeTitleView =  styled.div`
  padding: 0 4px;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;
