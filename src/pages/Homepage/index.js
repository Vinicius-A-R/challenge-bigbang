import React from 'react';
import { Route } from 'react-router-dom';

import MainContent from '../../components/MainContent';

import { Container } from './styles';

function Homepage() {
  return (
    <Container>
      <Route path="/" component={MainContent} />
    </Container>
  );
}

export default Homepage;
