import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --font-title: 'DM Serif Text', serif;
  --font-size-small: 0.5rem; // 8px
  --font-size-small-m: 0.75rem; // 12px
  --font-size-medium: 1rem; //16px
  --font-size-medium-m: 1.125rem; //18px
  --font-size-medium-l: 1.375rem; //22px
  --font-size-large: 1.5rem; //24px
  --font-size-large-m: 2rem; //32px
  --font-size-large-l: 3rem; //48px
  --font-size-large-xl: 4rem; //64px
  
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
