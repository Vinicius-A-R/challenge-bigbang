import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 80px 1fr 80px;
`;

export const CarouselMobile = styled.div`
  grid-column: span 6;

  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CarouselWeb = styled.div`
  display: none;
  grid-column: span 6;

  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    display: block;
  }
`;
