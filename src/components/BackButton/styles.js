import styled from 'styled-components';
import { Colors } from '../../resources';

export const ButtonContainer = styled.div`
  text-decoration: none;
  color: ${ Colors.black };
  align-self: flex-end;
  
  &:hover{
    color: ${ Colors.red };
  }
`

export const Text = styled.span`
  font-size: 20px;
`