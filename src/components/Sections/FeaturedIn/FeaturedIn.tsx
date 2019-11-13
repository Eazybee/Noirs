import React from 'react';
import styled from 'styled-components';
import Title from '../reuseables/Title/Title';
import ImageList from '../reuseables/ImageList/ImageList';

export interface FeaturedInProps {
  data: {
    src: string,
    title: string,
  }[],
  title: string,
};

const Style = styled.section`
  padding: 5em 0;
`;

const FeaturedIn: React.FC<FeaturedInProps> = ({ data, title }) => (
  <Style>
    <Title>{title}</Title>
    <ImageList data={data}/>
  </Style>
)

export default FeaturedIn;
