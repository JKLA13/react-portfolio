import React from "react";
// import Navbar from 'react-bootstrap/Button';
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Picture from "../../assets/images/web-dev.PNG";
import Image from "react-bootstrap/Image";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <img src="./web-dev.PNG" alt="icon"></img> */}
        <Image src={Picture} />
        <Navbar.Brand href="#home">Jacob L. Adamson</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">About Me</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="../../../public/images/JacobAdamsonResume2021.pdf">
              Resume
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
