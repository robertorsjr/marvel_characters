import styled from 'styled-components'

const Separator = styled.div`
  height: ${({y}) => y || 10}px;
  width: ${({x}) =>x || 10}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Separator