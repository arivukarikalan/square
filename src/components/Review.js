import React, { useEffect } from 'react'
import people1 from "../Images/people-1.jpg"
import people3 from "../Images/people-3.jpg"
import people2 from "../Images/people-2.jpg"
import { Badge } from 'react-bootstrap'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import AOS from 'aos';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Paytone+One&display=swap');
</style>
const Review = () => {
  useEffect(() => {
    AOS.init();

    // Function to handle smooth scrolling and trigger AOS animations
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-aos]');
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.75) {
          section.classList.add('aos-animate');
        } else {
          section.classList.remove('aos-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='review' data-aos='zoom-out'>
    <h1 className='text-center mt-5 review-heading'>Review</h1> <hr className='custom-hr'/>
    <div className='container d-flex justify-content-center mt-5'>
    <div className='row container d-xl-flex justify-content-center gy-3'>
       <div  data-aos="zoom-out"  className="card align-items-center p-3 col-sm-12 col-lg-5 col-xl-3 mx-xl-5  mx-lg-3" >
  <img src={people1} className=" people" alt="people"/>
  <div className="card-body text-center">
    <h5 className="card-title">Dwinshy</h5>
    <p className="card-text">"Our family trip to India was amazing. All thanks to the wonderful team. It was a memorable first trip to India."</p>
    <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
  </div>
</div>
<div  data-aos="zoom-out" className="card align-items-center p-3 col-sm-12 col-lg-5 col-xl-3 mx-xl-5  " >
  <img src={people2} className=" people" alt="people"/>
  <div className="card-body text-center">
    <h5 className="card-title">Lilly Rossy</h5>
    <p className="card-text">"Everything about this trip was amazing. Saw great sights and experienced the true culture of Paris."</p>
    <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
  </div>
</div>
<div data-aos="zoom-out"  className="card align-items-center p-3 col-sm-12 col-lg-5 col-xl-3 mx-xl-5 " >
  <img src={people3} className=" people" alt="people"/>
  <div className="card-body text-center">
    <h5 className="card-title">John Smith</h5>
    <p className="card-text">"We had a great time!! This tour exceeded all our expectations. Everything was perfect on the tour.Highly recommended."</p>
    <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalf></FaStarHalf>
  </div>
</div>
</div>
    </div>
    </section>
  )
}

export default Review
