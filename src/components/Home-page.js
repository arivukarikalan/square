import React from 'react'
import Home from "../Images/Travelling-bg.jpg";
import Image1 from "../Images/place-1.jpeg"
import Image2 from "../Images/place-2.jpeg"
import Image3 from "../Images/place-3.jpeg"
import { FaTrain } from 'react-icons/fa';

const home = () => {
  return (
    <>
   <div className='home-container'>
      <img src={Home} alt='home-image' className='home-image' />
      <div className='home-text-container'>
        <h1 data-aos="fade-up" style={{fontWeight:800}}>Discover the World with Us</h1>
        <p data-aos="fade-up">Where Dreams Take Flight</p>
        <button className='booking-btn'>
          <FaTrain className='mx-2' />
          Book Now !
        </button>
      </div>
      </div>
      <div className='image-container d-flex justify-content-center align-items-center'>
      <div className='row'>
      <img src={Image1} alt='Image 1' data-aos="flip-up" className='image-1  col-md-4' />
      <img src={Image2} alt='Image 2' data-aos="flip-up" className='image-2  col-md-4' />
      <img src={Image3} alt='Image 3' data-aos="flip-up" className='image-3  col-md-4' />
    </div>
    </div>
    </>
  )
}

export default home
