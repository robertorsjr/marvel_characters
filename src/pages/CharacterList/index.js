import React, { useState, useEffect } from 'react'
import { Card, ItemContainer, Container, FlexBox, SwitchPages, HomeButton, Separator } from '../../components'
import { useHistory, useParams } from "react-router-dom";
import { getCharacters } from '../../services/characters'

function CharacterList() {
  const [characters, setCharacters] = useState({})
  const [loading, setLoading] = useState(false);
 
  const { page = 1 } = useParams();
  
  const history = useHistory()

  useEffect(()=> {
    async function fetchCharacters(){
      setLoading(true)
      const response = await getCharacters(page)
      setCharacters(response.data.data.results)
      setLoading(false)
    }
    fetchCharacters()
  },[page])

  const navigate = (num)=>{
    history.push(`/pages/${Number(page) + num}`)
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
      <ItemContainer>
        {
          characters.length > 0 && characters.map(character =>
            <Card
              key={character.id}
              to={`/character/${character.id}`}
              character={character}
            />  
          )
        }
        <FlexBox justifyContent={'space-between'}>
          {
            page > 1 ? (
              <SwitchPages
                onClick={() => navigate(-1)}
                reverse={true}
              />
            ) : <Separator x={160}/>
          }
          <HomeButton size={'1x'}/>
          <SwitchPages
            onClick={() => navigate(1)}
            reverse={false}
          />
        </FlexBox>  
      </ItemContainer> 
    </Container>  
  );
}

export default CharacterList;