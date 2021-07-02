import React from "react";
import { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./styles.css";

const NavComponent = () => {

  const navColor = () => {
    $(function () {
      $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
          document.getElementById("nav").classList = "navbar navbar-expand-lg navbar-light bg-gray fixed-top";
        } else {
          document.getElementById("nav").classList = "navbar navbar-expand-lg navbar-light bg-light fixed-top";
        }
      });
    });
  }

  navColor()
    ;
  return (
    <Fragment>
      <Navbar id="nav" bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img className="img-nav" src="../../../assets/img/nav/image.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/projects">Proyectos</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavComponent;
