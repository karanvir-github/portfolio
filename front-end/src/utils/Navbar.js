import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand>Welcome to my Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/work-history">
                                <Nav.Link href="#experience">Experience</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/study-background">
                                <Nav.Link href="#education">Education</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;