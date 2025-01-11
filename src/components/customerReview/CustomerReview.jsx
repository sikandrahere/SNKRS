import React from 'react'
import {Item} from '../index'
import './CustomerReview.css'

const CustomerReview = (props) => {
    const { product } = props
  return (
    <div className='customer-review'>
        <h1>Customer Reviews</h1>
        <div className='customer-review-items'>
        {Array(6).fill().map((_, index) => (
            <Item
                key={index}
                id={index}
                image={product.img}
            />
          ))}
        </div>
    </div>
  )
}

export default CustomerReview