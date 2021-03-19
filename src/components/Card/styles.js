import styled from 'styled-components';
import { Colors } from '../../resources'
import { Link } from 'react-router-dom'

export const Anchor = styled(Link)`
  text-decoration: none;
`

export const CardContainer = styled.div`
  background-color: ${ Colors.black };
  border: 2px solid ${ Colors.black };
  height: 324px;
  border-radius: 10px;
  margin: 10px 0;
  padding-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover{
    background-color: ${ Colors.darkRed };
  }

`

export const CardImg = styled.div`
  border-radius: 10px;
  background: ${({img}) => `url(${img})`} no-repeat;
  background-size: cover;
  width: 216px;
  height: 270px;
  transition: 0.8s;
  
  &:hover{
    height: 100%;
  }
`

export const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${ Colors.white };
  margin-bottom: 5px;
`