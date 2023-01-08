import Navbar from '../utils/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/experience.css';

function Experience() {
    return (
        <>
            <Navbar />
            <Container fluid>
                <Row className="taskArea">
                    <Col xs={12} md={12} lg={12}>
                        <h2>Relevant Experience</h2>
                        <Accordion flush alwaysOpen>
                            <Accordion.Item eventKey="0" className="mb-3">
                                <Accordion.Header>
                                    <Row>
                                        <Col xs={12} md={12} lg={12}>
                                            <strong>Information Technology Web Developer Coop</strong>
                                            <div className="years">Sep 2022 - Dec 2022</div>
                                            <div className="place">Toronto, Canada</div>
                                        </Col>
                                    </Row>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={12} md={12} lg={3} className="companyLogo text-center mb-3">
                                            <img className="mb-3" src={require('../img/work experience/faniqueLogo.png')}></img>    <br></br>
                                            <small>FANIQUE is an innovative incubator for business in LIFESTYLE, TECH, and FASHION.</small>
                                        </Col>
                                        <Col xs={12} md={12} lg={9} className="taskPerformed">
                                            <ul className="makeListOfTask">
                                                <li className="taskPerformed(i = for loop) mb-3">
                                                    Audited and analyzed web and mobile applications, and then produced a presentation showcasing the specific information
                                                </li>
                                                <li className="taskPerformed(i = for loop) mb-3">
                                                    Worked together with coworkers and created audit reports and helped in application analysis
                                                </li>
                                                <li className="taskPerformed(i = for loop) mb-3">
                                                    Carried out a Quality Test to identify problems and reported them in weekly meetings
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <Row>
                                        <Col xs={12} md={12} lg={12}>
                                            <strong>Full-Time Software Developer</strong>
                                            <div className="years">Sep 2018 - Jul 2022</div>
                                            <div className="place">Punjab, India</div>
                                        </Col>
                                    </Row>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={12} md={12} lg={3} className="companyLogo text-center mb-3">
                                            <img className="mb-3" src={require('../img/work experience/satyaLogo.png')}></img><br></br>
                                            <small>We specialize in e-commerce solutions designed with one primary objective - to maximize your profits.</small>
                                        </Col>
                                        <Col xs={12} md={12} lg={9} className="taskPerformed">
                                            <ul className="makeListOfTask">
                                                <li className="taskPerformed(i = for loop) mb-3">Developed object-oriented code in that is 100% compliant with business and industry standards</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Launched a data migration feature that allows users to synchronize data between applications with a single click while maintaining security measures</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Protected software against bots and spam by implementing Google reCAPTCHA.</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Builtil usable, responsive, and accessible user interfaces to boost user satisfaction by 30% using frameworks like HTML5, CSS3, Bootstrap4, jQuery, and JavaScript</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Constructed AJAX/JSON APIs that can handle numerous requests to get and post data</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Used data structures and algorithms techniques to receive output quickly and to preserve memory. Presently, the utilizing LeetCode platform to practice more DSAs</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Developed amazing features for an LMS(Learning Management System) that offer an organized training environment</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Successfully resolved complicated challenges in the real-time application to keep a bug-free environment</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Implemented jqx grid system to provide detailed data display, data filtering, and sorting</li>
                                                <li className="taskPerformed(i = for loop) mb-3">Used JIRA software for an agile methodology to track the record of progress at several stages of software</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <Row className="projectsArea">
                    <h2 className="mt-5">Projects</h2>
                    <Row>
                        <Col xs={12} md={4} lg={3} className="mb-5">
                            <Card className="gradient-hover-effect cardCustomCss">
                                <a href="https://pedagog.ac/" target="_blank" style={{ textDecoration: 'none' }}>
                                    <div className="projectLogo">
                                        <Card.Img className="appimg" variant="top" src={require("../img/projects/pedagog.png")} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className="whatIsProject">What is Pedagog? </h5></Card.Title>
                                        <Card.Text>
                                            <small className="shortDesc">
                                                PEDAGOG is the world's first blockchain-powered online education platform.
                                            </small>
                                        </Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} lg={3} className="mb-5">
                            <Card className="gradient-hover-effect cardCustomCss">
                                <a href="https://ezae.in/" target="_blank" style={{ textDecoration: 'none' }}>
                                    <div className="projectLogo">
                                        <Card.Img className="appimg" variant="top" src={require("../img/projects/ezae.png")} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className="whatIsProject">What is EZAE? </h5></Card.Title>
                                        <Card.Text>
                                            <small className="shortDesc">
                                                The LMS App is a learning ecosystem that provides structured training experience to individuals and teams
                                            </small>
                                        </Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} lg={3} className="mb-5">
                            <Card className="gradient-hover-effect cardCustomCss">
                                <a href="https://www.alpinebi.com/" target="_blank" style={{ textDecoration: 'none' }}>
                                    <div className="projectLogo">
                                        <Card.Img className="appimg" variant="top" src={require("../img/projects/alpine.png")} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className="whatIsProject">What is Apline? </h5></Card.Title>
                                        <Card.Text>
                                            <small className="shortDesc">
                                                Business Intelligence Portal
                                            </small>
                                        </Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Col>

                    </Row>
                </Row>
            </Container>
        </>
    )
}
export default Experience;