import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SubNavBarComponent from "../../../othersComponents/subNavBar";
import "./styles.css";

const ServicesComponent = (props) => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage:
            "url(../../../../assets/img/servicesImg/" +
            props.serviceId.imagen +
            ")",
        }}
        className="services-container"
      >
        <div className="overlay">
          <Container>
            <Row>
              <Col className="animate__animated animate__fadeIn">
                <div className="text-title-h3 color-text-white">
                  <div>nuestros servicios</div>
                </div>
                <div className="text-title-h1 color-text-white">
                  <div>{props.serviceId.nombre}</div>
                </div>
                <a href="#services-info-container">
                  <button className="btn-medium btn-background-t">
                    ver detalles
                  </button>
                </a>
              </Col>
            </Row>
          </Container>
          <SubNavBarComponent></SubNavBarComponent>
        </div>
      </div>
    </Fragment>
  );
};

ServicesComponent.propTypes = {
  serviceId: PropTypes.object,
};

export default ServicesComponent;
