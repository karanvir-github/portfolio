import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import AdminNav from '../../utils/AdminNavbar'
import Table from 'react-bootstrap/Table';
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import Toast from 'react-bootstrap/Toast';
import htmlToDraft from 'html-to-draftjs';
import experienceService from '../../services/experience-service';

function AdminShowAllExperiences() {

    //get data to set fields...
    const [experience, setExperience] = useState([])

    const getAllExperiences = () => {
        experienceService.getExperienceData().then((res) => {
            if (res.data.length > 0) {
                setExperience(res.data);
            }
        })
    }
    useEffect(() => {
        getAllExperiences();
    }, [])
    return (
        <>
            <AdminNav></AdminNav>
            <Container>
                <Row>
                    <Table striped bordered hover style={{ marginTop: '100px', background: 'aliceblue' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Job Title</th>
                                <th>Company Name</th>
                                <th>Company Location</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Tasks Performed</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                experience.map(ex =>
                                    <tr eventKey={ex.id}>
                                        <td>1</td>
                                        <td>{ex.jobTitle}</td>
                                        <td>{ex.companyName}</td>
                                        <td>{ex.place}</td>
                                        <td>{ex.startDate}</td>
                                        <td>{ex.endDate}</td>
                                        <td>{ex.taskPerformed}</td>
                                        <td>
                                            <a href={"experience/edit/" + ex.id} style={{ textDecoration: 'none', color: '#0b77f9', cursor: 'pointer', margin: '0px 5px 0px 5px' }}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <a href='' style={{ textDecoration: 'none', color: 'red', cursor: 'pointer', margin: '0px 5px 0px 5px' }}>
                                                <i className="fa-solid fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default AdminShowAllExperiences