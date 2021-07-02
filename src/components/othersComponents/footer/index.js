import React from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { Footer } from "../../footer/Footer";

const FooterComponent = () => {
  return (
    <Fragment>
      <footer>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="display-grid-left">
                <div className="text-title-h3">
                  — ¿Necesitas más información?
                </div>
                <div className="text-title-h2">
                  <div> Comunícate con nosotros</div>
                </div>
                <div className="footer-buttons">
                  <Link to="/contact">
                    <button className="btn-medium btn-background-blue">
                      Escribir mensaje
                    </button>
                  </Link>
                  <button className="btn-large btn-background-t">
                    descargar currículum
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-img">
                <img
                  className=""
                  src="../../../assets/img/footer/Footer.png"
                  alt=""
                />
              </div>
            </Col>
          <Footer />
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default FooterComponent;
