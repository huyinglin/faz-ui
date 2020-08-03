import styled from 'styled-components/macro';
import { TagColorProps } from './interface';
import { presetColor, presetType } from '../../styled';

function getColor(props: TagColorProps) {
  const { checked, checkedBackground, styleConfig } = props;
  const preset = {...presetColor, ...presetType};
  const presetValue = preset[props.color];

  let background;
  let borderColor;
  let color;

  if (presetValue) {
    background = presetValue.background;
    borderColor = presetValue.borderColor;
    color = presetValue.color;
  } else {
    background = props.color;
    borderColor = props.color;
    color = '#fff';
  }

  if (styleConfig) {
    background = styleConfig.background || background;
    borderColor = styleConfig.borderColor || borderColor;
    color = styleConfig.color || color;
  }

  return `
    background: ${checked ? checkedBackground : background};
    border-color: ${checked ? checkedBackground : borderColor};
    color: ${checked ? '#fff' : color};
  `;
}

export const TagView = styled.div<TagColorProps>`
  display: ${({ visible }) => visible ? 'inline-flex' : 'none'};
  align-content: center;
  align-items: center;
  margin: 0 8px 8px 0;
  padding: 0 8px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  border-radius: 2px;
  height: auto;
  box-sizing: border-box;
  list-style: none;
  opacity: 1;
  transition: all 0.2s;
  border: 1px solid;
  cursor: ${({ checkable }) => checkable ? 'pointer' : 'default'};

  ${props => getColor(props)}

  &:hover {
    opacity: 0.85;
  }
`;

export const TagCloseView = styled.span`
  margin-left: 4px;
  display: flex;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.85);
  }
`;

export const TagIconView = styled.span`
  display: flex;
  font-size: 12px;
  margin-right: 4px;
`;
