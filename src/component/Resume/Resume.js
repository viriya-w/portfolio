import React from 'react'
import styles from './resume.module.css';
import Data from '../../info.json';
import { Container, Row, Col } from 'react-bootstrap'
import Skill from '../Skill/Skill';

function resume() {

    var jp = require('jsonpath');
    var education = jp.query(Data, '$..education');
    var degree = jp.query(Data, '$..degree');
    var educationyear = jp.query(Data, '$..educationyear');
    var educationname = jp.query(Data, '$..educationname');

    let items = []
    Data.forEach(result => {
        var i = Object.values(result.project).length;
        for (let index = 0; index < i; index++) {
            items.push(<h3  key={index + 20}>{result.project[index].date}</h3>)
            items.push(<h5  key={index + 5}>{result.project[index].product}</h5>)
            items.push(<p3 className={styles.textP3} key={index + 10}>{result.project[index].site}</p3>)
            items.push(<br />)
            items.push(<br />)
            items.push(<p4 key={index}>{result.project[index].description.reduce((prev, curr) => [prev, ', ', curr])}</p4>)
            items.push(<br />)
            items.push(<br />)
            items.push(<br />)
        }
    })


    return (
        <section id="resume">
            <div className={styles.AppGrid}  >
                <Container>
                    <Row>
                        <Col sm={5}>
                            <div >
                                <h2 className={styles.borderBtt1} >EDUCATION</h2>
                            </div>
                        </Col>
                        <br />
                        <br />
                        <Col sm={7}>
                            <div className={styles.textH3}>
                                <h3  >{educationyear}</h3>
                                <br />
                                <p6 className={styles.textP6}>{education} </p6>
                                <br />
                                <br />
                                <p7 className={styles.textP7}>{degree}, {educationname} </p7>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />

                    <div>
                        <p className={styles.borderBtt0}></p>
                    </div>
                    <br />

                    <Row>
                        <Col sm={6}>
                            <div>
                                <h2 className={styles.borderBtt2}>WORK</h2>
                            </div>
                        </Col>
                        <br />
                        <br />
                        <Col>
                            <div sm={6}>
                                {items}
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <div>
                        <p className={styles.borderBtt0}></p>
                    </div>
                    <br />
                    <Row>
                        <Col sm={12}>
                            <div >
                                <h2 className={styles.borderBtt3}>SKILL & PRODUCT</h2>
                            </div>
                        </Col>
                    </Row>
                    <div >
                        <Skill />
                    </div>
                </Container>
            </div>
        </section>

    )
}

export default resume
