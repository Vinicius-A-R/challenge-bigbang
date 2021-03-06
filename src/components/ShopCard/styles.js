import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 171px;
  margin: 0 0.5rem;

  img {
    width: 100%;
    height: 13.75rem;
  }

  .title {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin: 0.5rem 0;
  }

  .text {
    color: #666;
    text-align: center;
    font-size: var(--font-size-small-m);
  }

  .price {
    margin-top: 0.5rem;

    font-size: 1rem;
    font-weight: 700;
    text-align: center;
  }

  @media (min-width: 768px) {
    max-width: 282px;
    /* height: 463px; */

    img {
      width: 100%;
      height: 375px;
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  margin: 0.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);

  cursor: pointer;

  svg {
    color: ${(props) => (props.favorite ? '#FC0404' : '#000')};
  }
`;
