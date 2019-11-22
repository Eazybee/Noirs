import styled from 'styled-components';


export default styled.footer`
  & *{
    color: #ffffff;
  }

  section{
    background-color: #222222;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    padding: 4em 0;
    width: 100%;

    & > span{
      width: 80vw;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      div{
        max-width: 25%;

        h1{
          margin-bottom: 1em;
          font-size: 1.2em;
          text-transform: uppercase;
        }

        &:first-child h1{
          color: #00BFAB;
        }

        p{
          max-width: 25em;
          font-size: 1em;
        }

        ul{
          width: 100%;

          li{
            margin: .5em 0;
            a{
              font-size: .85em;
              color: #ffffff;
              transition: color .5s linear;

              &:hover,  &:focus{
                color: #00BFAB
              }
            }
          }

          &.icons{
            display: flex;
            flex-flow: row nowrap;

            li{
              &:not(:first-child){
                margin-left: .5em;
              }
              a{
                width: 2.5em;
                height: 2.5em;
                display: block;
                background-color: #ffffff;
                background: #ffffff;
                padding: .5em;
                border-radius: 5px;
                transition: .2s ;

                svg, svg *{
                  width: 100%;
                  height: 100%;
                  path{
                    color: #222222;
                    transition: .2s;
                  }
                }

                &:hover, &:focus{
                  path{
                    color: #ffffff
                  }
                }
                &.facebook:hover,  &.facebook:focus {
                  background-color: #3B5998;

                }

                &.twitter:hover, &.twitter:focus{
                  background-color: #00aced;
                }

                &.instagram:hover, &.instagram:focus{
                  background-color: #FF8C00;
                  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%, #285AEB 90%);
                }

                &.linkedin:hover, &.linkedin:focus{
                  background-color: #0077B5;
                }
              }
            }
          }
        }
      }


      @media screen  and (max-width:768px){
        div{
          max-width: 50%;
          min-width: 50%;
          padding-bottom: 1.2em;

          p{
            width:80%;
          }
        }
      }

      @media screen  and (max-width:581px){
        div{
          max-width: 100%;
          min-width: 100%;

          p{
            width:100%;
          }

        }
      }
    }
  }

  & > div{
    background-color: #000000;
    text-align: center;
    padding: 1em;
    font-weight: bold;
    font-size: 1.1em;
  }
`;


