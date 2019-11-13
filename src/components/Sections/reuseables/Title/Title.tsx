import React from 'react';
import styled from 'styled-components';

interface Props {
  children: string|number,
}


const Style = styled.h2`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2.3em;
  text-transform: uppercase;
  padding: .4em 0;

  &::after{
    content: ' ';
    width: 1.5em;
    height: 6px;
    border-top: 1px solid #00BFAB;
    border-bottom: 1px solid #00BFAB;
    transform: skew(70deg, 0deg);
    margin-top: .2em;
  }

  @media screen  and (max-width:768px){
    font-size: 1.5em;
  }
`;


const Title:React.FC<Props> = ({children}) => <Style>{children}</Style>
export default Title
