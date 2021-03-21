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
        <Text>{character.name ? character.name : character.title}</Text>
        <Separator y={30}/>
        {character.description && <Text>{character.description}</Text>}
      </TextContainter>
    </Container>
  );
}

export default CharBio;