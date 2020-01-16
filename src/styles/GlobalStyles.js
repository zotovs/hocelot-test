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
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
