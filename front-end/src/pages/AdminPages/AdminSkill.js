import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminNav from '../../utils/AdminNavbar'
import Toast from 'react-bootstrap/Toast';
import skillService from '../../services/skill-service'

function AdminSkill() {

    const [id, setId] = useState("")
    const [languages, setLanguages] = useState("")
    const [frameworks, setFrameworks] = useState("")
    const [tools, setTools] = useState("")
    // to get the data and set to fields
    function getSKillData() {
        skillService.getSkills().then((response) => {
            if (response.data.length > 0) {
                setId(response.data[0].id)
                setLanguages(response.data[0].languages)
                setFrameworks(response.data[0].frameworks)
                setTools(response.data[0].tools)
            }
        })
    }

    // to edit the data
    const [skills] = useState({
        languages: '',
        frameworks: '',
        tools: ''
    })
    // toaster
    const [show, setShow] = useState(false);
    function submitSkillForm(e) {
        e.preventDefault();
        skills["languages"] = languages
        skills["frameworks"] = frameworks
        skills["tools"] = tools
        if (id == null || id == '') {
            skillService.createSkill(skills).then((res) => {
                if (res.status === 201) { // code 201 means that data is created
                    setId(res.data.id)
                    setShow(true)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }
            })
        } else {
            skillService.updateSkill(skills, id).then((res) => {
                if (res.status === 201) { // code 201 means that data is created
                    setShow(true)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }
            })
        }
    }
    useEffect(() => {
        getSKillData();
    }, [])
    return (
        <>
            <Container>
                <AdminNav></AdminNav>
                {/* toaster settings */}
                <Row style={{ marginTop: '60px' }}>
                    <Toast onClose={() => setShow(false)} style={{ margin: 'auto' }} show={show} autohide delay={3000}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Message</strong>
                        </Toast.Header>
                        <Toast.Body className='text-center' style={{ backgroundColor: '#a3fdc6' }}>Success, content updated!</Toast.Body>
                    </Toast>
                </Row>
                <Form style={{ marginTop: '50px' }} onSubmit={submitSkillForm} >
                    <Row>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={1}>
                                Languages
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='languages' value={languages} type="text" onChange={(e) => setLanguages(e.target.value)} placeholder="comma seperated..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={1}>
                                Frameworks
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='frameworks' value={frameworks} type="text" onChange={(e) => setFrameworks(e.target.value)} placeholder="comma seperated..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={1}>
                                Tools
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='tools' value={tools} type="text" onChange={(e) => setTools(e.target.value)} placeholder="comma seperated..." />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default AdminSkill