import styled, { createGlobalStyle } from 'styled-components/macro';
import { themeColor } from '../../styled';
import { animated } from 'react-spring'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
      segoe ui, arial, sans-serif;
    background: #f0f0f0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`

export const NotificationView = styled.div`
  position: fixed;
  z-index: 1000;
  top: 24px;
  /* left: 24px; */
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
`;

export const NotificationItemView = styled.div`
  background: #fff;
  height: auto;
  padding: 16px 24px;
  border-radius: 3px;
  height: auto;
  margin-bottom: 16px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

`;

export const Message = styled(animated.div)`
  width: 40ch;

  /* box-sizing: border-box;
  position: relative;
  overflow: hidden; */
`;
