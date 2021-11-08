import React, {Component} from "react";
import * as emailjs from "emailjs-com";
import {Col, Container, Row} from "react-bootstrap";
import swal from 'sweetalert';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });

    }
    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    }

    handleChangeMessage = (event) => {
        this.setState({
            message: event.target.value,
        });
    }
    sendMail = () => {


        const template_params = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "message": this.state.message,
        };

        const service_id = "service_jwa3d59";
        const template_id = "template_ujum448";
        emailjs.send(service_id, template_id, template_params, 'user_ZitLel5VytfkcE3T88H76')
            .then(function (response) {
                swal({
                    title: "Sent!",
                    icon: "success",
                });
            }, function (err) {
                console.log('FAILED...', err);
            });
    };

    render() {
        return (
            <Container fluid className="project-section" id="contact">
                <Row>
                    <Col id="my-contact" className="float-child  ">

                        <h1 className="project-heading">Contact<strong className="purple"> Me!</strong></h1>
                        <p style={{color: "white"}}>Want to say Hello or Have a cool idea? Shoot me a message.</p>
                        <br/><p style={{color: "white"}}> Name:</p>
                        <form data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
                            <Row><input className="col-12 col-md-6 mx-auto" type="textarea" name="name"
                                        onChange={this.handleChangeName}/></Row>

                            <br/><p style={{color: "white"}}> Email:</p>

                            <Row><input className="col-12 col-md-6 mx-auto" type="textarea" name="email"
                                        ref="email"
                                        onChange={this.handleChangeEmail}/></Row>

                            <br/><p style={{color: "white"}}> Message:</p>

                            <Row><textarea className="col-12 col-md-6 mx-auto" type="text" name="message"
                                           ref="message" onChange={this.handleChangeMessage}/></Row>
                            <br/>

                            <Row>
                                <button className="btn btn-primary mx-auto" type="submit" onClick={this.sendMail}>Send
                                    Email
                                </button>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;
