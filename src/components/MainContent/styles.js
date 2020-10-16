import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

export const Ads = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  max-width: 10.3125rem;
  height: 14.4375rem;
  padding: 0.75rem;

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
`;
