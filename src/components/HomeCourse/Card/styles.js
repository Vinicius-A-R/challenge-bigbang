import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  margin: 2rem 0;

  -webkit-box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);

  h1 {
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  img {
    width: 100%;
    height: 160px;
    margin-bottom: 1.5rem;

    filter: grayscale(25%);
  }

  span {
    padding: 2px 0;
  }

  .date {
    color: var(--color-green);
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.75rem;
`;

export const ButtonLink = styled.div`
  position: absolute;

  right: 0;
  bottom: 0;
  margin: 1rem;

  color: var(--color-green);
  font-size: 1.5rem;

  cursor: pointer;
`;
