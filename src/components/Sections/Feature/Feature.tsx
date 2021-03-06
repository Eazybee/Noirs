import React from 'react';
import styled from 'styled-components';
import Title from '../reuseables/Title/Title';
import CardList from '../reuseables/CardList/CardList';
import {CardProps} from '../reuseables/Card/Card';

export interface FeatureProps {
  cards: CardProps[],
  title: string,
};

const Style = styled.section`
  padding: 5em 0;
`;

const Feature: React.FC<FeatureProps> = ({ cards, title }) => (
  <Style>
    <Title>{title}</Title>
    <CardList cards={cards}/>
  </Style>
)




export default Feature;
