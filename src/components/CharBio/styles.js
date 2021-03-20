import styled from 'styled-components';
import { Colors } from '../../resources'

export const Container = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row;
`

export const ImgContainer = styled.div`
  border: 5px solid ${ Colors.black };
  border-radius: 10px;
  background: ${({img}) => `url(${img})`} no-repeat;
  background-size: cover;
  min-width: 150px;
  min-height: 225px;
`

export const TextContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

export const Text = styled.span`
  font-size: 20px;
`
