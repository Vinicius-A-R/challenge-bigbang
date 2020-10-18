import React from 'react';
import { Route } from 'react-router-dom';

import styled from 'styled-components';

import HomePodcast from '../../components/HomePodcast';

const Container = styled.div`
  width: 100%;
`;

function Podcast() {
  return (
    <Container>
      <Route path="/" component={HomePodcast} />
    </Container>
  );
}

export default Podcast;
