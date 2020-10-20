import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Cart } from '../../../assets/cart.svg';

import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { IoIosLogOut } from 'react-icons/io';
import { Container, Links, Icons } from './styles';

function MenuWeb({ Logo }) {
  return (
    <Container>
      <Links>
        <Link to="/">Inicio</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Loja</Link>
        <Link to="/">Podcast</Link>
        <Link to="/">Cursos</Link>
        <Link to="/">Contato</Link>
      </Links>

      <Link to="/">
        <Logo className="logo" />
      </Link>

      <Icons>
        <FaSearch />
        <VscAccount />
        <FaRegHeart />
        <Cart className="cart" />
        <IoIosLogOut />
      </Icons>
    </Container>
  );
}

export default MenuWeb;
