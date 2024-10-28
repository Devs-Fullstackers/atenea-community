import React from 'react';
import { AteneaContainer, Title, Subtitle } from './homeStyles';
import { getAteneaGreeting } from './homeDm';

const Atenea = () => (
  <AteneaContainer>
    <Title>Diosa Atenea</Title>
    <Subtitle>{getAteneaGreeting()}</Subtitle>
  </AteneaContainer>
);

export default Atenea;
