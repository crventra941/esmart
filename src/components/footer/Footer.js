import React from 'react';
import './style.css';
import { Col } from 'react-bootstrap';
import ByGirasolo1 from '../../assets/img/footer/inicio.png';
import ByGirasolo2 from '../../assets/img/footer/fin.png';


export const Footer = () => {
  return (
    <div className='footer bg-footer'>
      <Col lg='2' sm='12' className='mt-5 lg-footer'>
        <a href="https://girasolo.mx" className="by-girasolo" id="byGirasolo">
          <span><img src={ByGirasolo1} alt="Girasolo" /> </span>
          <div className="icon">
            <div className="heart"></div>
          </div>
          <span><img src={ByGirasolo2} alt="Girasolo" /></span>
        </a>
      </Col>
    </div>
  );
};
