import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'Open Sans';
        src: url('fonts/OpenSans-VariableFont_wdth,wght.woff2') format('woff2-variations'), url('fonts/OpenSans-VariableFont_wdth,wght.ttf') format('ttf-variations');
        font-weight: 100 1000;
        font-stretch: 50% 200%
        font-style: normal;
        font-display: swap;
    }

 `}
  />
);

export default Fonts;
