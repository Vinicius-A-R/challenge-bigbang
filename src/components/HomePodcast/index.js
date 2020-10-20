import React from 'react';
import Slider from 'infinite-react-carousel';

import cast1 from '../../assets/namahcast-123.png';
import cast2 from '../../assets/namahcast-122.png';
import cast3 from '../../assets/namahcast-121.png';

import TitleSection from '../TitleSection';
import Button from '../Button';

import Card from './Card';

import { Container, CarouselMobile, CarouselWeb } from './styles';

function HomePodcast() {
  return (
    <Container>
      <TitleSection title="Podcast" />

      <CarouselMobile>
        <Slider
          dots
          rows={1}
          wheel={true}
          duration={300}
          arrows={false}
          centerMode={true}
          centerPadding={8}
          slidesToShow={1}
          shift={16}
        >
          <Card
            image={cast1}
            castNumber={123}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
          labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
          consectetur elit tempor"
          />

          <Card
            image={cast2}
            castNumber={122}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
        labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
        consectetur elit tempor"
          />

          <Card
            image={cast3}
            castNumber={121}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
          labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
          consectetur elit tempor"
          />

          <Card
            image={cast1}
            castNumber={120}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
          labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
          consectetur elit tempor"
          />

          <Card
            image={cast2}
            castNumber={119}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
        labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
        consectetur elit tempor"
          />

          <Card
            image={cast3}
            castNumber={118}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
          labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
          consectetur elit tempor"
          />
        </Slider>
      </CarouselMobile>

      <CarouselWeb>
        <Slider
          dots
          rows={1}
          wheel={true}
          duration={300}
          arrows={false}
          centerMode={true}
          centerPadding={8}
          slidesToShow={3}
          shift={16}
        >
          <Card
            image={cast1}
            castNumber={123}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
          labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
          consectetur elit tempor"
          />

          <Card
            image={cast2}
            castNumber={122}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
        labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
        consectetur elit tempor"
          />

          <Card
            image={cast3}
            castNumber={121}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
          labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
          consectetur elit tempor"
          />

          <Card
            image={cast1}
            castNumber={120}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
          labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
          consectetur elit tempor"
          />

          <Card
            image={cast2}
            castNumber={119}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
        labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
        consectetur elit tempor"
          />

          <Card
            image={cast3}
            castNumber={118}
            title="Título podcast lorem ipsum dolor sit amet, consectetur elit tempor ut
          labore magna aliqua et dolore"
            description="Descrição do episódio do podcast lorem ipsum dolor sit amet,
          consectetur elit tempor"
          />
        </Slider>
      </CarouselWeb>

      <Button link="/podcast" title="veja todos os podcasts" />
    </Container>
  );
}

export default HomePodcast;
