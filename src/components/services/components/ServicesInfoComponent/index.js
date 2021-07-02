import React from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const ServicesInfoComponet = ({ serviceId }) => {

  const htmlPipe = (text) => {
    return {
      __html: text
    }
  }

  return (
    <Fragment>
      <div id="services-info-container" className="services-info-container">
        <Container>
          <Row>
            <Col className="col col-xl-6 col-md-6 col-sm-12">
              <div className="display-grid-left">

                <div className="text-title-h2">
                  <div dangerouslySetInnerHTML={
                    htmlPipe(serviceId.titulo)
                  }></div>
                </div>

                <div className="text-title-h3">{serviceId.slug}</div>
                {
                  serviceId.hectareas &&
                  <div className="text-title-h2">+{serviceId.hectareas}</div>
                }
              </div>
            </Col>
            <div className="show-margin-movil" >{' '}</div>
            <Col className={serviceId.titulo ? "col col-xl-6 col-md-6 col-sm-12":  "col col-12"}>
              <div className="display-grid-left mt-lg-0 mt-md-0 mt-sm-5">
                <div dangerouslySetInnerHTML={
                    htmlPipe(serviceId.descripcion)
                  }></div>
                <div>
                  <button className="btn-medium btn-background-t">
                    Ver proyectos
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ServicesInfoComponet;
