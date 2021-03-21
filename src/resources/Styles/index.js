import { createGlobalStyle } from 'styled-components'
import { Colors  } from '..'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default createGlobalStyle`
  
  body{  
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    min-height:100vh;
    background: linear-gradient(-225deg, ${Colors.turquoise}, ${Colors.darkRed}) no-repeat;
    font-family: 'Bebas Neue';
  }
`
