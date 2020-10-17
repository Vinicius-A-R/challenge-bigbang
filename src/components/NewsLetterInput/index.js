import React, { useState } from 'react';

import { Container, Input } from './styles';

function NewsLetterInput() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    setEmail('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h1>Assine nossa newsletter</h1>

      <Input>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu endereço de e-mail"
        />

        <button type="submit">Assinar</button>
      </Input>
    </Container>
  );
}

export default NewsLetterInput;
