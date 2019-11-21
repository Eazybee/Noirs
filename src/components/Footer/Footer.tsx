import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faInstagram, faTwitter, faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import Style from './style.css';


const Footer = () => {

  return (
    <Style>
      <section>
        <span>
          <div>
            <h1>Noirbnb</h1>
            <p>Noirbnb is an accommodations provider and experience curator created specifically to procure safe and stress-free travel for the African Diaspora.</p>
          </div>
          <div>
            <h1>Company</h1>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Shop</a></li>
              <li><a href='#'>Sponsored Stories</a></li>
              <li><a href='#'>Advertise With Us</a></li>
              <li><a href='#'>TOS</a></li>
              <li><a href='#'>Privacy</a></li>
              <li><a href='#'>Subscribe</a></li>
            </ul>
          </div>
          <div>
            <h1>Follow Us</h1>
            <ul className='icons'>
              <li><a href='#' className='instagram' aria-label='instagram'><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href='#' className='facebook' aria-label='facebook'><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href='#' className='twitter' aria-label='twitter'><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href='#' className='linkedin' aria-label='linkedin'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            </ul>
          </div>
          <div>
            <h1>Support</h1>
            <ul>
              <li><a href='#'>Help</a></li>
              <li><a href='#'>FAQs</a></li>
              <li><a href='#'>Policies</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Contact Us</a></li>
            </ul>
          </div>
        </span>
      </section>
      <div>&#169; Designed by Bee Technology, 2019</div>
    </Style>
  );
};

export default Footer;
