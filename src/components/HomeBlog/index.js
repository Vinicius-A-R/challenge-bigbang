import React from 'react';

import TravelCard from '../TravelCard';
import NewsLetter from '../NewLetter';

import blog1 from '../../assets/blog-1.png';
import blog2 from '../../assets/blog-2.png';
import blog3 from '../../assets/blog-3.png';

import { CgArrowLongRight } from 'react-icons/cg';
import { Container, Section, Ads, Card, Button } from './styles';

const HomeBlog = () => (
  <Container>
    <Section>
      <div></div>
      <h1>Blog</h1>
    </Section>

    <TravelCard
      title="Lorem ipsum dolor sit amet. conseetetur adipiscing elit"
      type="VIAGEM"
      author="Fulano de Tal"
      image={blog1}
    />
    <TravelCard
      title="Lorem ipsum dolor sit amet. conseetetur adipiscing elit"
      type="VIAGEM"
      author="Fulano de Tal"
      image={blog2}
    />

    <Ads>
      <Card>
        <img src={blog3} alt="" />

        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>

        <span className="type">VIAGEM</span>

        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna...
        </span>
      </Card>

      <Card>
        <img src={blog3} alt="" />

        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>

        <span className="type">VIAGEM</span>

        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna...
        </span>
      </Card>
    </Ads>

    <NewsLetter />

    <Button>
      VEJA TODOS OS POSTS <CgArrowLongRight />
    </Button>
  </Container>
);

export default HomeBlog;
