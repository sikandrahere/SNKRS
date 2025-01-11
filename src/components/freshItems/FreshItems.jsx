import React from 'react'
import './FreshItems.css'
import { freshItems, Item } from '../index'

const FreshItems = () => {
    return (
        <div className='fresh-product
                '>
            <div className='fresh-item-heading heading'>
                <h4>FRESH</h4>
            </div>
            <div className='fresh-items'>
                {freshItems.map((item) => {
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

export default FreshItems