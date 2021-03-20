import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  justify-content: ${({justifyContent})=> justifyContent || 'space-between'};
  flex-direction: ${({flexDirection})=> flexDirection  || 'row' };
`

export default FlexBox;
