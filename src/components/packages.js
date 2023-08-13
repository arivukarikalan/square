import React, { useEffect } from 'react'
import { Badge, Card } from 'react-bootstrap';
import popular1 from "../Images/popular-1.gif"
import popular2 from "../Images/popular-2.webp"
import popular3 from "../Images/popular-3.jpg"
import AOS from 'aos';
import { FaHistory, FaStar, FaStarHalf,  } from 'react-icons/fa';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Paytone+One&display=swap');
</style>
const Packages = () => {
 
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
    <section id='packages' data-aos='zoom-in-right'>
    <div className='container'>
    <div className='sub-title text-center'>
      <h1 className='mt-5 package-heading'>Packages</h1>
      <hr className='custom-hr'/>
      <h3 className='mt-5'>Most Popular Tours</h3>
</div>
     <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-5">
      <div className="col">
        <Card data-aos="flip-down card">
          <Card.Img variant="top" src={popular1}  height="350px" />
          <h2 className='time'><Badge bg='warning'><FaHistory className='d-block m-2'></FaHistory>40 Days</Badge></h2>
          <Card.Body className='pcards'>
          
          <h3><Badge bg='success' className='mx-2 '>From $600.00</Badge></h3>
           <h3><Badge bg='warning'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><span className='mx-1'>(245)</span></Badge></h3>
        
            <h2 className='mt-3'>The Most Populous city in the Unit Arab Emirates(UAE) </h2>
           <p className='mt-3'>Dubai,UAE</p>
          </Card.Body>
         
        </Card>
      </div>
      <div className="col">
        <Card data-aos="flip-down card">
          <Card.Img variant="top" src={popular2}  height="350px"/>
          <h2 className='time'><Badge bg='warning'><FaHistory className='d-block m-2'></FaHistory>50 Days</Badge></h2>
          <Card.Body className='pcards'>
          
          <h3><Badge bg='success' className='mx-2 '>From $800.00</Badge></h3>
           <h3><Badge bg='warning'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalf ></FaStarHalf><span className='mx-1'>(545)</span></Badge></h3>
           
            <h2 className='mt-3'> It's a Place where Travelers can time-hop through the city</h2>
           <p className='mt-3'>Kuala LUmpur,Malaysia</p>
            
          </Card.Body>
        </Card>
      </div>
      <div className="col">
        <Card data-aos="flip-down card">
          <Card.Img variant="top" src={popular3} height="350px" />
          <h2 className='time'><Badge bg='warning'><FaHistory className='d-block m-2'></FaHistory>35 Days</Badge></h2>
          <Card.Body className='pcards'>
          
          <h3><Badge bg='success' className='mx-2 '>From $1200.00</Badge></h3>
           <h3><Badge bg='warning'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><span className='mx-1'>(1245)</span></Badge></h3>
           
            <h2 className='mt-3' >Plan Your Holiday to Norway With Our Square.Discover the Northen Lights</h2>
           <p className='mt-3'>Prestvaanet Lake,Norway</p>
            
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Packages
