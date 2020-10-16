import React from 'react';

import Banner from '../Banner';
import TravelCard from '../TravelCard';

import travel from '../../assets/travel-1.png';
import { Container } from './styles';

function MainContent() {
  return (
    <Container>
      <Banner />

      <TravelCard
        image={travel}
        title="Lorem ipsum dolor sit amet conseetetur adipiscing elit"
        type="VIAGEM"
        author="Fulano de Tal"
      />
    </Container>
  );
}

export default MainContent;
