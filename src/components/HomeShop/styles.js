import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 80px;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    font-family: var(--font-title);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const CarouselMobile = styled.div`
  width: 100%;
  margin: 2rem 0;

  grid-column: span 6;

  .carousel-dots li.carousel-dots-active button:before {
    color: var(--color-green);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CarouselWeb = styled.div`
  display: none;
  width: 100%;
  margin: 2rem 0;

  grid-column: span 6;

  .carousel-dots li.carousel-dots-active button:before {
    color: var(--color-green);
  }

  @media (min-width: 768px) {
    display: block;
  }
`;
