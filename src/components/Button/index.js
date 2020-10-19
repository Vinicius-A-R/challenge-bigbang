import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CgArrowLongRight } from 'react-icons/cg';

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-column: span 6;

  width: 100%;
  height: 3rem;

  color: #fff;
  font-weight: 700;
  background-color: var(--color-green);

  span {
    display: flex;
    align-items: center;

    font-size: 1rem;
    text-transform: uppercase;

    svg {
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    grid-column: 3 / span 2;
  }
`;

const Button = ({ title, link }) => (
  <Container to={link}>
    <span>
      {title} <CgArrowLongRight />
    </span>
  </Container>
);

export default Button;
