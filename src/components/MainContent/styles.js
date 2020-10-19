import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 384px;
    grid-template-rows: 252px 264px 264px;

    .filter {
      grid-row: 2 / 4;
    }
  }
`;

export const CardTravel = styled.div`
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

    grid-row: 2 / 4;
  }
`;

export const Ads = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;

  width: 100%;

  @media (min-width: 768px) {
    grid-gap: 1rem;
    grid-column: 2 /3;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  max-width: 100%;
  height: 14.4375rem;
  padding: 8px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.image})`};

  color: #fff;

  h1 {
    font-size: 22px;
    font-family: var(--font-title);
    font-weight: 400;
  }

  span {
    display: flex;
    align-items: center;

    font-size: 0.75rem;
    font-weight: 700;

    svg {
      font-size: 1rem;
      margin-left: 8px;
    }
  }

  @media (min-width: 768px) {
    height: 100%;
  }
`;
