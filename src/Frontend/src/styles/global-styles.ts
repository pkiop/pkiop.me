import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const dummp = 1;
export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
`;
