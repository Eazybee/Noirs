import styled from 'styled-components';

export default styled.section`
  width: 100%;
  background-image: url('src/assets/newsletter.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 5em 0;

  span{
    width: 80%;
    display: block;
    background-color: #ffffff;
    border: 1.5em solid #21DCBA;
    padding: 1em;
    text-align: center;

    h1{
      font-size: 1.5em;
    }

    p{
      margin: 1em 0;
    }

    form, form label{
      display: flex;
      flex-flow: column;
    }

    form {
      margin-top: 3em;

      label{
        text-align: left;

        input{
          margin: 1em 0 0 0;
          font-size: 1em;
          padding: .8em 1em;
          border: 1px solid #21DCBA;
          border-radius: 5px;

          &.error{
            border-color: red;
            outline-color: red;
          }
        }
        p{
          color: red;
          font-size: .8em;
          position: relative;
          top: -0.8em;
        }
      }

      button{
        width: 15em;
        margin: 1em  auto 0 auto;
      }
    }

    @media screen  and (max-width:768px){
      width: 90%;
    }

    @media screen  and (max-width:425px){
      width: 95%;

      form{
        label{
          text-align: center;
        }
      }
    }
  }
`;
