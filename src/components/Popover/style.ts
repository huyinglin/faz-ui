import styled from 'styled-components';
import Tooltip from '../Tooltip';

export const PopoverView = styled(Tooltip)`
  padding: 0;
  max-width: unset;
`;

export const PopoverTitleView = styled.div`
  min-width: 178px;
  min-height: 32px;
  margin: 0;
  padding: 4px 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
`;

export const PopoverContentView = styled.div`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  padding: 12px 16px;
`;
