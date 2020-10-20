import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import MenuMobile from './MenuMobile';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo className="logo" />
      </Link>

      <MenuMobile />
    </Container>
  );
}

export default Header;
