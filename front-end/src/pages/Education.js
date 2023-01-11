import Navbar from '../utils/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import '../css/education.css';
function Education() {
    return (
        <>
            <Navbar />
            <Container fluid>
                <Row className="taskArea">
                    <Col xs={12} md={12} lg={12}>
                        <h2>Study Background</h2>
                        <Accordion flush alwaysOpen>
                            <Accordion.Item eventKey="0" className="mb-3">
                                <Accordion.Header>
                                    <Row>
                                        <Col xs={12} md={12} lg={12}>
                                            <strong>CSAT - Computer Software & Database Development</strong>
                                            <div className="years">May 2021 - Dec 2022</div>
                                            <div className="place">Toronto, Canada</div>
                                        </Col>
                                    </Row>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={12} md={12} lg={3} className="institutionLogo text-center mb-3">
                                            <a href="https://www.lambtoncollege.ca/" target="_blank">
                                                <img className="mb-3" src={require('../img/education/lambton.jpg')}></img>    <br></br>
                                                <small>Lambton College is a provincial leader in education, training, and applied research.</small>
                                            </a>
                                        </Col>
                                        <Col xs={12} md={12} lg={9} className="course">
                                            <ul className="makeListOfCourse">
                                                <li className="course(i = for loop) mb-3">
                                                    Front-end languages: HTML5, CSS3, JavaScript, jQuery, Bootstrap, React.
                                                </li>
                                                <li className="course(i = for loop) mb-3">
                                                    Programming languages and frameworks such as Java, C# .NET, Python, Django, Node.js and others.
                                                </li>
                                                <li className="course(i = for loop) mb-3">
                                                    Databases: SQL, PL/SQL, and NoSQL.
                                                </li>
                                                <li className="course(i = for loop) mb-3">
                                                    Project Management: Agile & Waterfall.
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="mb-3">
                                <Accordion.Header>
                                    <Row>
                                        <Col xs={12} md={12} lg={12}>
                                            <strong>BCA - Bachelor in Computer Applications</strong>
                                            <div className="years">Jul 2017 - Sep 2020</div>
                                            <div className="place">Punjab, India</div>
                                        </Col>
                                    </Row>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={12} md={12} lg={3} className="institutionLogo text-center mb-3">
                                            <a href="https://www.pu.ac.in/" target="_blank">
                                                <img className="mb-3" src={require('../img/education/pu.jpg')}></img><br></br>
                                                <small>The University Institute of Pharmaceutical Sciences, Business School, Bio Sciences, Arts Faculty, Languages.<br></br>Pure and applied science are par-excellence and have fame over the Globe.</small>
                                            </a>
                                        </Col>
                                        <Col xs={12} md={12} lg={9} className="course">
                                            <ul className="makeListOfCourse">
                                                <li className="course(i = for loop) mb-3">
                                                    Front-end languages: HTML5, CSS3, JavaScript, jQuery, Bootstrap.
                                                </li>
                                                <li className="course(i = for loop) mb-3">
                                                    Majors: Data Structures, OOPS, Statistics, Computer Organization, DBMS, Programming Languages (C, C++, Java, PHP), Software Project Management, SDLC.
                                                </li>
                                                <li className="course(i = for loop) mb-3">
                                                    Activities and societies: Punjabi Folk Dance (Bhangra), Orchestra, Volleyball, Marketing Fest.
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="mb-3">
                                <Accordion.Header>
                                    <Row>
                                        <Col xs={12} md={12} lg={12}>
                                            <strong>Web Developer & Designer</strong>
                                            <div className="years">Jul 2020 - Dec 2020</div>
                                            <div className="place">Punjab, India</div>
                                        </Col>
                                    </Row>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={12} md={12} lg={3} className="institutionLogo text-center mb-3">
                                            <a href="https://webncc.in/" target="_blank">
                                                <img className="mb-3" src={require('../img/education/webncc.jpg')}></img><br></br>
                                                <small>An institute for web site and software solutions as well as for industrail training in PHP, Java, C/C++ development.</small>
                                            </a>
                                        </Col>
                                        <Col xs={12} md={12} lg={9} className="course">
                                            <ul className="makeListOfCourse">
                                                <li className="course(i = for loop) mb-3">
                                                    Front-end languages: HTML5, CSS3, Bootstrap 4.0, JavaScript.
                                                </li>
                                                <li className="course(i = for loop) mb-3">
                                                    Back-end language: php7
                                                </li>
                                                <li className="course(i = for loop) mb-3">
                                                    Database: MySQL
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Education;