import Navbar from '../utils/Navbar';
import { Carousel } from 'react-bootstrap'
import '../css/home.css';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function Home() {
    return (
        <>
            <section className="navbar">
                <div className="row">
                    <Navbar />
                </div>
            </section>
            <section className='content'>
                <div className='row'>
                    <div className='col-6 photos'>
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
                    </div>
                    <div className='col-6 myself'>
                        <div className='heading'>
                            <h2>About Me</h2>
                        </div>
                        <div className='intro'>
                            <b>Hello, my name is Karanvir Singh, you can call me KV.<br></br> </b>
                            I have years of expertise developing software, and I have a track record of producing and testing high-quality software to increase business productivity.
                            I am capable of employing MVC concepts, object-oriented approaches, and SQL and NoSQL databases.
                        </div><br></br>
                        <div className='highlights'>
                            <b>What you can expect if you hire me in your organization</b>
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
                        </div><br></br>
                        <div className='reachMe'>
                            <b>Ways to reach me</b><br></br>
                            <ul>
                                <li>
                                    {/* <a href="mailto:karanvirsagar1998@gmail.com" target="_blank"><BsLinkedin /></a> */}
                                    <a href="https://ca.linkedin.com/in/karanvirsagar1998" target="_blank"><BsLinkedin /></a>
                                    <a href="https://github.com/karanvirsagar1998" target="_blank"><BsGithub /></a>
                                    <a href="https://www.instagram.com/kv._.singh/" target="_blank"><BsInstagram /></a>
                                    <a href="https://www.youtube.com/@karanvirsagar1998" target="_blank"><BsYoutube /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="hobbies"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;