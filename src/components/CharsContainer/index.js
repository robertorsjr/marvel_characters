import React from 'react';
import { Wrapper } from './styles';

function CharsContainer({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default CharsContainer;