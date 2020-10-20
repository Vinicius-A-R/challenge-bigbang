import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 80px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const CarouselMobile = styled.div`
  display: block;
  margin-bottom: 1.5rem;

  grid-column: span 6;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CarouselWeb = styled.div`
  display: none;
  margin-bottom: 1.5rem;

  grid-column: span 6;

  @media (min-width: 768px) {
    display: block;
  }
`;
