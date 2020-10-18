import React from 'react';
import { Route } from 'react-router-dom';

import HomeCourse from '../../components/HomeCourse';

import { Container } from './styles';

export default function Courses() {
  return (
    <Container>
      <Route path="/" component={HomeCourse} />
    </Container>
  );
}
