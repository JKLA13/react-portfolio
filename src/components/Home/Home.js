import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Picture from "../../assets/images/folio-pic.PNG";
import Image from "react-bootstrap/Image";
// import React, { component } from "react";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    //   about me section
    <>
      <Container className="mt-2">
        <Row>
          <Col sm={1}>About Me</Col>
          <Col sm={3}>
            <Image src={Picture} className="img-fluid" />
          </Col>
          <Col sm={8}>
            <p>
              Hello, I'm Jacob L. Adamson. I am a Full Stack Web Developer
              (MERN), and I am beyond excited to keep coding and learning. My
              other passions are writing and recording my music, as well as
              recording other's music.{" "}
            </p>
          </Col>
        </Row>
      </Container>
      {/* // Portfolio section */}
      <Container className="mt-2">
        <Row>
          <Col sm={1}>Portfolio</Col>
          <Col sm={11}>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      {/* Contact Section */}
    </>
  );
}

export default Home;
