import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SubNavBarComponent = () => {
  return (
    <Fragment>
      <div className="subnav-container text-p">
        <div className="subnav-option-container">
          <Link to={"/services/1"}>
            {" "}
            <span>a</span>{" "}
            <div className="subnav-nombre-service"> Invernaderos </div>{" "}
          </Link>
        </div>
        <div className="subnav-option-container">
          <Link to={"/services/2"}>
            {" "}
            <span>d</span>{" "}
            <div className="subnav-nombre-service">
              {" "}
              Obra civil e industrial
            </div>
          </Link>
        </div>
        <div className="subnav-option-container">
          <Link to={"/services/3"}>
            {" "}
            <span>b</span>{" "}
            <div className="subnav-nombre-service">
              Terracerías y urbanizaciones
            </div>
          </Link>
        </div>
        <div className="subnav-option-container">
          <Link to={"/services/4"}>
            {" "}
            <span>c</span>{" "}
            <div className="subnav-nombre-service">Arquitectura</div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SubNavBarComponent;
