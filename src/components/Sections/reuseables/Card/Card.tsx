import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
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

const Card: React.FC<CardProps> = ({ gear, product}) => {
  const [loaded, setLoaded] = useState(false);

  const imgOnLoad: () => void = () => setLoaded(true);

  const className = `${gear ? 'gear' : ''} ${loaded ? 'loaded' : ''}`;

  return (
        <Style>
          <span>
            <figure>
              <span>
                <a href={product.imgLink} aria-label={product.imgAlt}>
                  <LazyLoad
                    debounce={false}
                    offsetVertical={300}
                  >
                    <>
                      {/** This is done for accessibility purpose */}
                      {!loaded && ' '}
                      <img
                        src={product.imgSrc}
                        alt={product.imgAlt}
                        className={className}
                        onLoad={imgOnLoad}
                      />
                    </>
                  </LazyLoad>
                </a>
              </span>
              <figcaption>{gear ? 'Gear' : product.tag}</figcaption>
            </figure>
            <div>
              <h2><a href={product.imgLink}>{product.topic}</a></h2>
              {gear ? <p>{product.price} | by <a href='#'>{product.by}</a></p> : <p>By <a href='#'>{product.by}</a></p>}
            </div>
          </span>
        </Style>
  );
};

export default Card;
