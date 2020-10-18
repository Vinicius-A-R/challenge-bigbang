import React from 'react';

import concept1 from '../../assets/concept-1.png';
import concept2 from '../../assets/concept-2.png';
import concept3 from '../../assets/concept-3.png';
import concept4 from '../../assets/concept-4.png';
import concept5 from '../../assets/concept-5.png';
import concept6 from '../../assets/concept-6.png';

import TitleSection from '../TitleSection';

import { Container, Grid } from './styles';

function GridConcept() {
  return (
    <Container>
      <TitleSection title="@namah.concept" />

      <Grid>
        <img src={concept1} alt="concept" />
        <img src={concept2} alt="concept" />
        <img src={concept3} alt="concept" />
        <img src={concept4} alt="concept" />
        <img src={concept5} alt="concept" />
        <img src={concept6} alt="concept" />
      </Grid>
    </Container>
  );
}

export default GridConcept;
