import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const CarouselMobile = styled.div`
  display: block;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CarouselWeb = styled.div`
  display: none;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    display: block;
  }
`;
