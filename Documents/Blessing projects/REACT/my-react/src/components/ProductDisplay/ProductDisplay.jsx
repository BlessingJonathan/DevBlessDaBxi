import React from 'react';
import products_data from '../Assets/Data';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom'; 
import {useContext} from 'react'
const ProductDisplay = () => {
    const { addToCart } = useContext(ShopContext);
    const navigate = useNavigate(); 

    const handleAddToCart = (product) => {
        addToCart(product.id); 
        alert(`${product.name} added to cart!`); 
        navigate('/basket'); 
    };

    return (
        <div style={styles.container}>
            {products_data.map(product => (
                <div key={product.id} style={styles.card}>
                    <img src={product.image} alt={product.name} style={styles.image} />
                    <h2 style={styles.name}>{product.name}</h2>
                    <p style={styles.price}>R{product.new_price.toFixed(2)} <span style={styles.oldPrice}>R{product.old_price.toFixed(2)}</span></p>
                    <button onClick={() => handleAddToCart(product)} style={styles.button}>Add to Cart</button>
                </div>
            ))}
            <div>
                <button></button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '20px',
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        width: '200px',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
    },
    name: {
        fontSize: '16px',
        margin: '10px 0',
    },
    price: {
        fontSize: '18px',
        color: '#333',
    },
    oldPrice: {
        textDecoration: 'line-through',
        color: '#999',
    },
    button: {
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ProductDisplay;
