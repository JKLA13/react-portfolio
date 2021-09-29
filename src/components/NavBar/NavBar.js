import React from "react";
// import Navbar from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Picture from "../../assets/images/web-dev.PNG";
import Image from "react-bootstrap/Image";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Image src={Picture} className="me-3" />
        <Navbar.Brand href="#home">Jacob L. Adamson</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">About Me</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1aIVjM-gp8WeiJ6XnyC0h7W71RUcmoXsc/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="https://github.com/JKLA13" target="_blank">
              Github
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://www.linkedin.com/in/jacob-adamson-535769103/"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
