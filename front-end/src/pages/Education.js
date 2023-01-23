import Navbar from '../utils/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import '../css/education.css';
import EducationService from '../services/education-service';
import { useEffect, useState } from 'react';

function Education() {

    const [education, setEducation] = useState([])

    useEffect(() => {
        getallEducation();
    }, [])

    function getallEducation() {
        EducationService.getEducationData().then((response) => {
            setEducation(response.data)
        })
    }

    return (
        <>
            <Navbar />
            <Container fluid>
                <Row className="educationArea">
                    <Col xs={12} md={12} lg={12}>
                        <h2>Study Background</h2>
                        <Accordion flush alwaysOpen>
                            {
                                education.map(edu =>
                                    <Accordion.Item eventKey={edu.id} className="mb-3">
                                        <Accordion.Header>
                                            <Row>
                                                <Col xs={12} md={12} lg={12}>
                                                    <strong>{edu.courseName}</strong><br></br>
                                                    <strong>{edu.courseType}</strong>
                                                    <div className="years">{edu.startDate} - {edu.endDate}</div>
                                                    <div className="place">{edu.place}</div>
                                                </Col>
                                            </Row>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col xs={12} md={12} lg={3} className="institutionLogo text-center mb-3">
                                                    <a href="https://www.lambtoncollege.ca/" target="_blank">
                                                        <img className="mb-3" src={require('../img/education/lambton.jpg')}></img>    <br></br>
                                                        <small>{edu.institutionSlogan}</small>
                                                    </a>
                                                </Col>
                                                <Col xs={12} md={12} lg={9} className="course">
                                                    <div dangerouslySetInnerHTML={{ __html: edu.learning }} />
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            }
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Education;