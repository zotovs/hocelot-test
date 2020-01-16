function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal') {
  /* eslint-disable */
  return `
    @font-face{
        font-family: "${name}";
        src: url(${require('../assets/fonts/' + src + '.otf')}) format("opentype"),

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}

export default fontFace;