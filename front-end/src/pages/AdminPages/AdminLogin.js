import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Admin() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter secret code to access admin panel</Form.Label>
                                <Form.Control type="text" name="code" placeholder="Enter code" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Admin