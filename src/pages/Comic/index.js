import React, { useEffect, useState } from 'react';
import { CharBio, ItemContainer, Container, FlexBox, Separator, CharComics, TopButtons } from '../../components';
import { useRouteMatch } from 'react-router-dom'
import { getComic, getComicCharacters } from '../../services/comics'

function Comic() {
  const [comic, setComic] = useState({})
  const [comicCharacters, setComicCharacters] = useState({})
  const { params } = useRouteMatch()

  useEffect(()=> {
    async function fetchComicById(){
      const [response, respComics ] = await Promise.all([
        getComic(params.id),
        getComicCharacters(params.id)
      ]) 
      setComic(response.data.data.results)
      setComicCharacters(respComics.data.data.results)
    }
    fetchComicById()
  },[params.id])

  return (
    <Container text={'Comic'}>
      <ItemContainer>
        <FlexBox flexDirection={'column'}>
          <TopButtons/>
          {
            comic.length > 0 && comic.map(char =>  
              <CharBio 
                key={char.id}
                character={char}
              />
            )
          }
          <Separator y={10}/>
          <CharComics items={comicCharacters} id={params.id}/>
        </FlexBox>
      </ItemContainer>
    </Container>
  );
}

export default Comic;