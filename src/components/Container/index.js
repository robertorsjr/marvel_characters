import React from 'react';
import { Separator } from '../../components'
import { Wrapper, TextContainter, Title } from './styles'

function Container({text, children}) {
  return (
    <Wrapper>
      <Separator y={20}/>
      <TextContainter>
        <Title>{text}</Title>
      </TextContainter>
      <Separator y={20}/>
        {children}
      <Separator y={20}/>
    </Wrapper>
  );
}

export default Container;