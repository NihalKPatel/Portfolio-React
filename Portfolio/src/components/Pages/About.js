import {Col, Container, Row} from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import LottieAnimation from "../Lottie";
import myImg from "../../Assets/home-main.json";
import React from "react";
import myFile from "../../Assets/CV.pdf";
import "../../style.css"

function About() {

    return (
        <section>
        <Container>
            <Container className="home-content" id="about">
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>LET ME <span className="purple"> INTRODUCE </span> MYSELF</h1>
                        <p className="home-about-body">I have worked in
                            <i><b className="purple"> Java, Javascript and Python </b></i>aswell as
                            <i><b className="purple"> Node.js</b> and</i>
                            <i><b className="purple">{" "}Django Framework and other Frameworks</b></i>&nbsp; like
                            <i><b className="purple"> React.js </b></i><br/><br/>My field of Interest's are building
                            new&nbsp;
                            <i><b className="purple">Web Technologies and Products </b> and also in areas related
                                to{" "}<b className="purple">Backend Development.</b></i><br/><br/>
                        </p>

                        <ul className="float-child">
                            <li>
                                <a className=" media-link btn btn-primary mx-auto" href={myFile}>Resume</a>
                            </li>
                            <li>
                                <a className="btn btn-primary mx-auto"
                                   href="https://www.linkedin.com/in/nihalpatel99/">LinkedIn</a>
                            </li>
                            <li>
                                <a className="btn btn-primary mx-auto" href="https://github.com/NihalKPatel">GitHub</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt><LottieAnimation lotti={myImg} height={350} width={350}/></Tilt>
                    </Col>
                </Row>

            </Container>
            <div ></div>
        </Container>
        </section>
    );
}

export default About;
