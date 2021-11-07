import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "../ProjectCards";


function Projects() {
    return (
        <Container fluid className="project-section" id="project">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="Deal Finder"
                            description="Worked in a group to create a web application in Django where a user could search up any product and it would tell the user the cheapest place to go buy it. "
                            link="https://github.com/NihalKPatel/Deal-Finder"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            //imgPath={leaf}
                            isBlog={false}
                            title="Invester Tracker"
                            description="Worked in a group to create a web application to React js where any user could make save their current crypto and stock investments and it would tell him the current price and also calculate the profit/loss from the recent price and the information."
                            link="https://github.com/NihalKPatel/InvestorTracker"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            //imgPath={editor}
                            isBlog={false}
                            title="Discord Stock Bot"
                            description="Created a discord stock bot using nodejs that was able to show the latest price for any Crypto or Stock once the user inputted its ticker."
                            link="https://github.com/NihalKPatel/Stock-bot"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            //imgPath={bitsOfCode}
                            isBlog={false}
                            title="Who wants to be a millionaire"
                            description="Created a  game called who wants to be a millionaire in Java GUI. Where the user gets a series of questions getting a question correct rewards the users and getting all the questions right gives the users a “million dollars”."
                            link="https://github.com/NihalKPatel/Who-Wants-to-be-a-millionaire-GUI"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
