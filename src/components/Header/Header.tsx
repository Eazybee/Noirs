import React, {
  useState,  useEffect, useRef,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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

      if (scroll.y > 250 && styles.background !== '#ffffff') {
        setStyles({
          ...styles,
          background: '#ffffff',
        });
      }

      if (scroll.y <=  250) {
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
      <h1>exclusiveResults</h1>
      <button
        arial-label={toggle ? 'close menu' :'show menu'}
        title={toggle ? 'close menu' :'show menu'}
        onClick={onCLick}
      >
        <FontAwesomeIcon icon={toggle ? faTimes : faBars} />
      </button>
      <nav>
        <ul>
          <li ><a href='#service' >Services</a></li>
          <li><a href='#stories' >Stories</a></li>
          <li><a href='#partners' >Partners</a></li>
          <li><a href='#newsletter' >Contact</a></li>
        </ul>
      </nav>
    </Style>
  );
}


export default Header;
