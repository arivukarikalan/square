import React from 'react'
import logo from "../Images/logo.jpg"
import  "../Style.css"
import {  FaBars, FaCogs, FaHome, FaImage, FaPhone, FaStar, FaSuitcase } from 'react-icons/fa'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Paytone+One&display=swap');
</style>

const NavBar = () => {

    function handleclick(){
        const btn = document.querySelector(".nav-icon");
        btn.classList.add("no-outline")
    }
    
    
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar ">
  <div className="container-fluid ">
    <a className="navbar-brand d-flex align-items-center " href="#">
    <img src={logo} className='logo mx-3' alt='page-logo' ></img>
   <span className='brand-name'>Square</span> 
    </a>
    <button className="navbar-toggler border-0 " onClick={handleclick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span><FaBars className='nav-icon ' size='30px'/></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav text-center ">
        <li className="nav-item">
          <a className="nav-link active" href="#"><FaHome className='mx-2' />Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services"><FaCogs className='mx-2'/>Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#packages"><FaSuitcase className='mx-2'/>Package</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="#gallery"><FaImage className='mx-2'/>Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#review"><FaStar className='mx-2'/>Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact"><FaPhone className='mx-2'/>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
