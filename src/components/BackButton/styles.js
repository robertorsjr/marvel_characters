import styled from 'styled-components';
import { Colors } from '../../resources';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ Colors.darkRed };
  width: 50px;
  height: 30px;
  align-self: center;
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

export const Text = styled.span`
  font-size: 20px;
`