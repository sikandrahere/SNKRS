import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
      <div className='item'>
        <Link to={`/product/${props.id}`}>     
           <img  className={props.className} src={props.image} alt='shoe' />
        </Link>
        <p className='product-name'>{props.name}</p>
        <p>{props.type}</p>
        <p onClick={props.onClick}><Link to={`/product/${props.id}`}>{props.text}</Link></p>
      </div>
  )
}

export default Item