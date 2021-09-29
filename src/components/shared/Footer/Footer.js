import React from "react";
// import Navbar from 'react-bootstrap/Button';
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Picture from "../../assets/images/web-dev.PNG";
// import Image from "react-bootstrap/Image";

function Footer() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="d-flex justify-content-center">
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
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
