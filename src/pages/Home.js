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
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/seed/picsum/200/300"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/200/300?grayscale"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
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
                        <div className='links'>
                            <b>Ways to reach me</b><br></br>
                            <ul>
                                <li> <a href="#"><BsInstagram /></a>
                                    <a href="#"><BsLinkedin /></a>
                                    <a href="#"><BsYoutube /></a>
                                    <a href="#"><BsGithub /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;