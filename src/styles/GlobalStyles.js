import { createGlobalStyle } from 'styled-components';
import fontFace from './fonts';

const GlobalStyles = createGlobalStyle`
  ${fontFace('Montserrat', 'Montserrat-Black', 900, 'normal')}
  ${fontFace('Montserrat', 'Montserrat-ExtraBold', 800, 'normal')}
  ${fontFace('Montserrat', 'Montserrat-Bold', 700, 'normal')}
  ${fontFace('Montserrat', 'Montserrat-SemiBold', 500, 'normal')}
  ${fontFace('Montserrat', 'Montserrat-Regular', 400, 'normal')}
  ${fontFace('Montserrat', 'Montserrat-Light', 300, 'normal')}
  ${fontFace('Montserrat', 'Montserrat-UltraLight', 200, 'normal')}

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;

export default GlobalStyles;
