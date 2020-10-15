import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem;
  border-bottom: 1px solid #c4c4c4;

  .logo {
    width: auto;
    height: 56px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.7;

  svg {
    color: #666;
    font-size: 1.5rem;
  }

  .cart {
    width: auto;
    height: 1.5rem; // 18px
  }
`;
