import React, { useState, FunctionComponent } from 'react';
import Style from './style.css';


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [hidden , setHidden] = useState(true);
  
  const onCLick = () => {
    if(toggle) {
      setTimeout(() => {
        setHidden(!toggle)
      }, 200);
    }else{
      setHidden(toggle);
    }
    setToggle(!toggle)
  };

  return (
    <Style toggle={toggle} hidden={hidden} >
      <h1>Noirs</h1>
      <button role='icon' arial-label='show menu' onClick={onCLick}>|||</button>
      <nav>
        <ul>
          <li ><a href='#' >Become A Host</a></li>
          <li><a href='#' >Stories</a></li>
          <li><a href='#' >Help</a></li>
          <li><a href='#' >Signup</a></li>
          <li><a href='#' >Login</a></li>
        </ul>
      </nav>
    </Style>
  );
}


export default Header;
