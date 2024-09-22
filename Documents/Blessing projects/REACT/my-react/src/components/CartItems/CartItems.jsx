import React from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate from react-router-dom

const CartItems = () => {
    const { getTotalCartAmount, products_data, cartItems, removeFromCart } = useContext(ShopContext);
    const navigate = useNavigate(); // Initialize the navigate function

    const handleBackToShopping = () => {
        navigate('/products'); // Navigate to the /products page
    };

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {products_data.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={product.image} alt={product.name} className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>R{product.new_price.toFixed(2)}</p>
                                <p>{cartItems[product.id]}</p> {/* Display the quantity */}
                                <p>R{(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                <img
                                    className='cartitems-remove-icon'
                                    src='/path/to/remove-icon.png' // Add the path to your remove icon
                                    onClick={() => { removeFromCart(product.id); }}
                                    alt='Remove'
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>R{getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Delivery Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>R{getTotalCartAmount().toFixed(2)}</h3>
                        </div>
                    </div>
                    <Link to='/'><button>Proceed To Check-Out</button></Link>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have confirmed payment click submit</p>
                    <div className='cartitems-promobox'>
                        
                        <Link to='/'><button>Submit</button></Link>
                    </div>
                </div>
                <button onClick={handleBackToShopping} className='back-to-shopping-button'>
                    Back to Shopping
                </button>
            </div>
        </div>
    );
};

export default CartItems;
