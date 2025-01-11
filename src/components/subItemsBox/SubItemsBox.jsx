import React, { useContext } from 'react'
import './SubItemsBox.css'
import { productContext } from '../../context/ProductProvider'
import {Item} from '../index'

const SubItemsBox = () => {
    const {filteredItems}=useContext(productContext)
  return (
    <div className='sub-items'>
        <div className='sub-items-list'>
        {filteredItems.length > 0 ?(
            filteredItems.map((item) => {
                return (
                    <div key={item.id}>
                        <Item 
                        id={item.id}
                        key={item.id}
                        image={item.img}
                        name={item.name}
                        />
                    </div>
                )
            })
        ):null}
        </div>
    </div>
  )
}

export default SubItemsBox