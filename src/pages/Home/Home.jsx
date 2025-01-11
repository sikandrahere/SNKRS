import React from 'react'
import './Home.css'
import {hero1,hero2,FeaturedItems,FreshItems,DiscountBanner} from '../../components/index'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate();
    return (
        <div className='home'>

            {/* hero section -1  */}
            <div className='hero-section'>
                <div className='video-div'>
                    <video autoPlay loop muted src={hero1}></video>
                </div>
                <div className='text'>
                    <h1>S N K R S</h1>
                    <p>Explore the latest trends in sneakers</p>
                    <p>Step into imagination</p>
                    <button onClick={()=>navigate('/explore')}>Explore Now</button>
                </div>
            </div>

            {/* featured product  */}
            <FeaturedItems />

            {/* hero-section-2 */}

            <div className="hero-section-2">
                <div className="video-section-2">
                    <video src={hero2} autoPlay loop muted></video>
                </div>
                <div className="content-section">
                    <h1>"Ditch the discomfort, embrace professional sneakers "
                    </h1>
                    <button onClick={()=>navigate('/explore')} >Product Portal</button>
                </div>
            </div>

            {/* fresh product */}
            <FreshItems />

            {/* discount banner */}
            <DiscountBanner/>


        </div>
    )
}
export default Home