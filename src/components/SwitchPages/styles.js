import styled from 'styled-components'
import { Colors } from '../../resources'

export const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ Colors.darkRed };
  width: 160px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid ${ Colors.white };
  color: ${ Colors.white };
  cursor: pointer;

  transition: 0.4s;

  &:hover{
    background-color: ${ Colors.white };
    color: ${ Colors.darkRed };
    border: 2px solid ${ Colors.darkRed };
  }
`