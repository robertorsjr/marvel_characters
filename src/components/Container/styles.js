import styled from 'styled-components';
import { Colors } from '../../resources'

export const Wrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
`
export const TextContainter = styled.div`
  border: 3px solid ${ Colors.white };
  background: ${ Colors.red };
  width: 335px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`

export const Title = styled.span`
  font-size: 50px;
  font-weight: 600;
  color: ${ Colors.white };
`;
