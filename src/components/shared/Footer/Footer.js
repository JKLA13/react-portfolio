import React from "react";
// import Navbar from 'react-bootstrap/Button';
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import ReactIcon from "../../../assets/images/favicon.ico";
// import Picture from "../../assets/images/web-dev.PNG";
// import Image from "react-bootstrap/Image";

function Footer() {
  return (
    <Navbar fixed="sticky" bg="dark" variant="dark">
      {/* <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      {/* <Nav className="d-flex justify-content-center">
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
      // </Container> */}
      <Row>
        <a href="tel:+13039218358">
          <i class="fas fa-phone-square-alt"></i> 303.921.8358
        </a>
        <a href="mailto:jakeladamson0@gmail.com">
          <i className="fas fa-envelope-square"></i> jakeladamson0@gmail.com
        </a>
        <a href="https://github.com/JKLA13" target="_blank" rel="noreferrer">
          <i class="fab fa-github-square"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jacob-adamson-535769103/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </Row>
      <Container>
        <h8 className="text-secondary">Built with </h8>
        <img src={ReactIcon} alt="React Icon"></img>
      </Container>
    </Navbar>
  );
}

export default Footer;
