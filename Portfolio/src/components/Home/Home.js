import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import homeLogo from "../../Assets/home-main.gif";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.gif";
import {Link} from "react-router-dom";


function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{paddingBottom: 15}} className="heading">
                                Hi There! <span className="wave" role="img" aria-labelledby="wave"></span>
                            </h1>

                            <h1 className="heading-name">
                                I'm
                                <strong className="main-name"> Nihal Patel</strong>
                            </h1>

                            <div style={{padding: 50, textAlign: "left"}}>
                                <Type/>
                                <br />
                             <Link to="/Contact" className="button"></Link>
                            </div>


                        </Col>

                        <Col md={5} style={{paddingBottom: 20}}>
                            <img src={homeLogo} alt="home pic" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={8} className="home-about-description">
                            <h1 style={{fontSize: "2.6em"}}>LET ME <span className="purple"> INTRODUCE </span> MYSELF
                            </h1>
                            <p className="home-about-body">
                                I have worked in
                                <i>
                                    <b className="purple"> Java, Javascript and Python </b>
                                </i>
                                aswell as
                                <i>
                                    <b className="purple"> Node.js</b> and
                                </i>
                                <i>
                                    <b className="purple">
                                        {" "}
                                        Django Framework and other Frameworks
                                    </b>
                                </i>
                                &nbsp; like
                                <i>
                                    <b className="purple"> React.js </b>
                                </i>
                                <br/>
                                <br/>
                                My field of Interest's are building new&nbsp;
                                <i>
                                    <b className="purple">Web Technologies and Products </b> and
                                    also in areas related to{" "}
                                    <b className="purple">
                                        Backend Development.
                                    </b>
                                </i>
                                <br/>
                                <br/>

                            </p>
                        </Col>
                        <Col md={4} className="myAvtar">
                            <Tilt>
                                <img src={myImg} className="img-fluid" alt="avatar"/>
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
