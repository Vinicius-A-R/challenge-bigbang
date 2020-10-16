import React from 'react';

// Cards
import Banner from '../Banner';
import TravelCard from '../TravelCard';
import CastCard from '../CastCard';

//IMAGES
import travel from '../../assets/travel-1.png';
import cast from '../../assets/namahcast-122.png';
import curso from '../../assets/curso-04.png';
import condicionador from '../../assets/condicionador-1.png';

// ICONS
import { CgArrowLongRight } from 'react-icons/cg';

// STYLES
import { Container, Ads, Card } from './styles';

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

      <CastCard
        image={cast}
        title="Nome do episódio do podcast lorem ipsum dolor sit amet conseetetur eli..."
        type="Namahcast #122"
      />

      <Ads>
        <Card image={curso}>
          <span>curso - 04 ABR</span>
          <h1>Imersão Vinyasa Flow</h1>
        </Card>
        <Card image={condicionador}>
          <h1>Condicionador Namah</h1>
          <span>
            compre agora <CgArrowLongRight />
          </span>
        </Card>
      </Ads>
    </Container>
  );
}

export default MainContent;
