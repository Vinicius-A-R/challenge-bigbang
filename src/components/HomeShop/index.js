import React from 'react';
import Slider from 'infinite-react-carousel';

// IMAGES
import shop1 from '../../assets/shop-1.png';
import shop2 from '../../assets/shop-2.png';
import shop3 from '../../assets/shop-3.png';
import shop4 from '../../assets/shop-4.png';

import TitleSection from '../TitleSection';
import ShopCard from '../ShopCard';
import Button from '../Button';

import { Container, Carousel } from './styles';

function HomeShop() {
  return (
    <Container>
      <TitleSection title="Namah Shop" />

      <Carousel>
        <Slider
          dots
          arrows={false}
          slidesToShow={2}
          slidesPerRow={2}
          shift={16}
        >
          <ShopCard image={shop1} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop2} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop3} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop4} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop1} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop2} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop3} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop4} title="Ovo de Páscoa de Paçoca" price={65} />
        </Slider>
      </Carousel>

      <Button link="/shop" title="veja todos os produtos" />
    </Container>
  );
}

export default HomeShop;
