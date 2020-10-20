import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Links = styled.div`
  display: flex;

  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  a {
    color: #000;
    margin-right: 1.5rem;

    &:hover {
      border-bottom: 4px solid var(--color-green);
    }
  }
`;

export const Icons = styled.div`
  font-size: 1.5rem;

  svg {
    cursor: pointer;
    margin-left: 2rem;
  }

  .cart {
    width: auto;
    height: 1.5rem; // 18px
  }
`;
