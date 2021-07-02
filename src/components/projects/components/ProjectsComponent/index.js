import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "../../../../assets/projects.json";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./styles.css";
import "../../../scss/styles.scss"

const ProjectsComponent = () => {
  useEffect(() => {
    $("#slider section:last").insertBefore("#slider section:first");
    $("#slider").css("margin-left", "-" + 100 + "%");
  }, []);

  const moverD = () => {
    $("#slider").animate({ marginLeft: "-" + 200 + "%" }, 700, function () {
      $("#slider section:first").insertAfter("#slider section:last");
      $("#slider").css("margin-left", "-" + 100 + "%");
    });
  };

  const moverI = () => {
    $("#slider").animate({ marginLeft: 0 }, 700, function () {
      $("#slider section:last").insertBefore("#slider section:first");
      $("#slider").css("margin-left", "-" + 100 + "%");
    });
  };

  const animationBtn = () => {
    $(".arrow").hover(function (e) {
      e.preventDefault();

      let arrow = $(this);

      if (!arrow.hasClass("animate")) {
        arrow.addClass("animate");
        setTimeout(() => {
          arrow.removeClass("animate");
        }, 1600);
      }
    });
  };

  animationBtn();

  return (
    <Fragment>
      <div className="projects-container">
        <div id="slider-container">
          <div id="slider">
            {Projects.map((index, i) => {
              return (
                <Fragment key={i}>
                  <section
                    style={{
                      backgroundImage:
                        "url(../../../../assets/img/projects/" +
                        Projects[i].imagen +
                        ")",
                    }}
                    id={Projects[i].id}
                  >
                    <div className="overlay">
                      <Container>
                        <Row>
                          <Col lg={7}>
                            <div className="display-grid-left">
                              <div className="contador-container color-text-white">
                                <span className="text-title-h2 color-text-white">
                                  {" "}
                                  0{i + 1}{" "}
                                </span>{" "}
                                <span className="text-title-h2 color-text-white">
                                  / 0{Projects.length}
                                </span>
                              </div>
                              <div className="text-title-h1 color-text-white">
                                {Projects[i].nombre}
                              </div>
                            </div>
                          </Col>
                          <Col lg={5} className="display-grid-center">
                            <button className="btn-medium btn-background-t ">
                              <Link to={"/project/" + Projects[i].id}>
                                Ver proyecto
                              </Link>
                            </button>
                          </Col>
                        </Row>
                        <Row>
                          <div className="demo">
                            <a
                              href="#/"
                              className="arrow left"
                              onClick={() => moverI()}
                            >
                              <i></i>
                              <svg>
                                <use xlinkHref="#circle" />
                              </svg>
                            </a>
                            <a
                              href="#/"
                              className="arrow"
                              onClick={() => moverD()}
                            >
                              <i></i>
                              <svg>
                                <use xlinkHref="#circle" />
                              </svg>
                            </a>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "none" }}
                          >
                            <symbol
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 44 44"
                              width="44px"
                              height="44px"
                              id="circle"
                              fill="none"
                              stroke="currentColor"
                            >
                              <circle r="20" cy="22" cx="22" id="test" />
                            </symbol>
                          </svg>
                        </Row>
                      </Container>
                    </div>
                  </section>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectsComponent;
