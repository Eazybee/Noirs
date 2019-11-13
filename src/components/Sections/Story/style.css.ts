import styled from 'styled-components';

export default styled.section`
  padding: 3em 0;
  display: flex;
  flex-flow: column;
  align-items: center;

  p{
    width: 80%;
    text-align: center;
    padding: 0 1em 1em  1em;
    line-height: 1.5em;
    letter-spacing: 1px;
    color: #606363;
    font-size: 1.1em;

    @media screen  and (max-width:720px){
      width: 80vw;
      font-size: 1.1em;
    }

    @media screen  and (max-width:400px){
      padding: 0 .4em 2em .4em;
      width: 100%;
    }
  }

  span{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 80%;
    padding: 0 1em;

    button:last-child{
      margin-left: 1em;
    }
    @media screen  and (max-width:575px){
        flex-direction: column;
        width: 25em;

        button:last-child{
          margin: 1em 0 0 0;
        }
    }

    @media screen  and (max-width:348px){
      width: 100%
    }
  }

`;
