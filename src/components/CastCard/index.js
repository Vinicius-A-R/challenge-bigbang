import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  width: 100%;
  height: 230px;

  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.image})`};
  filter: grayscale(25%);

  div {
    color: #fff;

    h1 {
      font-size: 22px;
      font-family: var(--font-title);
      font-weight: 400;
    }

    span {
      font-size: 0.75rem;
      font-weight: 700;
    }
  }

  .filter {
    display: flex;
    align-items: flex-end;

    width: 100%;
    height: 100%;
    padding: 1rem;

    background: var(--color-gradient);
  }
`;

const TravelCard = ({ title, type, image }) => (
  <Container image={image}>
    <div className="filter">
      <div>
        <span>{type}</span>
        <h1>{title}</h1>
      </div>
    </div>
  </Container>
);

export default TravelCard;
