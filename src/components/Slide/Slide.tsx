import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import Style from './style.css';
import Story from '../Sections/Story/Story';
import { BecomeAHost } from '../Sections/data';

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
        <img src='https://raw.githubusercontent.com/Eazybee/Bee-Technology/master/resources/img/slider.jpg' alt='welcome image' onLoad={imgOnLoad} className={className}/>
      </LazyLoad>
      <div>
        <Story {...BecomeAHost} />
      </div>
    </Style>
  );
};

export default Slide;
