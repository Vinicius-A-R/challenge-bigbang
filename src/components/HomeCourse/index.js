import React from 'react';
import Slider from 'infinite-react-carousel';

import course from '../../assets/cursos-04-large.png';

import TitleSection from '../TitleSection';
import Button from '../Button';

import Card from './Card';

import { Container, CarouselMobile, CarouselWeb } from './styles';

// Slider -> has problems with useState, when use setState broke the code

function HomeCourse() {
  return (
    <Container>
      <TitleSection title="Cursos" />

      <CarouselMobile>
        <Slider
          dots
          rows={1}
          wheel={true}
          duration={300}
          centerPadding={0}
          arrows={false}
          centerMode={false}
          slidesToShow={1}
        >
          <Card
            image={course}
            date="04 Abr - 05 Abr"
            title="Imersão Vinyasa Flow"
            teacher="Fernanda Cunha"
            time="2 dias de curso"
          />
          <Card
            image={course}
            date="04 Abr - 05 Abr"
            title="Imersão Vinyasa Flow"
            teacher="Fernanda Cunha"
            time="2 dias de curso"
          />
          <Card
            image={course}
            date="04 Abr - 05 Abr"
            title="Imersão Vinyasa Flow"
            teacher="Fernanda Cunha"
            time="2 dias de curso"
          />
        </Slider>
      </CarouselMobile>

      <CarouselWeb>
        <Slider
          dots
          rows={1}
          wheel={true}
          duration={300}
          centerPadding={0}
          arrows={false}
          centerMode={false}
          slidesToShow={3}
        >
          <Card
            image={course}
            date="04 Abr - 05 Abr"
            title="Imersão Vinyasa Flow"
            teacher="Fernanda Cunha"
            time="2 dias de curso"
          />
          <Card
            image={course}
            date="04 Abr - 05 Abr"
            title="Imersão Vinyasa Flow"
            teacher="Fernanda Cunha"
            time="2 dias de curso"
          />
          <Card
            image={course}
            date="04 Abr - 05 Abr"
            title="Imersão Vinyasa Flow"
            teacher="Fernanda Cunha"
            time="2 dias de curso"
          />
          <Card
            image={course}
            date="04 Abr - 05 Abr"
            title="Imersão Vinyasa Flow"
            teacher="Fernanda Cunha"
            time="2 dias de curso"
          />
        </Slider>
      </CarouselWeb>

      <Button link="/course" title="veja todos os cursos" />
    </Container>
  );
}

export default HomeCourse;
