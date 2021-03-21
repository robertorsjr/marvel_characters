import React from 'react';
import { FlexBox, Card, Separator } from '../../components'
import { Container, Title } from './styles'
import { useLocation } from 'react-router-dom'
 
function CharComics({items, id}) {

  let location = useLocation().pathname
  
  return (
    <Container>
    {
      items.length > 0 
      ? <Title>Comics that the character participated</Title> 
      : <Title>This character has no participation in comics</Title>
    }
    <Separator y={20}/>
    <FlexBox >
      {
        items.length > 0 && items.map(item => 
          <Card
            key={item.id}
            to={ location === `/comic/${id}` ? `/character/${item.id}` : `/comic/${item.id}`}
            character={item}
          />
        )
      }
    </FlexBox>
    </Container>
  );
}

export default CharComics;