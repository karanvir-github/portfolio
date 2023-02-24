import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AdminNav from '../../utils/AdminNavbar'
import Table from 'react-bootstrap/Table';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import educationService from '../../services/education-service';
import $ from 'jquery'

function AdminShowAllEducations() {

    //get data to set fields...
    const [education, setEducation] = useState([])
    let counter = 0
    const getAllEducations = () => {
        educationService.getEducationData().then((res) => {
            if (res.data.length > 0) {
                setEducation(res.data);
            }
        })
    }
    const [deleteIconClass, setDeleteIconClass] = useState('')
    const deleteEducation = async (id) => {
        $('#deleteProcess' + id).removeClass()
        $('#deleteProcess' + id).addClass('fas fa-spinner fa-pulse')
        await educationService.deleteEducationData(id).then((res) => {
            if (res.status == 200) {
                setEducation(education.filter((ed) => {
                    return ed.id !== id;
                }));
            }
        })
    }
    useEffect(() => {
        getAllEducations();
    }, [])
    return (
        <>
            <AdminNav></AdminNav>
            <Container>
                <Row>
                    <Col style={{ marginTop: '63px' }}>
                        <h3>Relevant Education <a href='education/new' title='Add New'><i className="fa-solid fa-plus"></i></a></h3>
                    </Col>
                    <Table striped bordered hover style={{ background: 'aliceblue' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Course Name</th>
                                <th>Course Type</th>
                                <th>Place</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                education.map(ed =>
                                    <tr key={ed.id}>
                                        <td>{counter += 1}</td>
                                        <td>{ed.courseName}</td>
                                        <td>{ed.courseType}</td>
                                        <td>{ed.place}</td>
                                        <td>{ed.startDate}</td>
                                        <td>{ed.endDate}</td>
                                        <td>
                                            <a href={`education/edit/${ed.id}`} style={{ textDecoration: 'none', color: '#0b77f9', cursor: 'pointer', margin: '0px 5px 0px 5px' }}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <a onClick={() => deleteEducation(ed.id)} style={{ textDecoration: 'none', color: 'red', cursor: 'pointer', margin: '0px 5px 0px 5px' }}>
                                                <i className='fa-solid fa-trash' id={`deleteProcess${ed.id}`}></i>
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

export default AdminShowAllEducations