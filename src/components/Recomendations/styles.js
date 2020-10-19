import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 50%;
  grid-gap: 1rem;

  margin-top: 2rem;
  padding: 0.75rem;

  overflow-x: scroll;

  border-top: 1px solid #666;
  border-bottom: 1px solid #666;

  &::-webkit-scrollbar {
    height: 0;
  }

  @media (min-width: 768px) {
    grid-auto-columns: 180px;
    grid-template-rows: 260px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    font-family: var(--font-title);
  }
`;
