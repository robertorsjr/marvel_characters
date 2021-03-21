import React from 'react';
import { Wrapper } from './styles';

function ItemContainer({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default ItemContainer;