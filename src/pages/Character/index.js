import React, { useEffect, useState } from 'react';
import { CharBio, CharsContainer, Container } from '../../components';
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
        {
          character.length > 0 && character.map(char =>  
            <CharBio 
              key={char.id}
              character={char}
            />
          )
        }  
      </CharsContainer>
    </Container>
  );
}

export default Character;