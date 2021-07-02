import React, { Component, Fragment } from 'react';
import NavComponent from "../../othersComponents/nav";
import FooterComponent from "../../othersComponents/footer";
import ProjectsComponent from "../components/ProjectsComponent";

class ProjectsContainer extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent></NavComponent>
                <ProjectsComponent></ProjectsComponent>
                <FooterComponent></FooterComponent>
            </Fragment>
        );
    }
}

export default ProjectsContainer;