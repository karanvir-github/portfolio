import Navbar from '../utils/Navbar';
import Contact from './Contact';
import { Carousel } from 'react-bootstrap'
import '../css/home.css';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    return (
        <>
            <Navbar />
            <Container fluid>
                <Row className="mt-3">
                    <Col xs={12} md={5} lg={6}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/1.jpg')} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/2.jpg')} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/3.jpg')} alt="Third slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/4.jpg')} alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={7} lg={6}>
                        <div className='heading mb-3'>
                            <h2>About Me...</h2>
                        </div>
                        <div className='intro mb-3'>
                            <strong>Hello, my name is Karanvir Singh, you can call me KV. </strong><br></br>
                            I have years of expertise developing software, and I have a track record of producing and testing high-quality software to increase business productivity.
                            I am capable of employing MVC concepts, object-oriented approaches, and SQL and NoSQL databases.
                        </div>
                        <div className='highlights mb-3'>
                            <b>What you will receive if you employ me for your company</b>
                            <ul>
                                <li>
                                    A dynamic, positive, and personable individual with strong analytical abilities.
                                </li>
                                <li>
                                    Capable of debugging code and offering documentation to other developers.
                                </li>
                                <li>
                                    Strong communication, and presentation skills with an aptitude for building relationships at all levels.
                                </li>
                            </ul>
                        </div>
                        <div className='pages mb-3'>
                            <b>Pages</b>
                            <ul>
                                <li>
                                    <a href="https://ca.linkedin.com/in/karanvirsagar1998" target="_blank"><BsLinkedin /></a>
                                    <a href="https://github.com/karanvirsagar1998" target="_blank"><BsGithub /></a>
                                    <a href="https://www.instagram.com/kv._.singh/" target="_blank"><BsInstagram /></a>
                                    <a href="https://www.youtube.com/@karanvirsagar1998" target="_blank"><BsYoutube /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="skills mb-3">
                            <strong>Skills</strong>
                            <ul>
                                <li>Languages: </li>
                                <li>Frameworks:</li>
                                <li>Tools: </li>
                            </ul>
                        </div>
                        <div className="contactMe mb-3">
                            <Contact />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;