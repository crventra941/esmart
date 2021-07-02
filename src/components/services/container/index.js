import React, { Component, Fragment } from 'react';
import ServicesComponent from "../components/ServicesHomeComponent";
import NavComponent from "../../othersComponents/nav";
import FooterComponent from "../../othersComponents/footer";
import ServicesInfoComponet from "../components/ServicesInfoComponent";
import ServicesCarouselComponent from "../components/ServicesCarouselComponent";
import Services from "../../../assets/services.json";

class ServicesContainer extends Component {
    render() {
        let serviceId;
        const {
            match: { params },
        } = this.props;

        for (let i of Services) {
            if (i.id === params.id) {
                serviceId = i;
            }
        }
        return (
            <Fragment>
                <NavComponent></NavComponent>
                <ServicesComponent serviceId={serviceId}></ServicesComponent>
                <ServicesInfoComponet serviceId={serviceId}></ServicesInfoComponet>
                <ServicesCarouselComponent serviceId={serviceId}></ServicesCarouselComponent>
                <FooterComponent></FooterComponent>
            </Fragment>
        );
    }
}

export default ServicesContainer;