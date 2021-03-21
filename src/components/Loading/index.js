import React from 'react';
import Loader from 'react-loader-spinner'
import { Colors } from '../../resources'
import { ItemContainer, Separator } from '../../components';

function Loading() {
  return (
    <>
      <Separator y={70}/>
      <ItemContainer>
        <Loader  type="Rings" color={ Colors.darkRed } height={640} width={500}/>
      </ItemContainer>
    </>
  );
}

export default Loading;