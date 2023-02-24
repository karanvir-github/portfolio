import Navbar from '../utils/Navbar';
import Contact from './Contact';
import '../css/home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeService from '../services/home-service'
import SkillService from '../services/skill-service'
import { useState, useEffect } from 'react';
import '../fontawesome/css/all.css';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Home() {
    const [aboutMe, setAboutMe] = useState("")
    const [highlights, setHighlights] = useState("")
    const [linkedin, setLinkedIn] = useState("")
    const [github, setGithub] = useState("")
    const [youtube, setYouTube] = useState("")
    const [instagram, setInstagram] = useState("")
    const [leetcode, setLeetcode] = useState("")

    function getHomeData() {
        HomeService.getHomeData().then((response) => {
            setAboutMe(response.data[0].aboutme)
            setHighlights(response.data[0].highlights)
            setLinkedIn(response.data[0].linkedin)
            setGithub(response.data[0].github)
            setYouTube(response.data[0].youtube)
            setInstagram(response.data[0].instagram)
            setLeetcode(response.data[0].leetcode)
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

    useEffect(() => {
        getHomeData();
        getSkills();
    }, [])

    return (
        <>
            <Navbar />
            <Container fluid>
                <Row style={{ marginTop: '55px' }}>
                    <Col xs={12} md={5} lg={4}>
                        <img className="d-block w-100" src={require('../img/1.jpg')} alt="First slide" />
                    </Col>
                    <Col xs={12} md={7} lg={8}>
                        <div className='heading mt-3 mb-2'>
                            <h2>About Me...</h2>
                        </div>
                        <div className='intro mb-3' dangerouslySetInnerHTML={{ __html: aboutMe }} />
                        <h2>Highlights...</h2>
                        <div className='highlights mb-3' dangerouslySetInnerHTML={{ __html: highlights }} />
                        <b>Pages...</b>
                        <div className='pages mb-3'>
                            <a href={linkedin} target="_blank"><BsLinkedin></BsLinkedin></a>
                            <a href={github} target="_blank"><BsGithub></BsGithub></a>
                            <a href={youtube} target="_blank"><BsYoutube></BsYoutube></a>
                            <a href={instagram} target="_blank"><BsInstagram></BsInstagram></a>
                            <a href={leetcode} target="_blank">LeetCode</a>
                        </div>
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