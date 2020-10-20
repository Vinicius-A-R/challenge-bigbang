import React from 'react';

import { FiTriangle } from 'react-icons/fi';

import { Container, Info, ButtonLink } from './styles';

export default function Card({ image, castNumber, title, description }) {
  return (
    <Container>
      <img src={image} alt={title} />

      <Info>
        <span className="cast">Namahcast #{castNumber}</span>

        <h1>{title}</h1>

        <span>{description}</span>
      </Info>

      <ButtonLink to="/podcast">
        <FiTriangle />
      </ButtonLink>
    </Container>
  );
}
