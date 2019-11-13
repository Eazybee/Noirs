import React from 'react'
import Style from './style.css';
import Card, {CardProps} from '../Card/Card';


export interface CardListProps {
  cards: CardProps[];
};

const CardList: React.FC<CardListProps>  = ({ cards }) =>  (
  <Style>
    {cards.map((card, ind) => <Card key={ind} {...card}/>)}
  </Style>
);

export default CardList;
