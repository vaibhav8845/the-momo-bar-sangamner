import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css'; // Import the external CSS

const Home = () => {
  return (
    <Container fluid className="momos-section mt-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h1 className="momos-title">Your Momos Craving End Here...</h1>
          <p className="momos-description">
          Started in 2024, The momo bar aims to disrupt the franchise business. Get associated with The momo bar and become our The momo bar PARTNER.          </p>
          <Button className="get-inquiry-button">
  <a className="phoneicon" href="tel:+91 7517805662" style={{ textDecoration: 'none', color:'white ' }}>
    Get Inquiry
  </a>
</Button>

        </Col>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="\—Pngtree—nepal food momo dumpling_14703266.png" // Replace with your image
                alt="Momos"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="\—Pngtree—fresh steam momos_8987007.png" // Replace with your image
                alt="Momos"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="\—Pngtree—nepal food momo dumpling_14703266.png" // Replace with your image
                alt="Momos"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
