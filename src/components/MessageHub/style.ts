import styled, { css } from 'styled-components/macro';
import { themeColor } from '../../styled';
import { MessageHubProps } from './interface';
import { animated } from 'react-spring';

const TopPosition = css<MessageHubProps>`
  top: ${({ position }) => position && position.top ? position.top : '24px' };
`;

const RightPosition = css<MessageHubProps>`
  right: ${({ position }) => position && position.right ? position.right : '24px' };
`;

const BottomPosition = css<MessageHubProps>`
  bottom: ${({ position }) => position && position.bottom ? position.bottom : '24px' };
`;

const LeftPosition = css<MessageHubProps>`
  left: ${({ position }) => position && position.left ? position.left : '24px' };
`;

const Placement = {
  topLeft: css`${TopPosition}${LeftPosition}`,
  topRight: css`${TopPosition}${RightPosition}`,
  bottomLeft: css`${BottomPosition}${LeftPosition}`,
  bottomRight: css`${BottomPosition}${RightPosition}`,
}

export const MessageHubView = styled.div<MessageHubProps>`
  position: fixed;

  ${({ placement }) => (placement && Placement[placement]) || Placement.topRight }

  display: flex;
  flex-direction: column;
  align-items: ${({ placement }) => placement && placement.includes('Left') ? 'flex-start' : 'flex-end'};
  z-index: ${({ zIndex }) => typeof zIndex === 'number' ? zIndex : 1000};
`;

export const MessageView = styled.div`
  background: #fff;
  height: auto;
  border-radius: 3px;
  margin-bottom: 16px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`;

export const MessageAnimatedView = styled(animated.div)``;
