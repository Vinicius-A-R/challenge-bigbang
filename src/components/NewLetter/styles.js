import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 0.75rem;
  border: 0.125rem solid #000;

  > h1 {
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
`;

export const Input = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;

  margin: 1.5rem 0;

  input {
    height: 3rem;
    margin-right: 0.75rem; //12px

    padding: 0.5rem;
    border: 1px solid #666;
  }

  button {
    border: 1px solid #000;
    padding: 0.75rem;
  }
`;

export const Footer = styled.div`
  display: flex;

  span {
    color: #666;
    text-align: center;
  }
`;
