import React, { useEffect, useState } from 'react';
import { CharBio, ItemContainer, Container, FlexBox, Separator, CharComics, TopButtons } from '../../components';
import { useRouteMatch } from 'react-router';
import { getCharactersById, getCharComics } from '../../services/characters'

function Character() {
  const [character, setCharacter] = useState({})
  const [charComics, setCharComics] = useState({})
  const { params } = useRouteMatch()

  useEffect(()=> {
    async function fetchCharacterById(){
      const [response, respComics ] = await Promise.all([
        getCharactersById(params.id),
        getCharComics(params.id)
      ]) 
      setCharacter(response.data.data.results)
      setCharComics(respComics.data.data.results)
    }
    fetchCharacterById()
  },[params.id])

  return (
    <Container text={'Character Bio'}>
      <ItemContainer>
        <FlexBox flexDirection={'column'}>
        <TopButtons/>
        {
          character.length > 0 && character.map(char =>  
            <CharBio 
              key={char.id}
              character={char}
            />
          )
        }
        <Separator y={10}/>
        <CharComics items={charComics}/>
        </FlexBox>
      </ItemContainer>
    </Container>
  );
}

export default Character;