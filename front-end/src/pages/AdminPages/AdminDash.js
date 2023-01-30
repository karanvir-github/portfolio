import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminNav from '../../utils/AdminNavbar'
import '../../fontawesome/css/all.css';
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import homeService from '../../services/home-service.js';
import Toast from 'react-bootstrap/Toast';
import htmlToDraft from 'html-to-draftjs';


function AdminDash() {
    const [aboutmeeditor, setAboutmeeditor] = React.useState(
        () => EditorState.createEmpty(),
    );
    const [highlightseditor, setHighlightseditor] = React.useState(
        () => EditorState.createEmpty(),
    );

    const [id, setId] = useState("")
    const [linkedin, setLinkedIn] = useState("")
    const [github, setGithub] = useState("")
    const [youtube, setYouTube] = useState("")
    const [instagram, setInstagram] = useState("")
    // to get the data and set to fields    
    function getHomeData() {
        homeService.getHomeData().then((response) => {
            if (response.data.length > 0) {
                setId(response.data[0].id)
                setLinkedIn(response.data[0].linkedin)
                setGithub(response.data[0].github)
                setYouTube(response.data[0].youtube)
                setInstagram(response.data[0].instagram)
                renderAboutME(response.data[0].aboutme)
                renderHighLights(response.data[0].highlights)
            }
        })
    }
    function renderAboutME(html) {
        const blocksFromHtml = htmlToDraft(html);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        setAboutmeeditor(EditorState.createWithContent(contentState))
    }
    function renderHighLights(html) {
        const blocksFromHtml = htmlToDraft(html);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        setHighlightseditor(EditorState.createWithContent(contentState))
    }


    // to edit the data
    const [homepagecontent] = useState({
        aboutme: '',
        highlights: '',
        linkedin: '',
        github: '',
        youtube: '',
        instagram: '',
    })
    // toaster
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        let aboutMeContent = aboutmeeditor.getCurrentContent();  // take content from rich text editor
        let rawAboutMe = draftToHtml(convertToRaw(aboutMeContent)) // convert to html for DB

        // same with highlights
        let highlightsContent = highlightseditor.getCurrentContent();
        let rawHighlights = draftToHtml(convertToRaw(highlightsContent))

        homepagecontent["aboutme"] = rawAboutMe
        homepagecontent["highlights"] = rawHighlights
        homepagecontent["id"] = id
        homepagecontent["linkedin"] = linkedin
        homepagecontent["github"] = github
        homepagecontent["youtube"] = youtube
        homepagecontent["instagram"] = instagram

        if (id == null || id == '') {
            homeService.postHomeData(JSON.stringify(homepagecontent)).then((res) => {
                if (res.status === 201) { //201 for new
                    setId(res.data.id)
                    setShow(true)
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }
            })
        } else {
            homeService.updateHomeData(JSON.stringify(homepagecontent), id).then((res) => {
                if (res.status === 200) { //200 for edited
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
        getHomeData();
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
                <Form onSubmit={handleSubmit}>
                    <Form.Control type="hidden" value={id} name="id"></Form.Control>
                    <Row className='mt-3'>
                        <h3 className='text-center'>Change the Home Page content:</h3>
                        <Col className='mt-2' lg={10}>
                            <h2>About Me</h2>
                            <div style={{ backgroundColor: '#fff', padding: '2px' }} >
                                <Editor
                                    editorState={aboutmeeditor}
                                    onEditorStateChange={setAboutmeeditor}
                                />
                            </div>
                        </Col>
                        <Col className='mt-3' lg={10}>
                            <h2>Highlights</h2>
                            <div style={{ backgroundColor: '#fff', padding: '2px' }} >
                                <Editor
                                    editorState={highlightseditor}
                                    onEditorStateChange={setHighlightseditor}
                                />
                            </div>
                        </Col>
                        <h2 className='mt-4'>Social</h2>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={1}>
                                LinkedIn
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='linkedin' value={linkedin} type="text" onChange={(e) => setLinkedIn(e.target.value)} placeholder="profile URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={1}>
                                GitHub
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='github' value={github} type="text" onChange={(e) => setGithub(e.target.value)} placeholder="profile URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={1}>
                                YouTube
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='youtube' value={youtube} type="text" onChange={(e) => setYouTube(e.target.value)} placeholder="profile URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={1}>
                                Instagram
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='instagram' value={instagram} type="text" onChange={(e) => setInstagram(e.target.value)} placeholder="profile URL" />
                            </Col>
                        </Form.Group>
                    </Row >
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </Container >
        </>
    )
}
export default AdminDash