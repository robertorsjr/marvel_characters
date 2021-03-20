import React, { useEffect, useState } from 'react';
import { BackButton, CharBio, CharsContainer, Container, FlexBox, Separator } from '../../components';
import { useRouteMatch } from 'react-router';
import { getCharactersById } from '../../services/characters'

function Character() {
  const [character, setCharacter] = useState({})
  const { params } = useRouteMatch()

  useEffect(()=> {
    async function fetchCharacterById(){
      const response = await getCharactersById(params.id)
      setCharacter(response.data.data.results)
    }
    fetchCharacterById()
  },[params.id])

  console.warn(character)

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
        Comics
        </FlexBox>
      </CharsContainer>
    </Container>
  );
}

export default Character;