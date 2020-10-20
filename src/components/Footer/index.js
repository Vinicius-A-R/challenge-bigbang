import React from 'react';
import { Link } from 'react-router-dom';

// IMPORT SVG

import { ReactComponent as Logo } from '../../assets/logo-large.svg';

import NewsLetterInput from '../NewsLetterInput';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcDinersClub,
  FaCcAmex,
  FaBarcode,
  FaLock,
  FaRegCopyright,
} from 'react-icons/fa';
import {
  Container,
  Content,
  Media,
  Input,
  Links,
  Payments,
  Security,
  Copyright,
} from './styles';

function Footer() {
  return (
    <Container>
      {/* <FooterMobile /> */}
      <Content>
        <Input>
          <NewsLetterInput className="footer" />
        </Input>

        <Media>
          <Logo />

          <div>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
        </Media>

        <Links>
          <div>
            <h3>Institucional</h3>
            <Link to="/">Sobre nós</Link>
            <Link to="/">Contato</Link>
          </div>
          <div>
            <h3>Loja</h3>
            <Link to="/">Cadastre-se</Link>
            <Link to="/">Área do lojista</Link>
          </div>
          <div>
            <h3>Atendimento</h3>
            <span>hello@espaconamah.com.br</span>
            <span>(31) 2515 6200</span>
          </div>
        </Links>

        <Payments>
          <span>
            Formas de pagamento :
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcDinersClub />
            <FaCcAmex />
            <FaBarcode />
          </span>
        </Payments>

        <Security>
          <div className="created">
            <FaLock />
            <span>Site seguro</span>

            <span>Site por BIG BANG SHOP</span>
          </div>

          <div className="rules">
            <Link to="/faq">Dúvidas Frequentes</Link>|
            <Link to="/rules">Políticas da Loja</Link>
          </div>
        </Security>

        <Copyright>
          <span>
            <FaRegCopyright /> 2020 Espaço Namah. Todo os direitos reservados.
          </span>
          <span>CNPJ: 19.035.854/0001-31.</span>
        </Copyright>
      </Content>
    </Container>
  );
}

export default Footer;
