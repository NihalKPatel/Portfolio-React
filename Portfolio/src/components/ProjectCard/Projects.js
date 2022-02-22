import React from "react";
import data from "./data.json";
import Card from "./Card"
import "./project.scss";
import {Col, Container, Row} from "react-bootstrap";

function Projects(props) {

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: "0"
    };

    const projects = [];

    for (let i = 0; i <= Math.ceil((6 - 1) / 3); i++) {
        const temp = [];
        for (let k = i * 3; k < (i * 3) + 3; k++) {
            if (data[k] === undefined) {
                break;
            }
            temp.push(<Card data={data[k]}/>)
        }
        if (temp.length === 0) {
            break;
        }
        projects[i] = temp
    }

    return (
        <Container className="project-section" id="project">
            <Row>
                <Col>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>

        <div>
            {
                projects.map(function (name, index) {
                    return <div style={divStyle} key={index.toString()}> {projects[index]}
                    </div>
                })
            }
            }
        </div>
                </Col>
            </Row>
        </Container>

    )

}

export default Projects;

