import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import contact from "../Images/air-ballon.jpg"
import footer from "../Images/footer-img.webp";
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';
import Aos from 'aos';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Paytone+One&display=swap');
</style>
const Contact = () => {

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
    <section id='contact' data-aos="slide-right">
        <h1 className='text-center mt-5 contact-heading'>Contact Us</h1> <hr className='custom-hr'/>
    <div className='contact-form py-5 py-lg-0 d-lg-flex'>
     <img src={contact} className='contact-image col-lg-6' alt='contact'/>
      <div className='container-fluid'>
        <h1 className='mx-5 my-2'>READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!</h1>
        <Form  className='container col-sm-12 col-md-8 col-lg-6  d-flex flex-column  my-lg-5'>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="Enter your phone number" />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
      </Form.Group>

      <Button variant="warning" className='col-12 mt-3' type="submit">
        Contact us!
      </Button>
    </Form>
      </div>
    </div>
    <div className='footer-container'>
    <footer className="footer-content mt-3">
      <img src={footer} className="footer-image" alt="footer-img" />
      <div className="footer-text-content text-center">
        <ul className="footer-items d-flex justify-content-center align-items-center flex-wrap mt-5">
          <li href='about'>ABOUT US</li>
          <li href='packages'>PACKAGES</li>
          <li href='review'>REVIEW</li>
          <li>HELP</li>
          <li href='contact'>CONTACT</li>
        </ul>
        <hr />
        <p>
          "Discover the beauty of our world with Square. Offering tailored travel experiences since 2003, we believe
          in creating memories that last a lifetime. From serene beaches to bustling cities, we guide you every step
          of the way. Dive into the journey; let's explore together!"
        </p>
        <div className="social-icons">
          <FaFacebook className="mx-2" />
          <FaTwitter className="mx-2" />
          <FaInstagram className="mx-2" />
          <FaGoogle className="mx-2" />
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} copyright : Square Travels
        </div>
      </div>
    </footer>
    </div>
    </section>
  )
}

export default Contact
