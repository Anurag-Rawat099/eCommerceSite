import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
function Footer() {
  return (
    <>
      <div className="flex py-12">
        <div className="w-[50%]">
          <img src={assets.logo} alt="" />
          <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus nihil rerum vitae molestias ab, tempora magni </p>
        </div>

        <div className="flex w-[50%] justify-evenly">
          
          <div className='flex flex-col'>
            <h1 className='font-semibold text-[20px]'>Company</h1>
            <Link to="/">Home</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Delivery">Delivery</Link>
            <Link to="/PrivacyPolicy">Privacy policy</Link>
          </div>

          <div className='flex flex-col'>
            <h1 className='font-semibold text-[20px]'>GET IN TOUCH</h1>
            <p>+1-212-456</p>
          </div>

        </div>
 


      </div>
    </>

  )
}

export default Footer