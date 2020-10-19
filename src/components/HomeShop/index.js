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

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Container, CarouselMobile, CarouselWeb } from './styles';

// Slider -> has problems with useState, when use setState broke the code

function HomeShop() {
  return (
    <Container>
      <TitleSection title="Namah Shop" />

      <CarouselMobile>
        <Slider dots rows={2} arrows={false} slidesToShow={2} shift={8}>
          <ShopCard image={shop1} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop2} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop3} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop4} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop1} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop2} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop3} title="Ovo de Páscoa de Paçoca" price={65} />
          <ShopCard image={shop4} title="Ovo de Páscoa de Paçoca" price={65} />
        </Slider>
      </CarouselMobile>

      <CarouselWeb>
        <Slider
          dots
          prevArrow={
            <FaArrowAltCircleLeft color={'var(--color-green)'} size={20} />
          }
          nextArrow={
            <FaArrowAltCircleRight color={'var(--color-green)'} size={20} />
          }
          rows={1}
          wheel={true}
          duration={300}
          arrows={true}
          centerMode={true}
          slidesToShow={3}
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
      </CarouselWeb>

      <Button link="/shop" title="veja todos os produtos" />
    </Container>
  );
}

export default HomeShop;
