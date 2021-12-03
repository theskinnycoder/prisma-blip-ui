import { css, Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/gilroy-bold.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        src: url('/fonts/gilroy-semibold.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/gilroy-regular.woff2') format('woff2');
      }
    `}
  />
)

export default Fonts
