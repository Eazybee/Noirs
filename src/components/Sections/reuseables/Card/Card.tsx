import React from 'react'
import Style from './style.css';

export interface CardProps {
  product: {
    imgLink: string,
    imgSrc: string,
    imgAlt: string,
    tag?: string,
    topic: string,
    price?: string,
    by: string,
  },
  gear?: boolean,
};

const Card: React.FC<CardProps> = ({ gear, product}) => (
  <Style>
    <span>
      <figure>
        <span>
          <a href={product.imgLink}><img src={product.imgSrc} alt={product.imgAlt} /></a>
        </span>
        <figcaption>{gear ? 'Gear' : product.tag}</figcaption>
      </figure>
      <div>
        <h2><a href={product.imgLink}>{product.topic}</a></h2>
        {gear ? <p>{product.price} | by {product.by}</p> : <p>By <a href='#'>{product.by}</a></p>}
      </div>
    </span>
  </Style>
);

export default Card;
