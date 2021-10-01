import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactIcon from "../../../assets/images/favicon.ico";

function Footer() {
  return (
    <Navbar fixed="sticky" bg="dark" variant="dark">
      <Container>
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
        <Col></Col>
        <Col></Col>
        <Col>
          <h8 className="text-secondary">Built with </h8>
          <img src={ReactIcon} alt="React Icon"></img>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;
