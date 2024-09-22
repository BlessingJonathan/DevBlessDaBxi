import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/WriteInk-logo.jpeg';
import cart_icon from '../Assets/cart icon.png';
import facebook from '../Assets/Facebook.png';
import instagram from '../Assets/Instagram.png';
import X from '../Assets/X.png'; // Assuming this is Twitter
import profile_icon from '../Assets/person icon.png';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [menu, setMenu] = useState('');
  const {getTotalCartItems}=useContext(ShopContext)

  return (
    <nav className="navbar">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={X} alt="Twitter" />
        </a>
      </div>
      
      <div className="nav-logo">
        <img src={logo} alt="TheWriteInkCo Logo" />
        <p>TheWriteInkCo</p>
      </div>

      <ul className="nav-menu">
        <li className={menu === 'Shop' ? 'active' : ''} onClick={() => setMenu('Shop')}>
          <Link to="/products">Shop</Link>
        </li>
        <li className={menu === 'Office' ? 'active' : ''} onClick={() => setMenu('Office')}>
          <Link to="/office">Office</Link>
        </li>
        <li className={menu === 'School' ? 'active' : ''} onClick={() => setMenu('School')}>
          <Link to="/school">School </Link>
        </li>
      </ul>

      <div className="nav-login-cart-profile">
        <Link>
        <img src={profile_icon} alt="Profile icon" />
        </Link>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/Basket">
          <img src={cart_icon} alt="Cart icon" />
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </Link>
      </div>

      <div className="search-input">
        <input type="text" placeholder="Search for products..." />
      </div>
    </nav>
  );
};

export default Navbar;
