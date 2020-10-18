import React from 'react';
import { Route } from 'react-router-dom';

import MainContent from '../../components/MainContent';
import Blog from '../Blog';
import Shop from '../Shop';

import { Container } from './styles';

function Homepage() {
  return (
    <Container>
      <Route path="/" component={MainContent} />
      <Route path="/" component={Blog} />
      <Route path="/" component={Shop} />
    </Container>
  );
}

export default Homepage;
