import React from 'react';
import Style from './style.css';

const Slide = () => (
  <Style>
    <span>
      <img src='src/assets/slide1.jpg' alt='welcome image'/>
    </span>
    <div>
      <h2>Travel Freely</h2>
      <form role='form'>
        <input type='search' placeholder='Search' required/>
        <button>Search</button>
      </form>
    </div>
  </Style>
)

export default Slide;
