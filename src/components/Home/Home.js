import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Picture from "../../assets/images/folio-pic.PNG";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FolioOne from "../../assets/images/inventory-manager.PNG";
import FolioTwo from "../../assets/images/project1.PNG";
import FolioThree from "../../assets/images/budget-tracker.PNG";
import FolioFour from "../../assets/images/fitness-tracker.PNG";
import FolioFive from "../../assets/images/work-day-planner.PNG";
import FolioSix from "../../assets/images/scratch-game.PNG";
import "./home.css";

function Home() {
  return (
    //   about me section
    <>
      <Container className="mt-3" id="AboutMe">
        <Row>
          <Col sm={2} className="sectionName">
            <h2>About Me</h2>
          </Col>
          <Col sm={3}>
            <Image src={Picture} className="img-fluid" />
          </Col>
          <Col sm={7}>
            <p>
              Hello, I'm Jacob L. Adamson. I am a Full Stack Web Developer
              (MERN), and I am beyond excited to keep coding and learning. My
              other passions are being a part time Recording Engineer, and I
              love writing and recording music.{" "}
            </p>
          </Col>
        </Row>
      </Container>
      {/* // Portfolio section */}
      <Container className="mt-3" id="Portfolio">
        <Row>
          <Col sm={2} className="sectionName">
            <h2>Portfolio</h2>
          </Col>
          <Col sm={10}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={FolioOne} />
                <Card.Body>
                  <Card.Title>Bagel Inventory</Card.Title>
                  <Card.Text>
                    Student project # 2, my team built a full stack app using
                    MySQL, Node.js, and Express.js. The user is able to create a
                    login and manipulate an bagel inventory. However, this
                    inventory would be easily converted into a inventory
                    management app for whatever business need.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="btnBlock">
                  <Button
                    className="gitButt"
                    variant="secondary"
                    href="https://github.com/nickwojt/warehouse-manager"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    className="deployButt"
                    variant="primary"
                    href="https://warehouse-manager-nw.herokuapp.com/"
                    target="_blank"
                  >
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={FolioTwo} />
                <Card.Body>
                  <Card.Title>Food and Cocktail Recipe</Card.Title>
                  <Card.Text>
                    Student project #1, my team built a full stack app using 3rd
                    party APIs, Node.js, and Express.js. The app gives a user
                    experience of being able to find food and cocktail recipes
                    to try from the comfort of home during these trying Covid
                    times.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="btnBlock">
                  <Button
                    className="gitButt"
                    variant="secondary"
                    href="https://github.com/HavoxPrime/cocktailAndFood"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    className="deployButt"
                    variant="primary"
                    href="https://havoxprime.github.io/cocktailAndFood/foodpage.html"
                    target="_blank"
                  >
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={FolioThree} />
                <Card.Body>
                  <Card.Title>Budget Tracker</Card.Title>
                  <Card.Text>
                    This is a budget tracker app, built using MongoDB, IndexDB,
                    Mongoose, and Node.js also using what I've learned building
                    PWA's. This app is able to track user input offline or
                    online.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="btnBlock">
                  <Button
                    className="gitButt"
                    variant="secondary"
                    href="https://github.com/JKLA13/budget-tracker"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    className="deployButt"
                    variant="primary"
                    href="https://budget-tracker-jkla.herokuapp.com/"
                    target="_blank"
                  >
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={FolioFour} />
                <Card.Body>
                  <Card.Title>Fitness Tracker</Card.Title>
                  <Card.Text>
                    A Fitness Tracker app built using MongoDB, Mongoose, and
                    Express.js routes. The user is able to track daily workouts,
                    and able to view a dashboard with graph views for logged
                    cardio and weight training exercises.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="btnBlock">
                  <Button
                    className="gitButt"
                    variant="secondary"
                    href="https://github.com/JKLA13/fitness-tracker"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    className="deployButt"
                    variant="primary"
                    href="https://fitness-tracker-jkla.herokuapp.com/"
                    target="_blank"
                  >
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={FolioFive} />
                <Card.Body>
                  <Card.Title>Workday Planner</Card.Title>
                  <Card.Text>
                    This Workday Planner App was built using Bootstrap, jQuery,
                    and Node.js. The user is able to enter events for the day,
                    with color coded hour blocks to denote time passed.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="btnBlock">
                  <Button
                    className="gitButt"
                    variant="secondary"
                    href="https://github.com/JKLA13/work-day-planner"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    className="deployButt"
                    variant="primary"
                    href="https://jkla13.github.io/work-day-planner/"
                    target="_blank"
                  >
                    Deployed App
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={FolioSix} />
                <Card.Body>
                  <Card.Title>Crabby! Game</Card.Title>
                  <Card.Text>
                    ... And now for something completely different. This is a
                    game I built in Scratch, called "Crabby!". I had an absolute
                    blast building this game, and it's a simple, fun game to
                    play. Enjoy!
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="btnBlock">
                  <Button
                    className="gitButt"
                    variant="secondary"
                    href="https://scratch.mit.edu/projects/551826079/"
                    target="_blank"
                  >
                    (Click ===
                  </Button>
                  <Button
                    className="deployButt"
                    variant="primary"
                    href="https://scratch.mit.edu/projects/551826079/"
                    target="_blank"
                  >
                    Game Time!)
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
      {/* Contact Section */}
      <Container className="mt-3" id="Contact">
        <Row>
          <Col sm={2} className="sectionName">
            <h2>Contact</h2>
          </Col>
          <Col sm={10}>
            <Row>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Send me a message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button
                  className="gitButt"
                  variant="primary"
                  href="https://scratch.mit.edu/projects/551826079/"
                  target="_blank"
                >
                  Submit
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
