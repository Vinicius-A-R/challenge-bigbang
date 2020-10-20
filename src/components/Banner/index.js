import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import image from '../../assets/img-1.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 6.25rem; //100 px

  border: 1px solid #c4c4c4;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${image});

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50%;

    h1 {
      text-align: center;
      font-size: 18px;
      font-family: 'DM Serif Text', serif;
    }

    span {
      color: #666;
      font-size: 11px;
      margin-top: 8px;
    }
  }

  @media (min-width: 768px) {
    height: 250px;

    grid-column: 1 / 3;
  }
`;

const Button = styled(Link)`
  display: none;

  width: 180px;
  height: 36px;
  margin-top: 1rem;

  color: #fff;
  font-weight: 700;
  background-color: var(--color-green);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Banner = () => (
  <Container>
    <div>
      <h1>Lorem ipsum dolor sit amet</h1>
      <span>Lorem ipsum dolor sit amet</span>

      <Button>LOREM IPSUM</Button>
    </div>
  </Container>
);

export default Banner;
