import React, { useEffect } from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Customers from "../../../../assets/clientes.json";

const CustomersComponent = () => {
  const customers = () => {
    const clientes = Customers;
    const divCustomers = document.getElementById("customers-img-container");

    for (let i = 0; i < clientes.length; i++) {
      const a = clientes[i];
      const div = document.createElement("div");
      div.classList = "customers-img";
      div.id = a.id;
      divCustomers.appendChild(div);

      const img = document.createElement("img");
      img.setAttribute("src", "../../../../assets/img/home/" + a.imagen);
      img.setAttribute("alt", "");

      const divImgContainer = document.getElementById(a.id);
      divImgContainer.appendChild(img);
    }
  }

  useEffect(() => {
    customers();
  }, []);

  let ver = false;

  const verMas = () => {
    const divCustomers = document.getElementById("customers-img-container");
    const divContainer = document.getElementById("customers-container");
    const button = document.getElementById("boton-vermas");
    const x = window.matchMedia("(max-width: 999px)");

    if (ver === false) {
      button.innerHTML = "Ocultar"
      if (x.matches === true) {
        divCustomers.style.height = "85%";
      } else {
        divContainer.style.height = "110vh";
        divCustomers.style.height = "70%";
      }
      ver = true;
    } else {
      button.innerHTML = "Ver todos"
      if (x.matches === true) {
        divCustomers.style.height = "180px";
      } else {
        divContainer.style.height = "70vh";
        divCustomers.style.height = "180px";
      }
      ver = false;
    }
  }

  return (
    <Fragment>
      <div id="customers-container" className="customers-container">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-title-h3">Nuestros clientes</div>
              <div className="text-title-h2">
                <div>Empresas que han </div>
                <div>confiado en nosotros</div>
              </div>
              <div id="customers-img-container" className="customers-img-container">
              </div>
              <button id="boton-vermas" onClick={() => verMas()} className="btn-small btn-background-blue">Ver todos</button>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default CustomersComponent;
