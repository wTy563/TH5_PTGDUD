import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <Form>
              <Form.Group className="d-flex">
                <Form.Control type="email" placeholder="Enter your email" />
                <Button variant="primary" className="ms-2">Subscribe</Button>
              </Form.Group>
            </Form>
          </Col>
          <Col md={3}>
            <h5>Recipes</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Vegetarian</a></li>
              <li><a href="#" className="text-white">Vegan</a></li>
              <li><a href="#" className="text-white">Desserts</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <p>📧 support@cheffly.com</p>
            <p>📍 New York, USA</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
