import Navbar from '../utils/Navbar';
import Contact from './Contact';
import { Carousel } from 'react-bootstrap'
import '../css/home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeService from '../services/home-service'
import SkillService from '../services/skill-service'
import { useState, useEffect } from 'react';
import '../fontawesome/css/all.css';

function Home() {
    const [aboutMe, setAboutMe] = useState("")
    const [highlights, setHighlights] = useState("")
    const [pages, setPages] = useState("")

    useEffect(() => {
        getHomeData();
        getSkills();
    }, [])

    function getHomeData() {
        HomeService.getHomeData().then((response) => {
            setAboutMe(response.data[0].aboutme)
            setHighlights(response.data[0].highlights)
            setPages(response.data[0].pages)
        })
    }

    const [languages, setLanguages] = useState("")
    const [frameworks, setFrameworks] = useState("")
    const [tools, setTools] = useState("")

    function getSkills() {
        SkillService.getSkills().then((response) => {
            setLanguages(response.data[0].languages)
            setFrameworks(response.data[0].frameworks)
            setTools(response.data[0].tools)
        })
    }
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
                        <div className='intro mb-3' dangerouslySetInnerHTML={{ __html: aboutMe }} />
                        <div className='highlights mb-3' dangerouslySetInnerHTML={{ __html: highlights }} />
                        <b>Pages</b>
                        <div className='pages mb-3' dangerouslySetInnerHTML={{ __html: pages }} />
                        <div className="skills mb-3">
                            <strong>Skills</strong>
                            <ul>
                                <li>Languages: {languages}</li>
                                <li>Frameworks:{frameworks}</li>
                                <li>Tools: {tools}</li>
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