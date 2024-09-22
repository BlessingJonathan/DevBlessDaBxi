import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import office from '../Assets/Office-Supplies.jpg';
import brands from '../Assets/Brands.png';
import school from '../Assets/School-Stationery.jpg';
import logo from '../Assets/WriteInk-logo.jpeg'
const Items = () => {
  return (
    <div className='item-container'>

     <div className='item'>
        <p className='logo-name'>The WriteInkCo</p>
        <div className='itemImage'>
        <img src={logo} alt='Custom'/>
        </div>
      </div>
      <div className='item'>
        <Link to='/office' className='item-link'>
        <p>Office Supplies</p>
        </Link>
        
        <div className='itemImage'>
          <Link to='/office'><img src={office} alt='Office Supplies'/></Link>
        </div>
      </div>
     
      <div className='item'>
        <p>Featured Brands</p>
        <div className='itemImage'>
          <img  src={brands} alt='Brands'/>
        </div>
      </div>

      <div className='item'>
      <Link to='/school'>
        <p>School Stationery</p></Link>
        <div className='itemImage'>
        <img src={school} alt='School Supplies'/>
          
        </div>
      </div>
      
      
    </div>
  );
};

export default Items;
