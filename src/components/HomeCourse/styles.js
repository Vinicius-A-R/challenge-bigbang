import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 80px 1fr 80px;
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
