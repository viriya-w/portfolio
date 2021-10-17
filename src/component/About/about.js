
import React from 'react'
import styles from './about.module.css';
import Data from '../../info.json';
import { Container, Row, Col } from 'react-bootstrap'

function about() {

    var jp = require('jsonpath');
    var firstname = jp.query(Data, '$..firstname');
    var lastname = jp.query(Data, '$..lastname');
    var email = jp.query(Data, '$..email');
    var phone = jp.query(Data, '$..phone');
    var address = jp.query(Data, '$..address');


    return (
        <section id="about">
            <div className={styles.grid}  >
                <Container>
                    <Row>
                        <Col sm={6}>
                            <img src="images/165375.jpg" alt="me" width="240" height="300" className={styles.image} />
                        </Col>

                        <Col sm={6}>
                            <div className={styles.text}>
                                <h4>About me</h4>
                                <p12 >I graduated in Information Technology major who Interested in Programmer, Front-end Developer position willing to work with a company where I can enhance my knowledge and get a new learning opportunity to improve my skill. </p12>
                                <br />
                                <br />
                                <p12>I have an experience in Develop program using java language for IDM, Tester, Configuration software. </p12>
                                <br />
                                <p12>I believe that my experiences and my abilities would be a great benefit to your company. </p12>
                                <br />
                                <br />
                                <h4>Contact Detail</h4>
                                <p12>Name: {firstname} {lastname}</p12>
                                <br />
                                <p12>Address: {address}</p12>
                                <br />
                                <p12>Tel: {phone}</p12>
                                <br />
                                <br />
                                <p2>E-Mail: {email}</p2>

                                <br />
                                <br />
                                <br />


                                <a className={styles.button} href="https://drive.google.com/file/d/1ANh_hLTotGLW-yE9OWD5I5tk26x45HG-/view?usp=sharing" target="_blank" ><span>Resume </span></a>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default about
