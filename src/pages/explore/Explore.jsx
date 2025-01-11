import React from 'react'
import './Explore.css'
import {FeaturedItems} from '../../components/index' 
import explore from '../../components/assets/explore.jpg'

const Explore = () => {
  return (
    <div className='explore'>
        <div className='explore-image'>
            <img src={explore} alt=" explore" />
        </div>
        <div className='headline-section'>
            <h1>Step into the Extraordinary</h1>
            <h1>Explore our unique collection of sneakers</h1>
            <h1>Curated sneakers blending fashion and function</h1>
        </div>
        <FeaturedItems heading={"Explore Casual sneakers"}/>
        <FeaturedItems heading={"Explore Designer sneakers"}/>
        <FeaturedItems heading={"Explore Athletic sneakers"}/>
        <FeaturedItems heading={"Explore Canvas sneakers"}/>
        <FeaturedItems heading={"Explore High Top sneakers"}/>
    </div>
  )
}

export default Explore