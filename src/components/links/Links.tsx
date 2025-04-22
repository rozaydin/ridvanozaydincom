import { Container, Row, Col } from "react-bootstrap";

import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaRegEnvelope,
} from "react-icons/fa/index.js";

function Links() {
  const iconSize = 24;

  return (
    <div>
      <Container fluid style={{ marginBottom: "1em" }}>
        <Row>
          <Col>
            <div className="link-container">
              <a href="https://www.linkedin.com/in/ridvanozaydin">
                <FaLinkedin size={iconSize} color="blue" />
              </a>
              <span className="link-description">
                &nbsp;Linkedin(ridvanozaydin)
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="link-container">
              <a href="https://github.com/rozaydin">
                <FaGithub size={iconSize} color="black" />
              </a>
              <span className="link-description">&nbsp;GitHub(rozaydin)</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="link-container">
              <a href="https://stackoverflow.com/users/3102328/rozaydin">
                <FaStackOverflow size={iconSize} color="orange" />
              </a>
              <span className="link-description">
                &nbsp;Stackoverflow(rozaydin)
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="link-container">
              <a href="mailto://ridvanozaydin@gmail.com">
                <FaRegEnvelope size={iconSize} color="black" />
              </a>
              <span className="link-description">
                &nbsp;Mail(ridvan.ozaydin@ridvanozaydin.com)
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Links;
