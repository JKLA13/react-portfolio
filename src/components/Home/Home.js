import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Picture from "../../assets/images/folio-pic.PNG";
import Image from "react-bootstrap/Image";
// import React, { component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
// seperaration
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "font-awesome/css/font-awesome.min.css";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon={faCoffee} />;

// ReactDOM.render(element, document.body);

function Home() {
  return (
    //   about me section
    <>
      <Container className="AboutMe mt-3">
        <Row>
          <Col sm={2}>About Me</Col>
          <Col sm={3}>
            <Image src={Picture} className="img-fluid" />
          </Col>
          <Col sm={7}>
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
      <Container className="Portfolio mt-3">
        <Row>
          <Col sm={2}>Portfolio</Col>
          <Col sm={10}>
            {/* <Row xs={1} md={2} className="g-4">
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
            </Row> */}
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Github</Button>
                  <Button variant="primary" className="ml-2">
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Github</Button>
                  <Button variant="primary" className="ml-2">
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Github</Button>
                  <Button variant="primary" className="ml-2">
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Github</Button>
                  <Button variant="primary" className="ml-2">
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Github</Button>
                  <Button variant="primary" className="ml-2">
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Github</Button>
                  <Button variant="primary" className="ml-2">
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
      {/* Contact Section */}
      <Container className="AboutMe mt-3">
        <Row>
          <Col sm={2}>Contact</Col>
          <Col sm={10}>
            <Row>
              Contact Icons...
              <FontAwesomeIcon icon="fa-solid fa-circle-phone" />
              <FontAwesomeIcon icon="fa-solid fa-circle-envelope" />
              <FontAwesomeIcon icon="fa-brands fa-github" />
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
