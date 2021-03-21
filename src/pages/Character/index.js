import React, { useEffect, useState } from 'react';
import { BackButton, CharBio, ItemContainer, Container, FlexBox, Separator, CharComics } from '../../components';
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
        <BackButton text={'Back'}/>
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