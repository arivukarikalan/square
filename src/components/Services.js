import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import AOS from 'aos';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Paytone+One&display=swap');
</style>
const services = [
    {
      title: 'Housing',
      description: 'You can get hotels, motels, inns, camps, condominiums, timeshares',
    },
    {
      title: 'Food',
      description: 'Food may be included in the accommodation',
    },
    {
      title: 'Transport',
      description: 'Square can provide all types of transport , wheather sea,air,rail or land',
    },
    {
      title: 'Travel Insurance',
      description: 'take out Travel Insurance to cover for any unforeseen circumstances',
    },
  ];
const Services = () => {
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
    <section id='services' data-aos='flip-up' >
    <div className='container mt-5' >
      <h1 className='text-center fw-700 service-heading'>Our Services</h1> <hr className='custom-hr'/>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 my-5">
      {services.map((service, index) => (
        <div className="col" key={index}>
          <Card className="position-relative  service card">
            <Card.Body className='py-5'>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
            <div className="arrow-icon position-absolute   translate-middle">
              <FaArrowRight className='arrow-right'/>
            </div>
          </Card>
        </div>
      ))}
    </div>
    </div>
    </section>
  )
}

export default Services
