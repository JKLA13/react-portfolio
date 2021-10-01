import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Picture from "../../../assets/images/iconweb.PNG";
import Image from "react-bootstrap/Image";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Image src={Picture} className="me-3 img-fluid" />
        <Navbar.Brand href="#home">Jacob L. Adamson</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#AboutMe">About Me</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1aIVjM-gp8WeiJ6XnyC0h7W71RUcmoXsc/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
