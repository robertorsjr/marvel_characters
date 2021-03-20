import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../resources';

export const ButtonContainer = styled(Link)`
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