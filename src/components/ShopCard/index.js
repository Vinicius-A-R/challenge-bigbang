import React, { useState } from 'react';

import { formatPrice } from '../../utils/format';

import { FaHeart } from 'react-icons/fa';
import { Container, Icon } from './styles';

function ShopCard({ image, title, price }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <Container>
      <Icon favorite={favorite} onClick={() => setFavorite(!favorite)}>
        <FaHeart size={32} />
      </Icon>

      <img src={image} alt="" />
      <span className="title">{title}</span>
      <span className="text">Lorem ipsum dolor</span>
      <span className="price">{formatPrice(price)}</span>
    </Container>
  );
}

export default ShopCard;
