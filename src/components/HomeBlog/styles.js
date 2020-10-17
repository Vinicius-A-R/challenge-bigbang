import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  width: 100%;
`;

export const Section = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;

  h1 {
    padding: 8px;
    text-align: center;
    font-family: var(--font-title);
    background-color: #fff;

    z-index: 999;
  }

  div {
    width: 100%;
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #c4c4c4;
  }
`;

export const Ads = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;

  img {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    padding: 0.75rem 0;

    font-size: 1.124rem; //18px
    font-weight: 700;
    font-family: var(--font-title);
    line-height: 1.375rem; //22px
  }

  .type {
    color: #333;
    margin-bottom: 0.75rem;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;

  color: #fff;
  font-weight: 700;
  background-color: #73a8a0;

  svg {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`;
