import React from 'react'
import './ProductCategory.css'
import { categoryItems, Item, FreshItems, FeaturedItems, DiscountBanner } from '../../components/index'
import { useNavigate } from 'react-router-dom'


const ProductCategory = (props) => {
  
  return (
    <div className='product-category'>
      {/* video section */}
      <div className='video-section'>
        <video autoPlay loop muted src={props.video}></video>
      </div>

      {/* text section */}
      <div className='text-section'>
        <h1>THE SNKRS {(props.category.toUpperCase())} COLLECTION</h1>
        <p>Step into imagination</p>
        <button onClick={() => navigate('/explore')}>Explore Now</button>
      </div>

      {/* treding section */}
      <div className='trending-section'>
        <div className='heading'>
          <h4>Trending in {props.category}</h4>
        </div>
        <div className='treding-items'>
          {categoryItems.map((item) => {
            if (item.category === props.category) {
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
            }
          })}
        </div>
      </div>

      {/* fresh product */}

      <FreshItems />

      {/* banner -section */}
      <div className='banner-section'>
        <img src={props.banner} alt='banner' />
      </div>


      {/*featured - section */}
      <FeaturedItems />

      {/* discount section */}

      <DiscountBanner />
    </div>
  )
}

export default ProductCategory