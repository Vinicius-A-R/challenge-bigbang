import React from 'react';
import { Route } from 'react-router-dom';

import HomeBlog from '../../components/HomeBlog';

import { Container } from './styles';

function Blog() {
  return (
    <Container>
      <Route path="/" component={HomeBlog} />
    </Container>
  );
}

export default Blog;
