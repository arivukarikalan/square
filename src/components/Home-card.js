import React, { useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import card1 from "../Images/card-1.jpg";
import card2 from "../Images/card-2.jpg";
import card3 from "../Images/card-4.jpeg";
import card4 from "../Images/card-4.jpg";
import AOS from 'aos';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Paytone+One&display=swap');
</style>
const FourCard = () => {
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
  const cardsData = [
    {
      title: "Bora Bora, French Polynesia",
      description: "A part of French Polynesia, this magical island has some of the most beautiful sights to behold- a tropical island surrounded by the amazing blue lagoon",
      image: card1
    },
    {
      title: "Bali, Indonesia - An idyllic retreat",
      description: "Indonesia's most famous island, Bali is the best place for any tourist who needs a week of absolute relaxation, fragrant cuisine, scenic beauty and a galore of culture",
      image: card2
    },
    {
      title: "The most populous city of France.",
      description: "\"As a wonderful insight into French culture and cuisine, with some incredible photo opportunities, Paris deserves its place on every traveler's bucket list of destinations.",
      image: card3
    },
    {
      title: "Mandrem Beach- North Goa",
      description: "\"A perfect beachside vacation is all we need when our mind and body seek calmness. The best thing about beaches is the sweltering sun rays that fall straight on the sea bed,",
      image: card4
    }
   
  ];
  
  return (
    <section id='home-card' data-aos='zoom-out'>
    <Container>
      <div className="row ">
        {cardsData.map((card, index) => (
          <div className="col-sm-12 col-md-6 col-xl-3" key={index}>
            <Card data-aos="zoom-in" className='mt-3 custom-card'>
              <Card.Img variant="top" src={card.image} className='card-image' />
              <Card.Body>
                <h5 className="card-title">{card.title}</h5>
                <Card.Text>
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  </section>
  
  );
}

export default FourCard;
