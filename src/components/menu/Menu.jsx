import React from 'react'
import { Navbar,Container ,Nav  } from 'react-bootstrap';
import "./menu.css"

const Menu = () => {
  return (
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Service</Nav.Link>
            <Nav.Link href="#home">Success Story</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu