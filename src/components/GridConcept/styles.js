import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem 0;
`;

export const Grid = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  img {
    width: 105px;
    height: 105px;
  }
`;
