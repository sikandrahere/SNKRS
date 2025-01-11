import React, { useContext, useEffect } from 'react'
import { productContext } from '../../context/ProductProvider'
import './CartItem.css'
import { categoryItems } from '../index'
import { Link } from 'react-router-dom'

const CartItems = () => {
  const { cartItems, addToCart, removeFromCart, selectedSize,totalItems } = useContext(productContext)

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("selectedSize", JSON.stringify(selectedSize));
  }, [selectedSize]);

  const hasItemsInCart = () => {
    for (let itemId in cartItems) {
      if (Object.values(cartItems[itemId]).some(quantity => quantity > 0)) {
        return true;
      }
    }
    return false;
  };
  const calculateTotalPrice = () => { let total = 0; categoryItems.forEach(item => { if (cartItems[item.id] && cartItems[item.id][selectedSize] > 0) { total += cartItems[item.id][selectedSize] * item.price; } }); return total; };
  
 

  return (
    <div className='cart-items-section'>
      <div className='cart-items'>
      {hasItemsInCart() ? (
        categoryItems.map((item) => {
          if (cartItems[item.id] && cartItems[item.id][selectedSize] > 0) {
            return (
              <div className='item-show' key={item.id} >

                <div className='item-container'>
                  <div to className='item-pic'>
                    <Link to={`/product/${item.id}`}><img  src={item.img} alt='shoe' /></Link>
                  </div>

                  <div className='item-info'>
                    <p className='product-name'>{item.name}</p>
                    <p>{item.type}</p>
                    <p>Size:{selectedSize}</p>
                  </div>

                  <div className='item-price'>
                    <p className='item-price'>MRP : ₹ {cartItems[item.id][selectedSize] * item.price}.00</p>
                  </div>
                </div>
                <div className='item-quantity-delete'>
                  <div className='item-quantity'>
                    <p>Quantity: {cartItems[item.id][selectedSize]}</p>
                  </div>

                  <div className='item-delete'>
                    <button onClick={() => removeFromCart(item.id, selectedSize)}>Remove</button>
                  </div>
                </div>

              </div>
              
            )
          }
          return null; // This ensures a fallback for map rendering
        })
      ) : (
        <div>
          <p>Cart is empty</p>
        </div>
      )}
      </div>
      <div className='total'>
      <div className='total-items'>
          <p>Total Items :</p>
          <p>{ totalItems()}</p>
        </div>
        <div className='total-price'>
          <p>Total Price :</p>
          <p>₹ {calculateTotalPrice()}.00</p>
        </div>
        <div className='checkout'>
          <button>Checkout</button>
        </div>

      </div>
    </div>
  )
}

export default CartItems;
