import React, { useEffect, useState } from 'react';
import { Loading, CharBio, ItemContainer, Container, FlexBox, Separator, CharComics, BackButton } from '../../components';
import { useRouteMatch } from 'react-router-dom'
import { getComic, getComicCharacters } from '../../services/comics'

function Comic() {
  const [comic, setComic] = useState({})
  const [comicCharacters, setComicCharacters] = useState({})
  const { params } = useRouteMatch()
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    async function fetchComicById(){
      setLoading(true)
      const [response, respComics ] = await Promise.all([
        getComic(params.id),
        getComicCharacters(params.id)
      ]) 
      setComic(response.data.data.results)
      setComicCharacters(respComics.data.data.results)
      setLoading(false)
    }
    fetchComicById()
  },[params.id])
  
  if (loading) {
    return <Loading/>
  }

  return (
    <Container text={'Comic'}>
      <ItemContainer>
        <FlexBox flexDirection={'column'}>
        <BackButton text={'Back'}/>
        <Separator y={20}/>
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