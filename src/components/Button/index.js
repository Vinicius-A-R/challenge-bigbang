import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CgArrowLongRight } from 'react-icons/cg';

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3rem;

  color: #fff;
  font-weight: 700;
  background-color: var(--color-green);

  span {
    display: flex;
    align-items: center;

    font-size: 1rem;

    svg {
      margin-left: 0.5rem;
    }
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
