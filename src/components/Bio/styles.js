import styled from 'styled-components';
import { Colors } from '../../resources'

export const Container = styled.div`
  display: flex;
  align-items:center;
  align-self: center;
  flex-direction: row;
  max-width: 80%;
`

export const ImgContainer = styled.div`
  border: 5px solid ${ Colors.black };
  border-radius: 10px;
  background: ${({img}) => `url(${img})`} no-repeat;
  background-size: cover;
  min-width: 264px;
  min-height: 400px;
`

export const TextContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Text = styled.span`
  font-size: ${({isTitle}) => isTitle ? 38 : 20}px;
`
