import React from 'react';
import {  useHistory } from 'react-router-dom'
import { ButtonContainer, Text } from './styles';

function BackButton({ text }) {
  const history = useHistory()
  console.warn(history)
  
  const NavigateBack = () =>{
    history.goBack()
  }

  return (
    <ButtonContainer onClick={NavigateBack}>
        <Text>{text}</Text>
    </ButtonContainer>
  );
}

export default BackButton;