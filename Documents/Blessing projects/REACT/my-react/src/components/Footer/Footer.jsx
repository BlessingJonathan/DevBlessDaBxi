import React from 'react';
import './Footer.css';
import X from '../Assets/X.png';
import facebook_icon from '../Assets/Facebook.png';
import instagram_icon from '../Assets/Instagram.png';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <ul>
          <li>Contact Us</li>
          <li>Address:<p>16 Alberts Street, Newtown, Johannesburg, Gauteng, South Africa, 2113</p></li>
          <li>Phone:011 365 9831</li>
          <li>Email:<p>thewriteink@mweb.co.za</p></li>
          <li>Customer services
            <p>Reviews & ratings</p>
            <p>Product promotions</p>
          </li>
          <li><Link to='aboutUs'>About Us</Link>:
            <Link to='/terms-and-conditions'><p>Terms and conditions</p></Link>
            <Link to='/privacy-policy'><p>Privacy policy</p></Link>
          </li>
        </ul>
      </div>
      <div className='footer-social-icons'>
        <div className='footer-icons-container'>
          <img src={facebook_icon} alt='Facebook' />
        </div>
        <div className='footer-icons-container'>
          <img src={instagram_icon} alt='Instagram' />
        </div>
        <div className='footer-icons-container'>
          <img src={X} alt='X' />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

