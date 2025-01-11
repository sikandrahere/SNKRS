import React from 'react'
import { featuredProduct, Item } from '../index'
import './FeaturedItems.css'

const FeaturedItems = (props) => {
    return (
        <div className='featured-product'>
            <div className='featured-heading heading'>
                <h4>{props.heading? props.heading: "Featured"}</h4>
            </div>

            <div className='featured-items' onClick={props.onClick}>
                {featuredProduct.map((item) => {
                    return (
                        <Item
                            id={item.id}
                            key={item.id}
                            image={item.img}
                            name={item.name}
                            type={item.type}
                            text={"Buy Now"}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedItems