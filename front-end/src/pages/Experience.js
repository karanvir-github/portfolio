import Navbar from '../utils/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/experience.css';
import { useState, useEffect } from 'react';
import ExperienceService from '../services/experience-service';
import projectService from '../services/project-service';

function Experience() {
    const [experiences, setExperiences] = useState([])
    const [projects, setProjects] = useState([])

    function getAllExperiences() {
        ExperienceService.getExperienceData().then((response) => {
            setExperiences(response.data)
        })
    }
    function getAllProjects() {
        projectService.getProjectData().then((response) => {
            setProjects(response.data)
        })
    }
    const monthNames = ["Jan", "Feb", "March", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    useEffect(() => {
        getAllExperiences();
        getAllProjects();
    }, [])

    return (
        <>
            <Navbar />
            <Container fluid>
                <Row className="taskArea">
                    <Col xs={12} md={12} lg={12}>
                        <h2>Relevant Experience</h2>
                        <Accordion flush>
                            {
                                experiences.map(experience =>
                                    <Accordion.Item eventKey={experience.id} className="mb-3" >
                                        <Accordion.Header>
                                            <Row style={{ width: '97%' }}>
                                                <Col xs={12} md={12} lg={6}>
                                                    <strong>{experience.jobTitle}</strong>
                                                </Col>
                                                <Col xs={12} md={12} lg={6}>
                                                    <div className="text-end">{monthNames[new Date(experience.startDate + "EST").getMonth()]} {new Date(experience.startDate + "EST").getFullYear()} to {monthNames[new Date(experience.endDate + "EST").getMonth()]} {new Date(experience.endDate + "EST").getFullYear()}</div>
                                                </Col>
                                                <Col xs={12} md={12} lg={12}>
                                                    <div className="place">{experience.place}</div>
                                                </Col>
                                                <Col xs={12} md={12} lg={12}>
                                                    <a href={`${experience.companyLink}`} target='_blank' style={{ pointer: 'cursor' }}>{experience.companyName}</a>
                                                </Col>
                                            </Row>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col xs={12} md={12} lg={9}>
                                                    Tasks Performed-
                                                </Col>
                                                <Col xs={12} md={12} lg={9} style={{ marginTop: '10px' }} className="taskPerformed">
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
                    <h2 className="mt-2">Projects</h2>
                    <Row>
                        {
                            projects.map((project) =>
                                <Col xs={12} md={4} lg={2} className="mb-2">
                                    <Card className="cards text-center">
                                        <a href={project.projectUrl} target="_blank" style={{ textDecoration: 'none' }}>
                                            <Card.Body>
                                                <Card.Title>
                                                    <h5 className="whatIsProject">{project.projectName} </h5></Card.Title>
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