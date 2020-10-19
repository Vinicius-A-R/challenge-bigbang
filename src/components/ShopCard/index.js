import React from 'react';
import styled from 'styled-components';

import { formatPrice } from '../../utils/format';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 171px;
  margin: 0.75rem 0;

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
`;

function ShopCard({ image, title, price }) {
  return (
    <Container>
      <img src={image} alt="" />
      <span className="title">{title}</span>
      <span className="text">Lorem ipsum dolor</span>
      <span className="price">{formatPrice(price)}</span>
    </Container>
  );
}

export default ShopCard;
