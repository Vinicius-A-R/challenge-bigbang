import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 14.375rem; //345px

  color: #fff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.image})`};

  h1 {
    margin-bottom: 12px;

    font-size: 1.375rem; // 22px
    font-weight: 400;
    font-family: var(--font-title);
  }

  div {
    z-index: 99;

    span {
      font-size: 12px;
      font-weight: 700;
      margin-right: 1.5rem;
    }
  }

  .filter {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 100%;
    height: 100%;
    padding: 1rem;

    left: 0;
    top: 0;
    z-index: 0;

    background: var(--color-gradient);
  }

  @media (min-width: 768px) {
    height: 100%;
  }
`;

const TravelCard = ({ title, type, author, image }) => (
  <Container image={image}>
    <div className="filter">
      <h1>{title}</h1>

      <div>
        <span>{type}</span>
        <span>por {author}</span>
      </div>
    </div>
  </Container>
);

export default TravelCard;
