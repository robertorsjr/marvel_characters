import styled from 'styled-components';
import { Colors } from '../../resources';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background: ${ Colors.darkRed };
  width: 70px;
  height: 25px;
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