import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormComponent from "../FormComponent";
import "./styles.css";

const ContactComponent = () => {
  return (
    <Fragment>
      <div className="contact-container">
        <Container>
          <Row>
            <Col lg={12} align="center">
              <div className="text-title-h1">
                <div>hablemos</div>
                <div>de negocios</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6}>
              <div className="display-grid-left">
                <div className="display-grid-center">
                  <div className="font-icon">E</div>
                  <div className="text-p">
                    <div>
                      <a
                        href="https://goo.gl/maps/U1ECYbstD1aCfFjAA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Blvd. Adolfo López Mateos 145
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://goo.gl/maps/U1ECYbstD1aCfFjAA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Centro, La Piedad, Michoacán.
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://goo.gl/maps/U1ECYbstD1aCfFjAA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        C.P. 59300
                      </a>
                    </div>
                  </div>
                </div>
                <div className="display-grid-center">
                  <div className="font-icon">F</div>
                  <div className="text-p">
                    <a href="mailto:proveedores@esmartconstrucciones.com">
                      proveedores@esmartconstrucciones.com{" "}
                    </a>
                  </div>
                </div>
                <div className="display-grid-center">
                  <div className="font-icon">G</div>
                  <div className="text-p">
                    <a href="whatsapp://send?abid=3525925449&text=Hola">
                      352 592 5449
                    </a>
                  </div>
                </div>
                <div className="display-grid-center">
                  <div className="font-icon">H</div>
                  <div className="text-p">
                    <div>
                      <a href="tel:352 522 1395">352 522 1395</a>
                    </div>
                    <div>
                      <a href="tel:352 522 1191">352 522 1191</a>
                    </div>
                    <div>
                      <a href="tel:352 522 4354">352 522 4354</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <FormComponent></FormComponent>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ContactComponent;
