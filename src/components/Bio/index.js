import React from 'react';
import { Separator } from '../../components'
import { Container, ImgContainer, TextContainter, Text } from './styles';
import { parseImage } from "../../utils";
 
function Bio({item}) {
  
  return (
    <Container>
      <ImgContainer img={parseImage(item.thumbnail)}/>
      <Separator x={50}/>
      <TextContainter>
        <Text isTitle={true}>{item.name ? item.name : item.title}</Text>
        <Separator y={30}/>
        {item.description && <Text>{item.description}</Text>}
      </TextContainter>
    </Container>
  );
}

export default Bio;