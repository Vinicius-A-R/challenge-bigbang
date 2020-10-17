import React, { useState } from 'react';

import { Container, Input, Footer } from './styles';

function NewLetter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    setEmail('');
  };

  return (
    <Container>
      <h1>Namah no seu e-mail</h1>
      <span>Assine nossa newsletter</span>

      <Input onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <button type="submit">Assinar</button>
      </Input>

      <Footer>
        <span>
          Ao clicar em "assinar", você concorda em receber e-mails do Espaço
          Namah a aceita nossos. Termos de Uso e nossas Políticas de
          Privacidade.
        </span>
      </Footer>
    </Container>
  );
}

export default NewLetter;
