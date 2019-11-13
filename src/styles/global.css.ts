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
  outline-color: #d9c05d;
}

body {
  font-size: 16px;
  /* padding: 0 12%; */
  font-family: Helvetica Neue, Arial, sans-serif;
}

button{
        padding: .9em 2.1em;
        font-size: .9em;
        text-transform: uppercase;
        background-color: #00BFAB;
        color: #ffffff;
        font-weight: 500;
        border-radius: 5px;
        opacity: .9;
        transition: .2s linear;
        cursor: pointer;

        &:hover, &:focus{
          background-color: #00BFAB;
          opacity: 1;
        }
      }

@media screen  and (max-width:768px){
  body{
    font-size: 14px;
  }
}
`
