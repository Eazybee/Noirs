import React, {
  useState,  useEffect, useRef,
} from 'react';
import _debounce from 'lodash.debounce';
import Style from './style.css';


interface State {
  toggle: boolean,
  hidden: boolean
  background: string,
};

const Header: React.FC = () => {
  const [styles, setStyles] = useState<State>({
    toggle: false,
    hidden: true,
    background: 'transparent',
  });

  const { toggle, background, hidden } = styles;

  useEffect(() => {
    //code credit https://hashnode.com/post/how-to-get-scroll-position-in-reactjs-to-add-class-or-style-on-the-whole-page-cj0i3io6100c04o53hsxyxtjb
    window.addEventListener('scroll', _debounce(() =>{
      const supportPageOffset = window.pageXOffset !== undefined;
      const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
      const scroll = {
         x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
         y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
      };

      if (scroll.y > 150) {
        setStyles({
          ...styles,
          background: '#ffffff',
        });
      } else {
        setStyles({
          ...styles,
          background: 'transparent',
        });
      }
    }, 15));
  }, []);

  const onCLick = () => {
    const newStyles:{
      toggle?: boolean,
      hidden?: boolean
      background?: string,
    } = {};
  
    if(toggle) {
      newStyles.background = 'transparent';
    } else{
      newStyles.hidden = toggle;
      newStyles.background= '#ffffff'
    }

    setStyles({
      ...styles,
      ...newStyles,
      toggle: !toggle,
    });
  };

  return (
    <Style styles={styles}>
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
