import React, { useContext } from 'react'
import './ProductDisplay.css'
import { productContext } from '../../context/ProductProvider'

const ProductDisplay = (props) => {

  const product = props.product
  const { addToCart, selectedSize, setSelectedSize, addToFavourite } = useContext(productContext)
  return (
    <div className="product-display">
      <div className='pics-section'>
        <div className="side-pics">
          {Array(6).fill().map((_, index) => (
            <img key={index} src={product.img} alt="product" />
          ))}
        </div>

        <div className="main-pic">
          <img src={product.img} alt="product" />
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.type}</p>
        <h3>MRP : ₹ {product.price}.00</h3>
        <p>(incl. all taxes)</p>

        <div className='select-size'>
          <p>SELECT SIZE</p>
          <div className='size'>
            {[5, 6, 7, 8, 9].map((size, index) => (
              <div key={index} onClick={() => setSelectedSize(size)} className={selectedSize === size ? 'active' : ''}>
                <p>{size}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-button">
          <button onClick={() => { addToCart(product.id, selectedSize) }}>Add to cart</button>
          <button onClick={() => { addToFavourite(product.id) }}>Add to favorite</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay