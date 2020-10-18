import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';

import { Container, Menu } from './styles';
import { VscAccount, VscHeart, VscThreeBars } from 'react-icons/vsc';

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo className="logo" />
      </Link>

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
