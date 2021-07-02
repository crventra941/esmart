import React, { Component, Fragment } from "react";
import ContactComponent from "../component/ContactComponent";
import NavComponent from "../../othersComponents/nav";

class ContactContainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="contacto-container-nav">
          <NavComponent></NavComponent>
          <ContactComponent></ContactComponent>
        </div>
      </Fragment>
    );
  }
}

export default ContactContainer;
