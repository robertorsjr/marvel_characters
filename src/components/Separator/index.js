import styled from 'styled-components'

const Separator = styled.div(props =>`
  height: ${props.y || 10}px;
  width: ${props.x || 10}px;
`)

export default Separator