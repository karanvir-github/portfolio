import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminNav from '../../utils/AdminNavbar'
import educationService from '../../services/education-service';
import Toast from 'react-bootstrap/Toast';
import { useNavigate, useParams } from 'react-router-dom';

function AdminAddEducation() {
    const navigate = useNavigate();
    const { id } = useParams();

    //get data to set fields...
    const [coursename, setCoursename] = useState("")
    const [coursetype, setCoursetype] = useState("")
    const [startdate, setStartdate] = useState("")
    const [enddate, setEnddate] = useState("")
    const [place, setPlace] = useState("")
    const [institutionname, setInstitutionname] = useState("")
    const [institutionlink, setinstitutionLink] = useState("")

    //get data with id
    const getAllEducationDataById = (id) => {
        educationService.getEducationDataById(id).then((res) => {
            if (res.data) {
                setCoursename(res.data.courseName)
                setCoursetype(res.data.courseType)
                setStartdate(res.data.startDate)
                setEnddate(res.data.endDate)
                setPlace(res.data.place)
                setInstitutionname(res.data.institutionName)
                setinstitutionLink(res.data.institutionLink)
            }
        })
    }

    //submit education data
    const [education] = useState({
        courseName: '',
        courseType: '',
        endDate: '',
        startDate: '',
        institutionLink: '',
        institutionName: '',
        learning: '',
        place: '',
    })

    const [show, setShow] = useState(false); //toaster
    function submitEducationForm(e) {
        e.preventDefault();
        education["courseName"] = coursename
        education["courseType"] = coursetype
        education["institutionLink"] = institutionlink
        education["institutionName"] = institutionname
        education["place"] = place
        education["startDate"] = new Date(startdate + "EST")
        education["endDate"] = new Date(enddate + "EST")
        if (id == null || id == '') {
            educationService.postEducationData(JSON.stringify(education)).then((res) => {
                if (res.status === 201) { // code 201 means that data is created
                    setShow(true)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }
            })
        } else {
            educationService.updateEducationData(JSON.stringify(education), id).then((res) => {
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
        if (id) {
            getAllEducationDataById(id);
        }
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
                <Form style={{ marginTop: '50px' }} onSubmit={submitEducationForm} >
                    <Row>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Course Name
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='coursename' value={coursename} type="text" onChange={(e) => setCoursename(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Course Type
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='coursetype' value={coursetype} type="text" onChange={(e) => setCoursetype(e.target.value)} placeholder="type here..." />
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
                                Institution Name
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='institutionname' value={institutionname} type="text" onChange={(e) => setInstitutionname(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Instituion Link (<i>optional</i>)
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control name='institutionlink' value={institutionlink} type="text" onChange={(e) => setinstitutionLink(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default AdminAddEducation