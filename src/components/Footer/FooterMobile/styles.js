import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  background-color: #000;

  // EDIT INPUT
  & div,
  form {
    width: 100%;

    flex-direction: column;

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

  .copyright {
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    font-size: var(--font-size-small-m);
    text-align: center;

    span:last-child {
      margin-top: 0.5rem;
    }
  }
`;

export const Media = styled.div`
  display: flex;
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
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 0;

  color: #fff;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  color: #fff;

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
`;

export const Payments = styled.div`
  margin-top: 1.5rem;
  font-size: var(--font-size-small-m);

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 2rem;
    }
  }
`;

export const Security = styled.div`
  display: flex;
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
`;
