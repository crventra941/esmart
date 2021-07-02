import React from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const MisionComponent = () => {
  return (
    <Fragment>
      <div className="mision-container">
        <Container>
          <Row>
            <Col lg={6}>
              <img
                className="img-c"
                src="../../../../assets/img/home/escaleras.png"
                alt=""
              />
            </Col>
            <Col lg={6}>
              <div className="display-grid-left">
                <div className="text-title-h3">Los números hablan</div>
                <div className="text-title-h2">
                  <div> Más de 35 años</div>
                  <div>de experiencia</div>
                </div>
                <div className="text-p">
                  Comprometidos con el desarrollo eficiente y a tiempo de todos
                  y cada uno de nuestros proyectos, buscando siempre la
                  satisfacción de nuestros clientes.
                </div>
                <div className="btn-mision-container">
                  <button className="btn-large btn-background-blue">
                    Descargar currículum
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

export default MisionComponent;
