import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminNav from '../../utils/AdminNavbar'
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import Toast from 'react-bootstrap/Toast';
import htmlToDraft from 'html-to-draftjs';
import experienceService from '../../services/experience-service';
import '../../fontawesome/css/all.css';
import { useNavigate, useParams } from 'react-router-dom';

function AdminExperience() {
    const [taskeditor, setTaskeditor] = React.useState(
        () => EditorState.createEmpty(),
    );
    const navigate = useNavigate();
    const { id } = useParams();

    //get data to set fields...
    const [jobtitle, setJobtitle] = useState("")
    const [companyname, setCompanyname] = useState("")
    const [startdate, setStartdate] = useState("")
    const [enddate, setEnddate] = useState("")
    const [place, setPlace] = useState("")
    const [link, setLink] = useState("")

    const getExperienceById = (id) => {
        experienceService.getExperienceDataById(id).then((res) => {
            if (res.data) {
                setCompanyname(res.data.companyName)
                setJobtitle(res.data.jobTitle);
                setStartdate(res.data.startDate);
                setEnddate(res.data.endDate);
                setPlace(res.data.place);
                setLink(res.data.companyLink);
                renderTaskPerformed(res.data.taskPerformed)
            }
        })
    }

    function renderTaskPerformed(html) {
        const blocksFromHtml = htmlToDraft(html);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        setTaskeditor(EditorState.createWithContent(contentState))
    }

    //  submit experince Data
    const [experience] = useState({
        jobTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
        place: '',
        companyLink: '',
        taskPerformed: ''
    })
    const [show, setShow] = useState(false); //toaster
    const submitExperienceForm = (e) => {
        e.preventDefault();
        experience["jobTitle"] = jobtitle
        experience["companyName"] = companyname
        experience["startDate"] = new Date(startdate + "EST")
        experience["endDate"] = new Date(enddate + "EST")
        experience["place"] = place
        experience["companyLink"] = link

        let taskPerformedContent = taskeditor.getCurrentContent();  // take content from rich text editor
        let rawTaskPerformed = draftToHtml(convertToRaw(taskPerformedContent)) // convert to html for DB
        experience["taskPerformed"] = rawTaskPerformed

        if (id == null || id == '') {
            experienceService.postExperienceData(JSON.stringify(experience)).then((res) => {
                if (res.status === 201) { // code 201 means that data is created
                    setShow(true)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }
            })
        } else {
            experienceService.updateExperienceData(JSON.stringify(experience), id).then((res) => {
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
            getExperienceById(id);
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
                <Form style={{ marginTop: '50px' }} onSubmit={submitExperienceForm} >
                    <Row>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Job Title
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='jobtitle' value={jobtitle} type="text" onChange={(e) => setJobtitle(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Company Name
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control name='company' value={companyname} type="text" onChange={(e) => setCompanyname(e.target.value)} placeholder="type here..." />
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
                                Task Performed
                            </Form.Label>
                            <Col sm={10}>
                                <div style={{ backgroundColor: '#fff', padding: '2px' }} >
                                    <Editor
                                        editorState={taskeditor}
                                        onEditorStateChange={setTaskeditor}
                                    />
                                </div>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Company Link (<i>optional</i>)
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control name='link' value={link} type="text" onChange={(e) => setLink(e.target.value)} placeholder="type here..." />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default AdminExperience