import React from 'react'
import './DiscountBanner.css'
import { useNavigate } from 'react-router-dom'

const DiscountBanner = () => {
  const navigate=useNavigate()
  return (
    <div className="discount">
    <h1>UP TO 30% OFF ON FIRST ORDER</h1>
    <button onClick={()=>navigate('/login')} className="register-now">Register Now </button>
</div>
  )
}

export default DiscountBanner