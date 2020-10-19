import React from 'react';

import cast from '../../assets/namahcast-123.png';

import TitleSection from '../TitleSection';
import Button from '../Button';

import { FiTriangle } from 'react-icons/fi';
import { Container, Card, Info, ButtonLink } from './styles';

function HomePodcast() {
  return (
    <Container>
      <TitleSection title="Podcast" />

      <Card>
        <img src={cast} alt="" />

        <Info>
          <span className="cast">Namahcast #123</span>

          <h1>
            Título podcast lorem ipsum dolor sit amet, consectetur elit tempor
            ut labore magna aliqua et dolore
          </h1>

          <span>
            Descrição do episódio do podcast lorem ipsum dolor sit amet,
            consectetur elit tempor
          </span>
        </Info>

        <ButtonLink to="/podcast">
          <FiTriangle />
        </ButtonLink>
      </Card>

      <Button link="/podcast" title="veja todos os podcasts" />
    </Container>
  );
}

export default HomePodcast;
