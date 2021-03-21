import React from 'react';
import { FlexBox, Card, Separator } from '../../components'
import { Container, Title } from './styles'
import { useLocation } from 'react-router-dom'
 
function CharComics({items, id}) {

  let location = useLocation().pathname
  
  return (
    <Container>
    { 
      location === `/comic/${id}` ?
        items.length > 0 
        ? <Title>Characters who participated in the comic</Title>
        : <Title>no participations in the comic</Title>
    
      :
        items.length > 0 
        ? <Title>Comics that the character participated</Title> 
        : <Title>This character has no participation in comics</Title>
    }
    <Separator y={5}/>
    <FlexBox  justifyContent={'flex-start'}>
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