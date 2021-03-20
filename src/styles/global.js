import { createGlobalStyle } from 'styled-components'
import { Colors  } from '../resources'

export default createGlobalStyle`
  
  body{  
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    height:100%;
    background: linear-gradient(-225deg, ${Colors.turquoise}, ${Colors.darkRed}) no-repeat;
    font-family: 'Bebas Neue';
  }
`
