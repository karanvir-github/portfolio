import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminNav from '../../utils/AdminNavbar'
import Toast from 'react-bootstrap/Toast';
import projectService from '../../services/project-service';
import '../../fontawesome/css/all.css';
import { useNavigate, useParams } from 'react-router-dom';

function AdminProject() {
    const navigate = useNavigate();
    const { id } = useParams();

    //get data to set fields...
    const [projectname, setProjectname] = useState("")
    const [projecturl, setProjecturl] = useState("")

    const getProjectById = (id) => {
        projectService.getProjectDataById(id).then((res) => {
            if (res.data) {
                setProjectname(res.data.projectName)
                setProjecturl(res.data.projectUrl);
            }
        })
    }

    //  submit experince Data
    const [project] = useState({
        projectName: '',
        projectUrl: '',
    })
    const [show, setShow] = useState(false); //toaster
    const submitProjectForm = (e) => {
        e.preventDefault();
        project["projectName"] = projectname
        project["projectUrl"] = projecturl

        if (id == null || id == '') {
            projectService.postProjectData(JSON.stringify(project)).then((res) => {
                if (res.status === 201) { // code 201 means that data is created
                    setShow(true)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                    navigate(-1)
                }
            })
        } else {
            projectService.updateProjectData(JSON.stringify(project), id).then((res) => {
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
            getProjectById(id);
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
                <Form style={{ marginTop: '50px' }} onSubmit={submitProjectForm} >
                    <Row>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Project Name
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='projectname' value={projectname} type="text" onChange={(e) => setProjectname(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Project Link
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='projecturl' value={projecturl} type="text" onChange={(e) => setProjecturl(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default AdminProject