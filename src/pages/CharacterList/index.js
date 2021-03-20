import React, { useState, useEffect } from 'react'
import { Card, CharsContainer, Container } from '../../components'
import { getCharacters } from '../../services/characters'

function CharacterList() {
  const [characters, setCharacters] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    async function fetchCharacters(){
      setLoading(true)
      const response = await getCharacters()
      setCharacters(response.data.data.results)
      setLoading(false)
    }
    fetchCharacters()
  },[])
  
  if (loading) {
    return null
  }

  return (
    <Container text={'Marvel Characters'}>
      <CharsContainer>
        {
          characters.length > 0 && characters.map(character =>
            <Card
              key={character.id}
              character={character}
            />  
          )
        }  
      </CharsContainer> 
    </Container>  
  );
}

export default CharacterList;