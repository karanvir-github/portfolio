import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AdminNav() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand>Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/admin/dash">
                                <Nav.Link href="#basic">Basic Info</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/admin/skills">
                                <Nav.Link href="#skills">Skills</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/admin/experience">
                                <Nav.Link href="/education">Experience</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/admin/education">
                                <Nav.Link href="/education">Education</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/admin/reviews">
                                <Nav.Link href="/education">Reviews</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default AdminNav;