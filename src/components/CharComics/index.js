import React from 'react';
import { FlexBox, Card } from '../../components'
import { Container, Title } from './styles'
 
function CharComics({comics}) {
  return (
    <Container>
    <Title>Comics</Title>
    <FlexBox >
      {
        comics.length > 0 && comics.map(comic => 
          <Card
            key={comic.id}
            character={comic}
          />
        )
      }
    </FlexBox>
    </Container>
  );
}

export default CharComics;