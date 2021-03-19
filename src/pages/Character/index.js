import React from 'react';
import { useRouteMatch } from 'react-router';
import { Container } from './styles';

function Character() {
  const { params } = useRouteMatch()

  console.warn(params.id)

  return (
    <Container>Character</Container>
  );
}

export default Character;