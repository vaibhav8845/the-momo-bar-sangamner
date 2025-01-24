// import React, { useEffect } from 'react';
// import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
// import './Home.css'; // Import the external CSS
// import About from '../About/About';
// import MomosGallery from '../Momos Gallery/MomosGallery';
// import Menu from '../Menu/Menu';
// import OurStory from '../OurStory/OurStory';
// import ContactUs from '../Contact Us/ContactUs';

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//     <Container fluid className="momos-section mt-5">
//       <Row className="align-items-center">
//         <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
//           <h1 className="momos-title">Your Momos Craving End Here...</h1>
//           <p className="momos-description">
//           Started in 2024, The momo bar aims to disrupt the franchise business. Get associated with The momo bar and become our The momo bar PARTNER.          </p>
//           <Button className="get-inquiry-button">
//   <a className="phoneicon" href="tel:+91 7517805662" style={{ textDecoration: 'none', color:'white ' }}>
//     Get Inquiry
//   </a>
// </Button>

//         </Col>
//         <Col md={6}>
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className="carousel-image"
//                 src="https://i.postimg.cc/Fsb3ZmR0/Pngtree-nepal-food-momo-dumpling-14703266.png" // Replace with your image
//                 alt="Momos"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="carousel-image"
//                 src="https://i.postimg.cc/L8HfQ7Yw/Pngtree-fresh-steam-momos-8987007.png" // Replace with your image
//                 alt="Momos"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="carousel-image"
//                 src="https://i.postimg.cc/Fsb3ZmR0/Pngtree-nepal-food-momo-dumpling-14703266.png" // Replace with your image
//                 alt="Momos"
//               />
//             </Carousel.Item>
//           </Carousel>
//         </Col>
//       </Row>
//     </Container>
//     <About/>
//     <Menu/>
  
//     <MomosGallery/>
//     <OurStory/>
//     <ContactUs/>

//     </>
//   );
// };

// export default Home;





import React, { useEffect } from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './Home.css'; // Import the external CSS
import About from '../About/About';
import MomosGallery from '../Momos Gallery/MomosGallery';
import Menu from '../Menu/Menu';
import OurStory from '../OurStory/OurStory';
import ContactUs from '../Contact Us/ContactUs';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container fluid className="momos-section mt-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="momos-title">Your Momos Craving End Here...</h1>
            <p className="momos-description">
              Started in 2024, The momo bar aims to disrupt the franchise business. Get associated with The momo bar and become our The momo bar PARTNER.
            </p>
            <Button className="get-inquiry-button">
              <a
                className="phoneicon"
                href="tel:+91 7517805662"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Get Inquiry
              </a>
            </Button>
          </Col>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://i.postimg.cc/Fsb3ZmR0/Pngtree-nepal-food-momo-dumpling-14703266.png"
                  alt="Momos"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://i.postimg.cc/L8HfQ7Yw/Pngtree-fresh-steam-momos-8987007.png"
                  alt="Momos"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-image"
                  src="https://i.postimg.cc/Fsb3ZmR0/Pngtree-nepal-food-momo-dumpling-14703266.png"
                  alt="Momos"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <About />
      <Menu />
      <MomosGallery />
      <OurStory />
      <ContactUs />

      {/* Fixed WhatsApp and Call icons */}
      <div className="floating-icons">
        <a href="https://wa.me/917517805662" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
        <a href="tel:+917517805662">
          <FaPhone className="phone-icon" />
        </a>
      </div>
    </>
  );
};

export default Home;
