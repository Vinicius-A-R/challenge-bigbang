import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;

  width: 100%;
  margin: 2rem 0;

  -webkit-box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);

  img {
    width: 100%;
    height: 160px;
  }
`;

export const Info = styled.div`
  padding: 0.75rem;

  h1 {
    font-size: 1rem;
    margin: 0.75rem 0;
  }

  .cast {
    color: var(--color-green);
    font-weight: 700;
  }

  span {
    display: block;
    font-size: 12px;
    width: 72%;
  }
`;

export const ButtonLink = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;

  right: 0;
  bottom: 0;
  margin: 1rem;

  transform: rotate(90deg);

  color: #fff;
  font-size: 1.5rem;
  border-radius: 50%;
  background-color: var(--color-green);
`;
