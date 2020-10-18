import React from 'react';

import course from '../../assets/cursos-04-large.png';

import TitleSection from '../TitleSection';
import Button from '../Button';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { Container, Card, Info, ButtonLink } from './styles';

function HomeCourse() {
  return (
    <Container>
      <TitleSection title="Cursos" />

      <Card>
        <img src={course} alt="course" />

        <Info>
          <span className="date">04 Abr - 05 Abr</span>

          <h1>Imersão Vinyasa Flow</h1>

          <span>Por Fernanda Cunha</span>
          <span>2 dias de curso</span>
        </Info>

        <ButtonLink>
          <FaLongArrowAltRight />
        </ButtonLink>
      </Card>

      <Button title="veja todos os cursos" />
    </Container>
  );
}

export default HomeCourse;
