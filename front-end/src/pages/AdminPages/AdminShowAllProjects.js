import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminNav from '../../utils/AdminNavbar'
import Table from 'react-bootstrap/Table';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import projectService from '../../services/project-service';
import $ from 'jquery'

function AdminShowAllProjects() {

    //get data to set fields...
    const [project, setProject] = useState([])
    let counter = 0
    const getAllProjects = () => {
        projectService.getProjectData().then((res) => {
            if (res.data.length > 0) {
                setProject(res.data);
            }
        })
    }
    const deleteProject = async (id) => {
        $('#deleteProcess' + id).removeClass()
        $('#deleteProcess' + id).addClass('fas fa-spinner fa-pulse')
        await projectService.deleteProjectData(id).then((res) => {
            if (res.status == 200) {
                setProject(project.filter((ed) => {
                    return ed.id !== id;
                }));
            }
        })
    }
    useEffect(() => {
        getAllProjects();
    }, [])
    return (
        <>
            <AdminNav></AdminNav>
            <Container>
                <Row>
                    <Col style={{ marginTop: '63px' }}>
                        <h3>Relevant Project <a href='project/new' title='Add New'><i className="fa-solid fa-plus"></i></a></h3>
                    </Col>
                    <Table striped bordered hover style={{ background: 'aliceblue' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Project Name</th>
                                <th>Project Url</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                project.map(project =>
                                    <tr key={project.id}>
                                        <td>{counter += 1}</td>
                                        <td>{project.projectName}</td>
                                        <td>{project.projectUrl}</td>
                                        <td>
                                            <a href={`project/edit/${project.id}`} style={{ textDecoration: 'none', color: '#0b77f9', cursor: 'pointer', margin: '0px 5px 0px 5px' }}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <a onClick={() => deleteProject(project.id)} style={{ textDecoration: 'none', color: 'red', cursor: 'pointer', margin: '0px 5px 0px 5px' }}>
                                                <i className='fa-solid fa-trash' id={`deleteProcess${project.id}`}></i>
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

export default AdminShowAllProjects