import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 1rem;

  color: #fff;
  background-color: #000;
`;

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  color: #fff;
  background-color: #000;

  // EDIT INPUT
  & div,
  form {
    width: 100%;

    & h1 {
      color: #fff;
    }

    & button {
      height: 3rem;
      max-width: 122px;
      margin: 1.5rem auto;

      color: #fff;
      border: 1px solid #fff;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 80px;
  }
`;

export const Input = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-column: 5 / span 2;
  }
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 0;

  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    font-size: 1.5rem;
    margin-top: 1.5rem;

    a {
      color: #fff;

      & + a {
        margin-left: 2rem;
      }
    }
  }

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;

    border: 0;

    div {
      margin: 0;
    }

    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  color: #fff;
  padding: 1.5rem 0 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-small-m);

    a,
    span {
      color: #fff;
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    grid-column: span 2;

    padding: 0.5rem 1rem;

    grid-column: 3 / span 2;
    grid-row: 1;
  }
`;

export const Payments = styled.div`
  display: flex;

  padding: 0.5rem 0 1.5rem;
  font-size: var(--font-size-small-m);

  span {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    grid-column: span 2;

    align-items: center;

    span {
      padding: 0 1rem;
      align-items: flex-start;
    }

    padding: 0;
    border-top: 2px solid #fff;
  }
`;

export const Security = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem 0;

  color: #fff;
  font-size: var(--font-size-small-m);

  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;

  .created {
    display: flex;
    flex-direction: row;
    justify-content: center;

    svg {
      margin-right: 0.5rem;
    }

    span:last-child {
      margin-left: 1.5rem;
    }
  }

  .rules {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 2rem;

    a {
      color: #fff;
      padding: 0 8px;
    }
  }

  @media (min-width: 768px) {
    grid-row: 2;
    grid-column: 5 / span 2;

    padding: 0.5rem;

    border: 0;
    border-top: 2px solid #fff;

    .created {
      align-items: center;
      text-align: center;
    }

    .rules {
      text-align: center;
      margin-top: 0.5rem;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  font-size: var(--font-size-small-m);
  text-align: center;

  span:last-child {
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    grid-row: 2;
    grid-column: 1 / span 2;

    align-items: center;
    justify-content: center;

    margin: 0;
    border-top: 2px solid #fff;
  }
`;
