import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCarouselComponent from "../ProjectCarouselComponent";
import "./styles.css";

const ProjectComponent = (props) => {
  return (
    <Fragment>
      <div
        className="project-container"
        style={{
          backgroundImage:
            "url(../../../../assets/img/projects/" + props.project.imagen + ")",
        }}
      >
        <div className="overlay">
          <div className="proyecto-nombre-container">
            <div className="text-title-h1 color-text-white">
              {props.project.nombre}
            </div>
            <div className="text-title-h3 color-text-white">Obra pública</div>
          </div>
          <div className="siguiente-proyecto-container">
            <div>
              <div className="siguiente-proyecto text-title-h3 color-text-white">
                Siguiente proyecto
            </div>
              <div className="siguiente-proyecto-nombre text-p-small color-text-white">
                {props.project.nombre}
              </div>
            </div>
            <div className="btn-next-proyect-container">
              <div id="btn-next">&#8250;</div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-info-container">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="display-grid-left">
                <div className="capacidad-palcos">
                  <div className="capacidad-container">
                    <div className="text-p-small text-p-weight">
                      <span> — </span> capacidad
                    </div>
                    <div className="text-title-h2">15,000</div>
                  </div>
                  <div className="palcos-container">
                    <div className="text-p-small text-p-weight">
                      <span> — </span> palcos
                    </div>
                    <div className="text-title-h2">102</div>
                  </div>
                </div>
                <div className="customer-date-container">
                  <div className="construction-date">
                    <div className="text-p-small text-p-weight">
                      <span> — </span> Construido en
                    </div>
                    <div className="text-p">2007</div>
                  </div>
                  <div className="customer">
                    <div className="text-p-small text-p-weight">
                      <span> — </span>cliente
                    </div>
                    <div className="text-p">
                      Patronato Nuevo Estadio Juan N. López
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="display-grid-left">
                <div className="text-p-small text-p-weight">
                  <span> — </span> ¿Qué hicimos?
                </div>
                <div className="info-text-flex">
                  <div className="text-title-h2">01</div>
                  <div className="text-p text-p-p-l">
                    Debido a la premura por el inicio del torneo, la
                    construcción se realizó en sólo 7 meses.
                  </div>
                </div>
                <div className="info-text-flex">
                  <div className="text-title-h2">02</div>
                  <div className="text-p text-p-p-l">
                    Transformamos y adecuamos el terreno, convirtiendo el
                    basurero municipal en un campo de juego.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ProjectCarouselComponent></ProjectCarouselComponent>
    </Fragment>
  );
};

ProjectComponent.propTypes = {
  project: PropTypes.object,
};

export default ProjectComponent;
