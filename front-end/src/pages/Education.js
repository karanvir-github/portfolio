import Navbar from '../utils/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/education.css';
import EducationService from '../services/education-service';
import { useEffect, useState } from 'react';

function Education() {

    const [education, setEducation] = useState([])

    useEffect(() => {
        getallEducation();
    }, [])

    function getallEducation() {
        EducationService.getEducationData().then((response) => {
            setEducation(response.data)
        })
    }
    const monthNames = ["Jan", "Feb", "March", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return (
        <>
            <Navbar />
            <Container fluid>
                <Row className="educationArea">
                    <Col xs={12} md={12} lg={12}>
                        <h2>Study Background</h2>
                        {
                            education.map(edu =>
                                <Row key={edu.id} style={{ padding: '15px', marginBottom: '15px', backgroundColor: '#fff' }}>
                                    <Col xs={12} md={12} lg={9}>
                                        <strong>{edu.courseType}</strong> - {edu.courseName}
                                    </Col>
                                    <Col xs={12} md={12} lg={3}>
                                        <div className='text-end'>{monthNames[new Date(edu.startDate + "EST").getMonth()]} {new Date(edu.startDate + "EST").getFullYear()} - {monthNames[new Date(edu.endDate + "EST").getMonth()]} {new Date(edu.endDate + "EST").getFullYear()}</div>
                                    </Col>
                                    <Col xs={12} md={12} lg={12}>
                                        <div className="place">{edu.place}</div>
                                    </Col>
                                    <Col xs={12} md={12} lg={3} className="institutionName">
                                        <a href={edu.institutionLink} target="_blank">{edu.institutionName}</a>
                                    </Col>
                                </Row>
                            )
                        }
                    </Col>
                </Row>
            </Container >
        </>
    )
}
export default Education;