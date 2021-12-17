import { createGlobalStyle } from 'styled-components'
import colors from './colors'
const GlobalStyle = createGlobalStyle`
  *{	
    padding: 0;
	  margin: 0;
	  box-sizing: border-box;
  }
  body, html {
    background: ${colors.bg};
    color: ${colors.primary};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Poppins', sans-serif;
}
`
export default GlobalStyle