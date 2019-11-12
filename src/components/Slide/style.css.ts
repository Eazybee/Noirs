import styled,  {StyledFunction} from 'styled-components';


export default styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
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

  & > div{
    position: absolute;
    margin: 0 auto;
    text-align: center;
    width: 70%;

    h2{
      color: #ffffff;
      font-size: 3em;
      text-transform: uppercase;
      font-weight: 500;
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
    }
  }

  @media screen  and (max-width:768px){
    & > div{
      h2{ font-size: 1.5em;
      }
    }
  }

  @media screen  and (max-width:320px){
    & > div{
      width: 90%;
    }
  }
`
