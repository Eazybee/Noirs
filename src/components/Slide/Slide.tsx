import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import Style from './style.css';

const Slide = () => {
  const [loaded, setLoaded] = useState(false);
  const imgOnLoad: () => void = () => setLoaded(true);
  const className = `${loaded ? 'loaded' : ''}`;

  return (
    <Style>
      <LazyLoad
        debounce={false}
        offsetVertical={300}
      >
        <img src='src/assets/slide1.jpg' alt='welcome image' onLoad={imgOnLoad} className={className}/>
      </LazyLoad>
      <div>
        <label htmlFor='search'>Travel.Freely.</label>
        <form role='form'>
          <input type='search' id='search' placeholder='Search' required/>
          <button>Search</button>
        </form>
      </div>
    </Style>
  );
};

export default Slide;
