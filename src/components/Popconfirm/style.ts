import styled from 'styled-components';
import { themeColor } from '../../styled';
import Tooltip from '../Tooltip';
import { ButtonView } from '../Button/style';

export const PopconfirmView = styled(Tooltip)`
  padding: 0;
  max-width: unset;
`;

export const PopconfirmContentView = styled.div`
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.65);
`;

export const PopconfirmIconView = styled.div`
  height: 22px;
  display: inline-flex;
  align-items: center;
  color: #faad14;
  font-size: 16px;
  margin-right: 8px;
`;

export const PopconfirmTitleView = styled.div`
  display: inline-flex;
`;

export const PopconfirmBoxView = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PopconfirmButtonView = styled.div`
  margin-top: 12px;
  text-align: right;

  ${ButtonView} {
    margin-left: 8px;
  }
`;
