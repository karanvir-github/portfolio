import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import validator from "validator";

function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setFormValues("")
    };
    const handleShow = () => setShow(true);
    const [formValues, setFormValues] = useState({
        email: "",
        message: ""
    });
    const onUpdateField = e => {
        const nextFormState = {
            ...formValues,
            [e.target.name]: e.target.value,
        };
        console.log(nextFormState);
        setFormValues(nextFormState);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (!validator.isEmail(formValues.email)) {
            alert("Please enter valid Email !!");
        } else {
            alert(JSON.stringify(formValues));
            // submit here
        }
    }
    return (
        <>
            <section className="contact">
                <Button className="contactMeBtn" variant="primary" onClick={handleShow}>
                    Contact Me
                </Button>
                <Form name="contactMe">
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Contact Me</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" value={formValues.email} onChange={onUpdateField} />
                                <Form.Text className="text-muted"> I'll never share your email with anyone else. </Form.Text>
                            </Form.Group>
                            <FloatingLabel controlId="floatingTextarea2" label="Message">
                                <Form.Control as="textarea" placeholder="Leave a message here" name="message" style={{ height: '100px' }} value={formValues.message} onChange={onUpdateField} />
                            </FloatingLabel>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Never Mind</Button>
                            <Button type="submit" onClick={handleSubmit} variant="primary">Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </section>
        </>
    );
}
export default Contact;