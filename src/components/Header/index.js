import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';

import { Container, Menu } from './styles';
import { VscAccount, VscHeart, VscThreeBars } from 'react-icons/vsc';

function Header() {
  return (
    <Container>
      <Logo className="logo" />

      <Menu>
        <VscAccount />
        <VscHeart />
        <Cart className="cart" />
        <VscThreeBars />
      </Menu>
    </Container>
  );
}

export default Header;
