import React from 'react';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { Container, Info, ButtonLink } from './styles';

function Card({ image, date, title, teacher, time }) {
  return (
    <Container>
      <img src={image} alt="course" />

      <Info>
        <span className="date">{date}</span>

        <h1>{title}</h1>

        <span>Por {teacher}</span>
        <span>{time}</span>
      </Info>

      <ButtonLink>
        <FaLongArrowAltRight />
      </ButtonLink>
    </Container>
  );
}

export default Card;
