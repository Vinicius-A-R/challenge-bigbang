import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import MenuMobile from './MenuMobile';
import MenuWeb from './MenuWeb';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <MenuWeb Logo={Logo} />

      <MenuMobile Logo={Logo} />
    </Container>
  );
}

export default Header;
