import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Cart } from '../../../assets/cart.svg';

import { VscAccount, VscHeart, VscThreeBars, VscClose } from 'react-icons/vsc';
import { Container, Menu, Toggle } from './styles';

export default function MenuMobile({ Logo }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <VscAccount />
      <VscHeart />
      <Cart className="cart" />

      <Toggle onClick={handleToggle}>
        {toggle ? <VscClose /> : <VscThreeBars />}
      </Toggle>

      <Menu hidden={toggle}>
        <Link to="/">Inicio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/shop">Loja</Link>
        <Link to="/podcast">Podcast</Link>
        <Link to="/course">Cursos</Link>
        <Link to="/contact">Contato</Link>
      </Menu>
    </Container>
  );
}
