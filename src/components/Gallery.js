import React, { useEffect } from 'react';
import gallery1 from "../Images/gallery-1.webp"
import gallery2 from "../Images/gallery-2.jpg"
import gallery3 from "../Images/gallery-3.jpg"
import gallery4 from "../Images/gallery-4.jpg"
import gallery5 from "../Images/gallery-5.jpg"
import gallery6 from "../Images/gallery-6.jpg"
import Aos from 'aos';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Paytone+One&display=swap');
</style>
const Gallery = () => {
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
  return (
    <section id="gallery" data-aos="zoom-out">
    <div className='container' >
      <h1 className='heading text-center mt-5 gallery-heading '>Gallery</h1>  <hr className='custom-hr'/>
      <div className='row g-4 row-cols-lg-3 mt-5'>
        <img src={gallery1} alt='island' height="250px"></img>
        <img src={gallery2} alt='island' height="500px"></img>
        <img src={gallery3} alt='island' height="250px"></img>
      </div>
      <div className='row g-4 row-cols-lg-3 mt-3'>
      <img src={gallery4} alt='island' height="500px" className='Gallery-4'></img>
      <img src={gallery5} alt='island' height="250px"></img>
      <img src={gallery6} alt='island' height="500px" className='Gallery-6'></img>
      </div>
    </div>
    </section>
  )
}

export default Gallery
