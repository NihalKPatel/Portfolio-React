import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import {Link} from "react-router-dom";


function Home() {

    return (
        <section>
            <Particle/>
            <Container fluid className="py-5 home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{paddingBottom: 15}} className="heading">
                                Hi There!
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
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
