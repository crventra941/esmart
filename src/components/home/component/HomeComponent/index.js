import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SubNavBarComponent from "../../../othersComponents/subNavBar";
import "./styles.css";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <Fragment>
      <div className="home-container">
        <div className="overlay">
          <Container>
            <Row>
              <Col>
                <div className="text-title-h1 color-text-white">
                  <div>especialistas</div>
                  <div> en construcción</div>
                </div>
                <Link to="/projects">
                  <button className="btn-medium btn-background-blue">
                    Ver proyectos
                </button>
                </Link>
              </Col>
            </Row>
          </Container>
          <SubNavBarComponent></SubNavBarComponent>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeComponent;
