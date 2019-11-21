import styled from 'styled-components';

export default styled.div`
  padding: 0 1em 3em 1em;
  background-color: #ffffff;
  width: 25em;


  &>span{
    width: 100%;
    box-shadow: 4px 3px 16px rgba(35, 31, 32, 0.15);
    display: block;

    &:hover, span a:focus{
      img{
        transform: scale(1.1);
      }
    }



    figure{
      overflow: hidden;
      span{
        overflow: hidden;
        display: block;
        height: 15.6em;
        a{
          height: 15.6em;
          display: block;
          overflow: hidden;
          width: 100%;

          &:focus{
            border: 3px #d9c05d solid;
          }
        }
      }

      img{
        transition: .3s;
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;

        &.gear{
          object-fit: contain;
        }
      }

      figcaption{
        padding: .5em 1em;
        box-shadow: 0px 10px 16px rgba(35, 31, 32, 0.15);
        position: relative;
        bottom: 1.1em;
        left: 1em;
        color: #006156;
        background: #ffffff;
        display: inline-block;
        border-radius: 5px;
      }

    }

    & > div{
      padding: 0 1em 2em 1em;

      h2 {
        font-size: 1.5em;
        padding: .5em 0;
      }

      p, p *{
        color: #595959;
      }

      p{
        padding: .5em 0;

        a{
          margin-left: .5em;
        }
      }

      a{
        transition: color .2s;
        &:hover{
          color: #00BFAB;
        }
      }
    }
  }

  @keyframes fadeInImg {
    from { opacity: 0; }
    to { opacity: 1; }
  }


  @media screen  and (max-width:720px){
    width: 80vw;
  }

  @media screen  and (max-width:400px){
    padding: 0 .4em 3em .4em;
    width: 100%;
  }
`;
