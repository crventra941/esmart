import React, { Component, Fragment } from 'react';
import ProjectComponent from "../components/ProjectComponent";
import NavComponent from "../../othersComponents/nav";
import FooterComponent from "../../othersComponents/footer";
import Projects from "../../../assets/projects.json";

class ProjectContainer extends Component {
    render() {
        let project;
        const {
            match: { params },
        } = this.props;

        for (let i of Projects) {
            if (i.id === params.id) {
                project = i;
            }
        }
        return (
            <Fragment>
                <NavComponent></NavComponent>
                <ProjectComponent project={project}></ProjectComponent>
                <FooterComponent></FooterComponent>
            </Fragment>
        );
    }
}

export default ProjectContainer;