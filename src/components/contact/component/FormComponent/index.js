import React, { Fragment, useState } from "react";
import { Form, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { sendMail } from "../../../../helpers/email";

const FormComponent = () => {
  const [form, setForm] = useState({
    name: '',
    tel: '',
    email: '',
    subject: '',
    message: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form)
    const rs = await sendMail(form);
    console.log(rs.json())
  }

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} align="left">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleInputChange}
              required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="tel"
              onChange={handleInputChange}
              placeholder="Número de teléfono" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail1">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="Correo electrónico"
              required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword1">
            <Form.Label>Asunto</Form.Label>
            <Form.Control 
              type="text"
              name="subject"
              onChange={handleInputChange}
              placeholder="Asunto" />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exampleForm">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            onChange={handleInputChange}
            placeholder="Escribe aquí tu mensaje..."
            required
          />
        </Form.Group>
        <div className="button-form-container" align="right">
          <button type="submit" className="btn-small btn-background-blue">Enviar</button>
        </div>
      </Form>
    </Fragment>
  );
};

export default FormComponent;
