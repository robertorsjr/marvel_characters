import React from 'react';
import { Separator } from '../../components'
import { Container, ImgContainer, TextContainter, Text } from './styles';
import { parseImage } from "../../utils";

function CharBio({character}) {
  
  return (
    <Container>
      <ImgContainer img={parseImage(character.thumbnail)}/>
      <Separator x={30}/>
      <TextContainter>
        {character.name && <Text>{character.name}</Text>}
        <Separator y={30}/>
        {character.description ? <Text>{character.description}</Text> : <Separator x={710}/>}
      </TextContainter>
    </Container>
  );
}

export default CharBio;