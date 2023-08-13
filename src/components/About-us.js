import React, { useEffect } from 'react'
import about from "../Images/about.jpg"
import Aos from 'aos';
const About = () => {
  useEffect(() => {
    Aos.init();

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
  return(
  <section id='about' data-aos='zoom-in'>
  <div  className='d-xl-flex flex-xl-row-reverse main-about'>
    <img src={about} className='about-image mt-5 mt-lg-0' alt='about-image' />
      <div className='container-fluid about-container text-end text-white'>
        <div className='about-content'>
          <h1 className='about-title'>Best Travel Agencies In India</h1>
          <p className='about-para'>
            "Swastik India Journeys is a dedicated travel agency in India offering an array of high quality services with first-hand knowledge on India tours. We offer a spectacular range of India Tours including Rajasthan tours, Kerala tours, private north India tours. With our personalized approach we make the tours a real value for money. Our customized services and tailored tours promise for the best travel experience in Incredible India."
          </p>
          <button className='btn btn-warning'>About Us</button>
        </div>
      </div>
      </div>
      </section>
  );
};




export default About;
