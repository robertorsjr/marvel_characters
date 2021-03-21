import React from 'react';
import { FlexBox, Card, Separator } from '../../components'
import { Container, Title } from './styles'
import { useLocation } from 'react-router-dom'
 
function CharComics({items, id}) {

  let location = useLocation().pathname

  const isComic = location === `/comic/${id}`
  const hasItems = items.length > 0
  
  return (
    <Container>
      {isComic ? (
        <Title>
          { hasItems ? 
            'Characters who participated in the comic'
            : 
            'No participations in the comic'
          }
        </Title>
      ) : (
        <Title>
          { hasItems ? 
            'Comics that the character participated'
            : 
            'This character has no participation in comics'
          }
        </Title>
      )}
      <Separator y={5}/>
      <FlexBox  justifyContent={'center'}>
        {
          hasItems && items.map(item =>
            <Card
              key={item.id}
              to={isComic ? `/character/${item.id}` : `/comic/${item.id}`}
              character={item}
            />
          )
        }
      </FlexBox>
    </Container>
  );
}

export default CharComics;