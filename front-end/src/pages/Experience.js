import Navbar from '../utils/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/experience.css';
import { useState, useEffect } from 'react';
import ExperienceService from '../services/experience-service';
import ProjectServices from '../services/project-services';

function Experience() {
    const [experiences, setExperiences] = useState([])
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getAllExperiences();
        getAllProjects();
    }, [])

    function getAllExperiences() {
        ExperienceService.getExperienceData().then((response) => {
            setExperiences(response.data)
        })
    }
    function getAllProjects() {
        ProjectServices.getProjectData().then((response) => {
            setProjects(response.data)
        })
    }

    return (
        <>
            <Navbar />
            <Container fluid>
                <Row className="taskArea">
                    <Col xs={12} md={12} lg={12}>
                        <h2>Relevant Experience</h2>
                        <Accordion flush alwaysOpen>
                            {
                                experiences.map(experience =>
                                    <Accordion.Item eventKey={experience.id} className="mb-3" >
                                        <Accordion.Header>
                                            <Row>
                                                <Col xs={12} md={12} lg={12}>
                                                    <strong>{experience.jobTitle}</strong><br></br>
                                                    <strong>{experience.companyName}</strong>
                                                    <div className="years">{experience.startDate} - {experience.endDate}</div>
                                                    <div className="place">{experience.place}</div>
                                                </Col>
                                            </Row>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col xs={12} md={12} lg={3} className="companyLogo text-center mb-3">
                                                    <img className="mb-3" src={require('../img/work experience/faniqueLogo.png')}></img>    <br></br>
                                                    <small>{experience.companySlogan}</small>
                                                </Col>
                                                <Col xs={12} md={12} lg={9} className="taskPerformed">
                                                    <div dangerouslySetInnerHTML={{ __html: experience.taskPerformed }} />

                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            }
                        </Accordion>
                    </Col>
                </Row>
                <Row className="projectsArea">
                    <h2 className="mt-5">Projects</h2>
                    <Row>
                        {
                            projects.map((project) =>
                                <Col xs={12} md={4} lg={3} className="mb-5">
                                    <Card className="gradient-hover-effect cardCustomCss">
                                        <a href={project.projectUrl} target="_blank" style={{ textDecoration: 'none' }}>
                                            <div className="projectLogo">
                                                <Card.Img className="appimg" variant="top" src={require("../img/projects/pedagog.png")} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>
                                                    <h5 className="whatIsProject">{project.projectName} </h5></Card.Title>
                                                <Card.Text>
                                                    <small className="shortDesc">
                                                        {project.projectSlogan}
                                                    </small>
                                                </Card.Text>
                                            </Card.Body>
                                        </a>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Row>
            </Container>
        </>
    )
}
export default Experience;