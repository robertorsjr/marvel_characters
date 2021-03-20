import React, { useEffect, useState } from 'react';
import { BackButton, CharBio, CharsContainer, Container, FlexBox, Separator } from '../../components';
import { useRouteMatch } from 'react-router';
import { getCharactersById, getCharComics } from '../../services/characters'
import CharComics from '../../components/CharComics';

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

  console.warn(charComics)

  return (
    <Container text={'Character Bio'}>
      <CharsContainer>
        <FlexBox flexDirection={'column'}>
        <BackButton to='../' text={'Home'}/>
        {
          character.length > 0 && character.map(char =>  
            <CharBio 
              key={char.id}
              character={char}
            />
          )
        }
        <Separator y={30}/>
        <CharComics comics={charComics}/>
        </FlexBox>
      </CharsContainer>
    </Container>
  );
}

export default Character;