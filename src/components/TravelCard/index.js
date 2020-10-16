import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 14.375rem; //345px

  color: #fff;
  background-image: ${(props) => `url(${props.image})`};

  h1 {
    font-size: 1.375rem; // 22px
    font-family: 'DM Serif Text', serif;
    margin-bottom: 12px;
  }

  div {
    z-index: 99;

    span {
      font-size: 12px;
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

    background: rgba(0, 0, 0, 0.25);
  }
`;

const TravelCard = ({ title, type, author, image }) => (
  <Container image={image}>
    <div className="filter">
      <h1>{title}</h1>

      <div>
        <span>{type}</span>
        <span>{author}</span>
      </div>
    </div>
  </Container>
);

export default TravelCard;
