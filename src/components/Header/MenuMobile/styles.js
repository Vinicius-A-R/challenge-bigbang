import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50%;

  svg {
    color: #666;
    font-size: 1.5rem;
  }

  .cart {
    width: auto;
    height: 1.5rem; // 18px
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Toggle = styled.div``;

export const Menu = styled.div`
  position: absolute;
  top: 64px;
  right: 0;

  display: ${(props) => (props.hidden ? 'flex' : 'none')};
  flex-direction: column;

  width: 90vw;
  padding: 1rem;

  border-radius: 0.5rem;
  background-color: var(--color-green);

  text-transform: uppercase;

  z-index: 999;

  a {
    color: #fff;
    font-weight: 700;

    & + a {
      padding-top: 1rem;
    }
  }

  &::after {
    content: '';
    position: absolute;

    border-style: solid;
    border-color: var(--color-green) transparent;
    border-width: 0px 12px 16px 12px;

    right: 2px;
    bottom: 99%;
    /* left: 50%; */
    /* transform: translateX(-50%); */
  }
`;
