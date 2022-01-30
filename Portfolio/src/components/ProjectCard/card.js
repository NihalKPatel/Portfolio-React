import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default class Card extends React.Component {
    render() {
        let stacks = this.props.data.stack;
        const techstack = [];


        let i = 0
        while (stacks[i] !== undefined) {
            console.log(stacks[i])
            techstack[i] = <div className="tag stackbtn"><p>{stacks[i]}</p></div>
            i++
        }

        return (
            <section>
                <Container>
                    <div className="card-grid-space">
                        <div className="num"></div>
                        <a className="project-card" href="https://github.com/NihalKPatel/InvestorTracker"
                           style={{background: "#333"}}>
                            <Col>
                                <Row>
                                <h1>  {this.props.data.project}</h1>
                                </Row>
                                <Row>
                                <p>{this.props.data.description}</p>
                                </Row>
                                <Row>
                                <div className="tags">
                                    {techstack}
                                </div>
                                </Row>
                            </Col>
                        </a>
                    </div>
                </Container>
            </section>
        )
    }
}