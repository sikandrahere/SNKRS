import React from 'react'

const BreadCrumb = (props) => {
    const {product} = props
  return (
    <div>
        <p>Home / {product.category} / {product.name}</p>
    </div>
  )
}

export default BreadCrumb