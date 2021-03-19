import React, { useState, useEffect } from 'react'
import { Card, CharsContainer, Separator } from '../../components'
import { Container, TextContainter, Title } from './styles'
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
  
  console.warn(characters)
  if (loading) {
    return null
  }

  return (
    <Container>
      <Separator y={20}/>
      <TextContainter>
        <Title>Marvel Characters</Title>
      </TextContainter>
      <Separator y={20}/>
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