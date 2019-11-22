import styled from 'styled-components';


export default styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:first-child{
    height: 100%;

    img{
      width: 100%;
      height: 100vh;
      object-fit: cover;
      object-position: center;
    }

    &::after{
      content: " ";
      position: absolute;
      height: 100%;
      left: 0;
      right: 0;
    }
  }

  & > div:last-child{
    position: absolute;
    margin: 0 auto;
    text-align: center;
    width: 70%;

    label{
      color: #ffffff;
      font-size: 3em;
      text-transform: uppercase;
      font-weight: 500;
      text-shadow: 0 0 5px rgba(0,0,0,1);
    }

    & form{
      input{
        display: block;
        width: 100%;
        margin-bottom: .7em;
        line-height: 1em;
        padding: .6em ;
        font-size: 1.2em;
        border-radius: 4px;
        box-shadow: 0 0 5px rgba(0,0,0,1);
      }
    }

    @media screen  and (max-width:768px){
      label{
        font-size: 1.5em;
      }
    }

    @media screen  and (max-width:320px){
      width: 90%;
    }
  }

`
