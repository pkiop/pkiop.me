import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'NanumSquareRound';
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
