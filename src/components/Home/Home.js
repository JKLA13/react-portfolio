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
import FolioOne from "../../assets/images/inventory-manager.PNG";
import FolioTwo from "../../assets/images/project1.PNG";
import FolioThree from "../../assets/images/budget-tracker.PNG";
import FolioFour from "../../assets/images/fitness-tracker.PNG";
import FolioFive from "../../assets/images/work-day-planner.PNG";
import FolioSix from "../../assets/images/scratch-game.PNG";
import "./home.css";
// seperaration
// import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import "font-awesome/css/font-awesome.min.css";

// ReactDOM.render(element, document.body);

function Home() {
  return (
    //   about me section
    <>
      <Container className="AboutMe mt-3">
        <Row>
          <Col sm={2}>
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
      <Container className="Portfolio mt-3">
        <Row>
          <Col sm={2}>
            <h2>Portfolio</h2>
          </Col>
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
                <Card.Footer>
                  <Button
                    variant="secondary"
                    href="https://github.com/nickwojt/warehouse-manager"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    href="https://warehouse-manager-nw.herokuapp.com/"
                    target="_blank"
                    className="pl-2"
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
                <Card.Footer>
                  <Button
                    variant="secondary"
                    href="https://github.com/HavoxPrime/cocktailAndFood"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    href="https://havoxprime.github.io/cocktailAndFood/foodpage.html"
                    target="_blank"
                    className="ml-2"
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
                <Card.Footer>
                  <Button
                    variant="secondary"
                    href="https://github.com/JKLA13/budget-tracker"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    href="https://budget-tracker-jkla.herokuapp.com/"
                    target="_blank"
                    className="ml-2"
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
                <Card.Footer>
                  <Button
                    variant="secondary"
                    href="https://github.com/JKLA13/fitness-tracker"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    href="https://fitness-tracker-jkla.herokuapp.com/"
                    target="_blank"
                    className="ml-2"
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
                <Card.Footer>
                  <Button
                    variant="secondary"
                    href="https://github.com/JKLA13/work-day-planner"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    href="https://jkla13.github.io/work-day-planner/"
                    target="_blank"
                    className="ml-2"
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
                <Card.Footer>
                  <Button
                    variant="secondary"
                    href="https://scratch.mit.edu/projects/551826079/"
                    target="_blank"
                  >
                    (Click ===
                  </Button>
                  <Button
                    variant="primary"
                    href="https://scratch.mit.edu/projects/551826079/"
                    target="_blank"
                    className="ml-2"
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
      <Container className="AboutMe mt-3">
        <Row>
          <Col sm={2}>
            <h2>Contact</h2>
          </Col>
          <Col sm={10}>
            <Row>
              <a href="tel:+13039218358">
                <i class="fas fa-phone-square-alt"></i> 303.921.8358
              </a>
              <a href="mailto:jakeladamson0@gmail.com">
                <i className="fas fa-envelope-square"></i>{" "}
                jakeladamson0@gmail.com
              </a>
              <a
                href="https://github.com/JKLA13"
                target="_blank"
                rel="noreferrer"
              >
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
