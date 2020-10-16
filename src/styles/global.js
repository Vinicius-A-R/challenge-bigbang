import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
	outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  min-height: 100%;
}

body {
  font-family: 'Roboto', -apple-system, system-ui, sans-serif;
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