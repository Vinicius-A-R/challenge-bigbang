import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 8px;
    text-align: center;
    font-family: var(--font-title);
    background-color: #fff;

    z-index: 999;
  }

  div {
    width: 100%;
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #c4c4c4;
  }

  @media (min-width: 768px) {
    grid-column: span 6;
  }
`;

function TitleSection({ title }) {
  return (
    <Container>
      <div></div>
      <h1>{title}</h1>
    </Container>
  );
}

export default TitleSection;
