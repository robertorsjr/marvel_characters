import React from 'react';
import Loader from 'react-loader-spinner'
import { Colors } from '../../resources'
import { ItemContainer } from '../../components';

function Loading() {
  return (
    <ItemContainer>
      <Loader  type="Rings" color={ Colors.darkRed } height={640} width={500}/>
    </ItemContainer>
  );
}

export default Loading;