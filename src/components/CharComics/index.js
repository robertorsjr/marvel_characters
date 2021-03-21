import React from 'react';
import { FlexBox, Card, Separator } from '../../components'
import { Container, Title } from './styles'
 
function CharComics({comics}) {
  console.warn(comics)
  return (
    <Container>
    {
      comics.length > 0 
      ? <Title>Comics that the character participated</Title> 
      : <Title>This character has no participation in comics</Title>
    }
    <Separator y={20}/>
    <FlexBox >
      {
        comics.length > 0 && comics.map(comic => 
          <Card
            key={comic.id}
            to={`comic/${comic.id}`}
            character={comic}
          />
        )
      }
    </FlexBox>
    </Container>
  );
}

export default CharComics;