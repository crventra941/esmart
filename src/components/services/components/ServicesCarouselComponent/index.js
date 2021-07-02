import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const ServicesCarouselComponent = (props) => {
  const paginacion = (id) => {
    const nombre = document.getElementById("nombre-producto-servicio");
    const descripcion = document.getElementById(
      "descripcion-producto-servicio"
    );
    const img = document.getElementById("img-producto-servicio");

    for (let i = 0; i < props.serviceId.productos.length; i++) {
      const a = props.serviceId.productos[i];
      if (a.idProducto === id) {
        nombre.innerHTML = a.nombre;
        descripcion.innerHTML = a.descripcion;
        img.setAttribute(
          "src",
          "../../../../assets/img/servicesImg/" + a.imagen
        );
      }
    }
  };

  return (
    <Fragment>
      <div className="services-carousel-container">
        <Container>
          <Row>
            <Col>
              <div className="display-grid-left">
                <div className="paginacion-container">
                  {props.serviceId ? (
                    props.serviceId.productos.map((index, i) => {
                      return (
                        <Fragment key={i}>
                          <div className="paginacion-indicadores">
                            <span
                              onClick={() =>
                                paginacion(
                                  props.serviceId.productos[i].idProducto
                                )
                              }
                            >
                              {i + 1 < 10 ? (
                                <Fragment>0</Fragment>
                              ) : (
                                <Fragment></Fragment>
                              )}
                              {i + 1}
                            </span>
                          </div>
                        </Fragment>
                      );
                    })
                  ) : (
                    <Fragment></Fragment>
                  )}
                  {/* <div className="paginacion-indicadores">
                    <span>01</span>
                  </div>
                  <div className="paginacion-indicadores">
                    <span>02</span>
                  </div>
                  <div className="paginacion-indicadores">
                    <span>03</span>
                  </div>
                  <div className="paginacion-indicadores">
                    <span>04</span>
                  </div>
                  <div className="paginacion-indicadores">
                    <span>05</span>
                  </div> */}
                </div>
                <div className="text-title-h2">
                  <div id="nombre-producto-servicio">
                    {props.serviceId.productos[0].nombre}
                  </div>
                </div>
                <div
                  id="descripcion-producto-servicio"
                  className="text-p text-p-m-r"
                >
                  {props.serviceId.productos[0].descripcion}
                </div>
                <div>
                  <button className="btn-large btn-background-t">
                    solicitar información
                  </button>
                </div>
                <div className="margin-movil"></div>
              </div>
            </Col>
            <Col>
              <img
                id="img-producto-servicio"
                className="img-c"
                src={
                  "../../../../assets/img/servicesImg/" +
                  props.serviceId.productos[0].imagen
                }
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

ServicesCarouselComponent.propTypes = {
  serviceId: PropTypes.object,
};

export default ServicesCarouselComponent;
