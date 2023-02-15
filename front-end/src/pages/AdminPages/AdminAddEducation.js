import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminNav from '../../utils/AdminNavbar'
import educationService from '../../services/education-service';

function AdminEducation() {
    //get data with id
    const getAllEducationDataById = (id) =>{
        educationService.getAllEducationData
    }
    //submit education data
    const [education] = useState({
        courseName: '',
        courseType: '',
        endDate: '',
        institutionLogo: '',
        institutionSlogan: '',
        learning: '',
        place: '',
        startDate: ''
    })
    const [show, setShow] = useState(false); //toaster
    const submitExperienceForm = (e) => {
        e.preventDefault();
        education["courseName"] = coursename
        education["courseType"] = coursetype
        education["institutionLogo"] = institutionlogo
        education["institutionSlogan"] = institutionslogan
        education["learning"] = learning
        education["place"] = place
        education["startDate"] = new Date(startdate + "EST")
        education["endDate"] = new Date(enddate + "EST")

        if (id == null || id == '') {
            educationService.postExperienceData(JSON.stringify(experience)).then((res) => {
                if (res.status === 201) { // code 201 means that data is created
                    setShow(true)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }
            })
        } else {
            educationService.updateExperienceData(JSON.stringify(experience), id).then((res) => {
                if (res.status === 201) { // code 201 means that data is created
                    setShow(true)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                    navigate(-1)
                }
            })
        }
    }
    useEffect(() => {
        getAllEducationDataById();
    })
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
                <Form style={{ marginTop: '50px' }} onSubmit={submitExperienceForm} >
                    <Row>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Job Title
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='coursename' value={coursename} type="text" onChange={(e) => setCoursename(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Company Name
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='company' value={coursetype} type="text" onChange={(e) => setCoursetype(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Start Date
                            </Form.Label>
                            <Col sm={2}>
                                <Form.Control name='startdate' value={startdate} type="date" onChange={(e) => setStartdate(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                End Date
                            </Form.Label>
                            <Col sm={2}>
                                <Form.Control name='enddate' value={enddate} type="date" onChange={(e) => setEnddate(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Place
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='place' value={place} type="text" onChange={(e) => setPlace(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Company Logo (<i>optional</i>)
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='institutionname' value={institutionname} type="file" onChange={(e) => setInstitutionname(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Company Slogan (<i>optional</i>)
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control name='institutionslogan' value={institutionslogan} type="text" onChange={(e) => setInstitutionSlogan(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Company Slogan (<i>optional</i>)
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control name='learning' value={learning} type="text" onChange={(e) => setLearning(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default AdminEducation