import styled from 'styled-components';
import { Interface } from 'readline';

interface Props {
  styles: {
    toggle: boolean,
    hidden: boolean,
    background: string;
  },
}

export default styled.header<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  padding: .5em  1em .4em 1em;
  overflow: hidden;
  transition: .5s linear;
  position: fixed;
  width: 100%;
  z-index: 2;

  background-color: ${({ styles }) => styles.background};
  ${({ styles }) => styles.background=== '#ffffff' ? 'box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.1)' : ''};

  ${({ styles }) => styles.toggle ? 'background-color: #ffffff' : ''}

  button {
    transform: rotate(90deg);
    color: #00BFAB;
    display: none;
    padding: .5em;
    line-height: 1em;
    height: 3em;
    font-weight: 500;
    text-align: center;
    background-color: #ffffff;
  }

  h1{
    color: #00BFAB;
  }

  ul{
    display: flex;
    flex-flow: row;
  }

  li{
    & > a{
      padding: .25em .4em;
      font-size: 1.1em;
      line-height: 1.5em;
      display: flex;
      flex-flow: column nowrap;
      text-transform: uppercase;

      &::after {
        content: '';
        display: block;
        background-color: transparent;
        height: .1em;
        transition: .3s;
        bottom: 0;
      }

      &:hover, &:focus{
        outline: none;
        &::after{
          background-color: #00BFAB;
        }
      }
    }
  }

  li:not(:first-child){
    margin-left: 1em;
  }

  @keyframes toggle {
    0%{
      height: 0;
    }
    100%{
      height: 12.5em;
    }
  }
  @media screen  and (max-width:768px){

    h1{
      padding-left: .2em;
    }

    button {
      display: block;
      font-size: 1.5em;
      border: .1px solid #00BFAB;

      ${({ styles }) => styles.toggle && `
        background-color: #00BFAB;
        color: white;
      `}
    }

    nav {
      transition: height .4s;
      overflow: hidden;

      ${({ styles }) => styles.toggle
        ?
          `visibility: visible;
           height: 12.5em;
           `
        :
          'height: 0;'
      }
      ${({ styles }) => styles.hidden ? 'visibility: hidden;'  : ''}

      width: 100%;

      ul{
        flex-flow: column nowrap;

        li{
          width: 100%;

          a{
            text-transform: none;
            line-height: 1.8em;

            &::after{
              display: none;
            }
            &:hover, &:focus {
              background-color: #fafafa;
            }
          }
        }
        li:not(:first-child){
          margin-left: 0;
        }
      }
    }
  }
`
