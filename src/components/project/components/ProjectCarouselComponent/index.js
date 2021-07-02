import React, { Fragment, /*useEffect*/ } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import $ from "jquery";
import "./styles.css";
import "../../../scss/styles.scss"

const ProjectCarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Fragment>
      <div className="carousel-info-container">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="info-text-flex" align="left">
                <div className="text-container text-title-h2">
                  <div>Galería </div>
                  <div>del proyecto</div>
                </div>
                <div className="coutn-img-carousel-container">
                  <div className="text-title-h3 text-p-small">
                    <span>—</span> imágenes
                  </div>
                  <div className="text-title-h2">13</div>
                </div>
              </div>
              <div className="carousel-project-img-container">
                <Carousel responsive={responsive}>
                  <div className="img-slider">
                    <img
                      src="../../../../assets/img/projects/LandmarkGrandview.jpg"
                      alt=""
                    />
                  </div>
                  <div className="img-slider">
                    <img
                      src="../../../../assets/img/projects/CordilleraResidencial.jpg"
                      alt=""
                    />
                  </div>
                  <div className="img-slider">
                    <img
                      src="../../../../assets/img/projects/CorporativoCordillera.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="img-slider">
                    <img
                      src="../../../../assets/img/projects/CordilleraResidencial.jpg"
                      alt=""
                    />
                  </div>
                </Carousel>;
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ProjectCarouselComponent;
