import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --font-title: 'DM Serif Text', serif;
  --color-gradient: linear-gradient(
      to bottom,
      rgba(76, 76, 76, 0) 0%,
      rgba(15, 15, 15, 0.88) 80%,
      rgba(0, 0, 0, 0.88) 100%
    );
}

*{
  margin: 0;
  padding: 0;
	outline: 0;
  box-sizing: border-box;
}


body {
  margin: 0 auto;
  
  font-family: 'Roboto', sans-serif;
	-webkit-font-smoothing: antialiased;
}

button {
  border: 0;
  background: none;
  cursor: pointer;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
  padding-left: 0;
}
`;
