import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  flex-direction: ${({flexDirection})=> flexDirection || 'row'}
 
`

export default Row;
