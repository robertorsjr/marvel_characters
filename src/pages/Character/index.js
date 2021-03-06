import React, { useEffect, useState } from 'react';
import { Loading, Bio, ItemContainer, Container, FlexBox, Separator, CharAndComics, BackButton } from '../../components';
import { useRouteMatch } from 'react-router';
import { getCharactersById, getCharComics } from '../../services/characters'

function Character() {
  const [character, setCharacter] = useState({})
  const [charComics, setCharComics] = useState({})
  const [loading, setLoading] = useState(false);
  const { params } = useRouteMatch()

  useEffect(()=> {
    async function fetchCharacterById(){
      setLoading(true)
      const [response, respComics] = await Promise.all([
        getCharactersById(params.id),
        getCharComics(params.id)
      ]) 
      setCharacter(response.data.data.results)
      setCharComics(respComics.data.data.results)
      setLoading(false)
    }
    fetchCharacterById()
  },[params.id])

  if (loading) {
    return <Loading/>
  }

  return (
    <Container text={'Character Bio'}>
      <ItemContainer>
        <FlexBox flexDirection={'column'}>
        <BackButton text={'Back'}/>
        <Separator y={20}/>
          {
            character.length > 0 && character.map(char =>  
              <Bio 
                key={char.id}
                item={char}
              />
            )
          }
          <Separator y={10}/>
          <CharAndComics items={charComics}/>
        </FlexBox>
      </ItemContainer>
    </Container>
  );
}

export default Character;