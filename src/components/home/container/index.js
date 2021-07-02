import React, { Component, Fragment } from 'react';
import HomeComponent from "../component/HomeComponent";
import NavComponent from "../../othersComponents/nav";
import MisionComponent from "../component/MisionComponent";
import CustomersComponent from "../component/CustomersComponent";
import FooterComponent from "../../othersComponents/footer";

class HomeContainer extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent></NavComponent>
                <HomeComponent></HomeComponent>
                <MisionComponent></MisionComponent>
                <CustomersComponent></CustomersComponent>
                <FooterComponent></FooterComponent> 
            </Fragment>
        );
    }
}

export default HomeContainer;