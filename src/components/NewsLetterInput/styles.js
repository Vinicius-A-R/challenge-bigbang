import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > h1 {
    color: #666;
    font-size: var(--font-size-medium-m);
    text-align: center;
  }

  > span {
    width: 100%;
    display: block;
    margin-top: 0.75rem;

    color: #666;
    text-align: center;
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    > h1 {
      text-align: center;
    }
  }
`;

export const Input = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 1.5rem 0;

  input {
    width: 100%;
    height: 3rem;

    padding: 0.5rem;
    border: 1px solid #666;
  }

  button {
    width: 50%;
    padding: 0.75rem;

    margin-top: 1rem;
    font-weight: 700;
    border: 1px solid #000;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;

    input {
      margin: 1rem 0;
      margin-right: 1rem;
    }

    button {
      width: 50%;
      height: 48px;
      margin: 0;
    }
  }
`;
