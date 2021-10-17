import React from 'react'
import styles from './Contact.module.css';
import emailjs from "emailjs-com";
import { Form, Row, Col, FloatingLabel, Container, Button } from 'react-bootstrap'

function contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_j142sqb', 'template_portfolio', e.target, 'user_aP0oRQHDBti8RFcJEGxUB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <section id="contact">
            <div className={styles.divContact} >
                <div className={styles.box}>
                    <form onSubmit={sendEmail}>
                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <img src="images/mail.png" alt="me" width="100" height="90" className={styles.image} />
                                </Col>
                                <Col sm={6}>
                                    <p11 className={styles.p11}>I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me.</p11>
                                </Col>
                            </Row>

                            <br />
                            <br />
                            <br />


                            <Row>
                                <Col sm={6}>
                                    <Form.Label column="lg" lg={4}>
                                        <p12 className={styles.p12} >Name: </p12>
                                    </Form.Label>
                                </Col>

                                <Col sm={6}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Name"
                                        className="mb-3"
                                    >
                                        <Form.Control style={{ height: '50px', width: '250px' }}
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col sm={6}>
                                    <Form.Label column="lg" lg={4}>
                                        <p12 className={styles.p12} >Email:  </p12>
                                    </Form.Label>
                                </Col>

                                <Col sm={6}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="e.g. a@example.com"
                                        className="mb-3"
                                    >
                                        <Form.Control style={{ height: '50px', width: '250px' }}
                                            type="text"
                                            placeholder=" "
                                            name="email"
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col sm={6}>
                                    <Form.Label column="lg" lg={4}>
                                        <p12 className={styles.p12} >Subject: </p12>
                                    </Form.Label>
                                </Col >
                                <Col sm={6}>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Subject"
                                        className="mb-3"
                                    >
                                        <Form.Control style={{ height: '50px', width: '250px' }}
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                        />
                                    </FloatingLabel>

                                </Col>
                            </Row>
                            <br />

                            <Row>
                                <Col sm={6}>
                                    <Form.Label column="lg" lg={4}>
                                        <p12 className={styles.p12} >Message: </p12>
                                    </Form.Label>
                                </Col>

                                <Col sm={6}>
                                    <FloatingLabel controlId="floatingTextarea2" label="Message..">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '300px', width: '200px'   }}
                                            name="message"
                                           
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                </Col>
                                <Col sm={6}>
                                    <br />
                                    <Button variant="danger" type="submit" value="Submit"> Send Message</Button>{' '}
                                </Col>
                            </Row>


                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />




                        </Container>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default contact
