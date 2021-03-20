import React, { useState, useEffect } from 'react'
import { Card, CharsContainer, Container, FlexBox, SwitchPages } from '../../components'
import { getCharacters } from '../../services/characters'

function CharacterList() {
  const [characters, setCharacters] = useState({})
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0)
  
  useEffect(()=> {
    async function fetchCharacters(){
      setLoading(true)
      const response = await getCharacters(offset)
      setCharacters(response.data.data.results)
      setLoading(false)
    }
    fetchCharacters()
  },[offset])

  const scrollToTop = (num)=>{
    setOffset(offset + num)
    window.scroll({
        top:0,
        behavior:'smooth'
    })
  }

  
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
              to={`character/${character.id}`}
              character={character}
            />  
          )
        }
        <FlexBox justifyContent={'space-between'}>
          {offset >= 20 ? <SwitchPages to={`/page${offset}`} onClick={()=> scrollToTop(-20)} reverse={true}/> : <div/> }
          <SwitchPages to={`/page${offset}`} onClick={()=> scrollToTop(20)} reverse={false}/>
        </FlexBox>  
      </CharsContainer> 
    </Container>  
  );
}

export default CharacterList;