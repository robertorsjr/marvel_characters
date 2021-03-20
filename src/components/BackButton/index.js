import React from 'react';
import { ButtonContainer, Text } from './styles';

function BackButton({to,text}) {
  return (
    <ButtonContainer to={`${to}`}>
        <Text>{text}</Text>
    </ButtonContainer>
  );
}

export default BackButton;