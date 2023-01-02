import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Navbar() {
    return (

        <Nav variant="pills">
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link eventKey="/">Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/work-history">
                    <Nav.Link eventKey="work-history">Work History</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/study-background">
                    <Nav.Link eventKey="study-background">Study Background</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#" disabled>
                    Coming soon
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;