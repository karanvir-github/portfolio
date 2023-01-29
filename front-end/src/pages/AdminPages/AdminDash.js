import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../fontawesome/css/all.css';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from 'draft-js';
function AddDash() {
    const [aboutmeeditor, setAboutmeeditor] = React.useState(
        () => EditorState.createEmpty(),
    );
    const [highlightseditor, setHighlightseditor] = React.useState(
        () => EditorState.createEmpty(),
    );
    const [homepagecontent, setHomepagecontent] = useState({
        linkedin: "",
        github: "",
        youtube: "",
        instagram: "",
        aboutme: "",
        highlights: ""
    })
    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setHomepagecontent({ ...homepagecontent, [name]: value });
        console.log(name, value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // take content from rich text editor
        let aboutMeContent = aboutmeeditor.getCurrentContent();
        // convert to raw-json for DB
        let rawAboutMe = JSON.stringify(convertToRaw(aboutMeContent))
        // add to obj
        homepagecontent["aboutme"] = rawAboutMe

        // same with highlights and
        let highlightsContent = highlightseditor.getCurrentContent();
        let rawHighlights = JSON.stringify(convertToRaw(highlightsContent))
        homepagecontent["highlights"] = rawHighlights

        // make a new obj and send to DB with axios
        const records = { ...homepagecontent }
    };
    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
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
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                LinkedIn
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='linkedin' value={setHomepagecontent.linkedin} type="text" onChange={handleInput} placeholder="profile URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                GitHub
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='github' value={setHomepagecontent.github} type="text" onChange={handleInput} placeholder="profile URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                YouTube
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='youtube' value={setHomepagecontent.youtube} type="text" onChange={handleInput} placeholder="profile URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                Instagram
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name='instagram' value={setHomepagecontent.instagram} type="text" onChange={handleInput} placeholder="profile URL" />
                            </Col>
                        </Form.Group>
                    </Row >
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </Container >
        </>
    )
}

export default AddDash










