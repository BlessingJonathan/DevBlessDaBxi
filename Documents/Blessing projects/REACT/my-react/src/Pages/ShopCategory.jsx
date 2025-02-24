import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
//import dropdown_button from '../components/Assets/dropdown_button'
import Items from '../components/Item/Items'
const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-5</span>out of 15 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src='' alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_products.map((items,i)=>{
          if (props.category===items.category){
            return<Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
          }
           else{
            return null;
           }
          
        })}
      </div>
      <div claassName='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory

