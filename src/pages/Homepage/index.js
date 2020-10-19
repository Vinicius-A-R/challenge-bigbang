import React from 'react';
import { Route } from 'react-router-dom';

import MainContent from '../../components/MainContent';
import Blog from '../Blog';
import Shop from '../Shop';
import Courses from '../../pages/Courses';
import Podcast from '../../pages/Podcast';

import Recomendations from '../../components/Recomendations';
import GridConcept from '../../components/GridConcept';

import { Container } from './styles';

function Homepage() {
  return (
    <Container>
      <Route path="/" component={MainContent} />
      <Route path="/" component={Blog} />
      <Route path="/" component={Shop} />

      <Recomendations />

      <Route path="/" component={Courses} />
      <Route path="/" component={Podcast} />

      <GridConcept />
    </Container>
  );
}

export default Homepage;
