import {Col, Container, Row} from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import LottieAnimation from "../Lottie";
import myImg from "../../Assets/home-main.json";
import React from "react";

function Home2() {
    return (
        <section>
            <Container id="about">
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
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt><LottieAnimation lotti={myImg} height={350} width={350}/></Tilt>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 className="home-about-description" style={{fontSize: "2.6em"}}>Technology <span className="purple"> Stack </span></h1>
                <div className="techstack">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>Java</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>This is where I network and build my professional protfolio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>Python</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                </h3>
                                <p>This is where I read news and network with different social groups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>C++</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                </h3>
                                <p>This is where I share code and work on projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="techstack">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>
                                        ReactJS
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>This is where I network and build my professional protfolio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>Django</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                </h3>
                                <p>This is where I read news and network with different social groups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>HTML5</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                </h3>
                                <p>This is where I share code and work on projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="techstack">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>
                                        NodeJS
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>This is where I network and build my professional protfolio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>AngularJs</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                </h3>
                                <p>This is where I read news and network with different social groups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <h3>MySQL</h3>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                </h3>
                                <p>This is where I share code and work on projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Home2;
