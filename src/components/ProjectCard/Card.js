import React from "react";
import {Container} from "react-bootstrap";

export default class Card extends React.Component {
    render() {
        let stacks = this.props.data.stack;
        const techstack = [];


        let i = 0
        while (stacks[i] !== undefined) {
            console.log(stacks[i])
            techstack[i] = <div className="tag stackbtn"><p>{stacks[i]} &nbsp;</p></div>
            i++
        }

        return (
            <section>
                <Container>
                    <div className="card-grid-space">
                        <div className="num"></div>
                        <a href={this.props.data.github} className= "data-card">
                            <h3>{this.props.data.project}</h3>
                                <h4><div className="tags">
                                    {techstack}
                                </div></h4>
                            <p>{this.props.data.description}</p>
                            <span className="link-text"> View More </span>
                        </a>

                    </div>
                </Container>
            </section>
        )
    }
}