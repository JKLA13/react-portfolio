import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Picture from "../../assets/images/folio-pic.PNG";
import Image from "react-bootstrap/Image";
// import React, { component } from "react";

function Home() {
  return (
    <Container>
      <Row>
        <Col sm={1}>About Me</Col>
        <Col sm={3}>
          <Image src={Picture} className="img-fluid" />
        </Col>
        <Col sm={8}>
          <p>
            Hello, I'm Jacob L. Adamson. I am a Full Stack Web Developer (MERN),
            and I am beyond excited to keep coding and learning. My other
            passions are writing and recording my music, as well as recording
            other's music.{" "}
          </p>
        </Col>
      </Row>
      {/* <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row> */}
    </Container>
  );
}

export default Home;
