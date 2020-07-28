import styled from 'styled-components/macro';
import { TagColorProps, PresetColor } from './interface';

export const presetColor: PresetColor = {
  pink: {
    background: '#fff0f6',
    borderColor: '#ffadd2',
    color: '#eb2f96',
  },
  magenta: {
    background: '#fff0f6',
    borderColor: '#ffadd2',
    color: '#eb2f96',
  },
  red: {
    background: '#fff1f0',
    borderColor: '#ffa39e',
    color: '#f5222d',
  },
  volcano: {
    background: '#fff2e8',
    borderColor: '#ffbb96',
    color: '#fa541c',
  },
  orange: {
    background: '#fff7e6',
    borderColor: '#ffd591',
    color: '#fa8c16',
  },
  yellow: {
    background: '#feffe6',
    borderColor: '#fffb8f',
    color: '#fadb14',
  },
  gold: {
    background: '#fffbe6',
    borderColor: '#ffe58f',
    color: '#faad14',
  },
  cyan: {
    background: '#e6fffb',
    borderColor: '#87e8de',
    color: '#13c2c2',
  },
  lime: {
    background: '#fcffe6',
    borderColor: '#eaff8f',
    color: '#a0d911',
  },
  green: {
    background: '#f6ffed',
    borderColor: '#b7eb8f',
    color: '#52c41a',
  },
  blue: {
    background: '#e6f7ff',
    borderColor: '#91d5ff',
    color: '#1890ff',
  },
  geekblue: {
    background: '#f0f5ff',
    borderColor: '#adc6ff',
    color: '#2f54eb',
  },
  purple: {
    background: '#f9f0ff',
    borderColor: '#d3adf7',
    color: '#722ed1',
  },
};

export const presetType: PresetColor = {
  success: {
    background: '#f6ffed',
    borderColor: '#b7eb8f',
    color: '#52c41a',
  },
  processing: {
    background: '#e6f7ff',
    borderColor: '#91d5ff',
    color: '#1890ff',
  },
  error: {
    background: '#fff1f0',
    borderColor: '#ffa39e',
    color: '#f5222d',
  },
  default: {
    background: '#fafafa',
    borderColor: '#d9d9d9',
    color: 'rgba(0, 0, 0, 0.65)',
  },
  warning: {
    background: '#fff7e6',
    borderColor: '#ffd591',
    color: '#fa8c16',
  },
};

function getColor(props: TagColorProps) {
  const { checked, checkedBackground, styleConfig } = props;
  const preset: PresetColor = {...presetColor, ...presetType};
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
