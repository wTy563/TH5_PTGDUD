import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">🍽️ Cheffly</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">What to Cook</Nav.Link>
            <Nav.Link href="#">Ingredients</Nav.Link>
            <Nav.Link href="#">Occasions</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search recipes..." className="me-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#" className="mx-2">Login</Nav.Link>
            <Button variant="primary">Subscribe</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
