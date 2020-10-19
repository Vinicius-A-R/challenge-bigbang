import React from 'react';

import book from '../../assets/book-acenda-a-sua-luz.png';
import shirt from '../../assets/camiseta-1.png';
import carpet from '../../assets/tapete-1.png';

import ShopCard from '../ShopCard';

import { Container, Title } from './styles';

function Recomendations() {
  return (
    <Container>
      <Title>
        <span>nossos especialistas</span>
        <h2>recomendam</h2>
      </Title>

      <ShopCard image={book} title="Livro Acenda a Sua Luz" price="54" />
      <ShopCard image={shirt} title="Livro Acenda a Sua Luz" price="149" />
      <ShopCard image={carpet} title="Livro Acenda a Sua Luz" price="237" />
      <ShopCard image={book} title="Livro Acenda a Sua Luz" price="54" />
      <ShopCard image={shirt} title="Livro Acenda a Sua Luz" price="149" />
      <ShopCard image={carpet} title="Livro Acenda a Sua Luz" price="237" />
    </Container>
  );
}

export default Recomendations;
