import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
*, ::after, ::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  list-style:none;
  color: #000000;
}

body {
  font-size: 16px;
  /* padding: 0 12%; */
  font-family: Helvetica Neue, Arial, sans-serif;
}

@media screen  and (max-width:768px){
  body{
    font-size: 14px;
  }
}
`
