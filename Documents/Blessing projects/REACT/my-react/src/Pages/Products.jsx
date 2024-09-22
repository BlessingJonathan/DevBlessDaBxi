import  React,{ useContext } from 'react';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import './Products.css'
//import { ShopProvider } from '../Context/ShopContext';  
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import CustomSeparator from '../components/Breadcrum/Breadcrum';
import BasicRating from '../components/Ratings/Ratings';

const Products = () => {
  const {products_data}=useContext(ShopContext);
  const {productId}=useParams();
  const product = products_data.find((e)=>e.id===Number(productId))
  return (
  
    
    <div>
      <CustomSeparator/>
        <h1>Product Display</h1>
        <ProductDisplay />
        <BasicRating/>
    </div>

 
    

  )
}

export default Products
