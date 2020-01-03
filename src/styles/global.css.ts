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
  outline-width: 5px;
}

html {
  scroll-behavior: smooth;
}

body {
  font-size: 16px;
  /* padding: 0 12%; */
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

button{
  padding: .9em 2.1em;
  font-size: .9em;
  text-transform: uppercase;
  background: linear-gradient(0deg, rgba(30,113,124,1) 0%, rgba(0,191,171,1) 100%);
  color: #ffffff;
  font-weight: 500;
  border-radius: 5px;
  opacity: .9;
  transition: .2s linear;
  cursor: pointer;

  &:hover, &:focus{
    opacity: 1;
  }

  &:active{
    background: linear-gradient(180deg, rgba(30,113,124,1) 0%, rgba(0,191,171,1) 100%);
  }
}

.LazyLoad{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
  overflow: hidden;

  img{
    opacity: 0;
  }

  img.loaded{
    animation: fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-duration: 0.7s;
    animation-delay: 0.1s;
  }
}

@media screen  and (max-width:768px){
  body{
    font-size: 14px;
  }
}
`
