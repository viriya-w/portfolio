import React from 'react'
import styles from './Skill.module.css';
import Data from '../../info.json';
import { Card, Row, Col } from 'react-bootstrap'

function Skill() {

    const skills = []
    Data.forEach(result => {

        var i = Object.values(result.skills).length;

        for (let index = 0; index < i; index++) {
            var res = "images/" + result.skills[index].name + ".png"

            skills.push(
            
            <Row xs="auto">
                <Col  >
                    <Card
                    style={{ padding: 15, width: '18rem'   }}
                    className="text-center card border-0">
                        <Card.Img src={res} className={styles.imageSkill} />
                        <Card.Body>
                            <Card.Title> {result.skills[index].name} </Card.Title>
                            <Card.Text  >
                                {result.skills[index].score}
                            </Card.Text>
                            <Card.Text  >
                                {result.skills[index].description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            )
        }
    })

    return (
        <div className={styles.flexBox}>
            {skills}
        </div>


    )
}

export default Skill

