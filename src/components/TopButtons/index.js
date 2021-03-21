import React from 'react';
import { Row, HomeButton, Separator, BackButton } from '../../components'

function TopButtons() {
  return (
    <>
      <Row >
        <HomeButton />
        <Separator x={40}/>
        <BackButton text={'Back'}/> 
      </Row> 
      <Separator y={20}/>
    </>
  );
}

export default TopButtons;