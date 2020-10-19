import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 400;
    font-family: var(--font-title);
  }
`;

export const Carousel = styled.div`
  width: 100%;
  margin: 2rem 0;

  .carousel-dots li.carousel-dots-active button:before {
    color: var(--color-green);
  }
`;
