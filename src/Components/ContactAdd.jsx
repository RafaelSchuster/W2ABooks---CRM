import React, { useState } from 'react';
import { Button, Container, Form, Col, Alert, Card } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import '../Styles/AccountProfile.css';
import '../Styles/ContactAdd.css';

function ContactAdd() {
    const [error, setError] = useState();
    const [profileValues, setProfileValues] = useState({});
    const [workHistory, setWorkHistory] = useState(false);

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const profileValuesCopy = { ...profileValues };
        profileValuesCopy[name] = value;
        setProfileValues(profileValuesCopy);
        console.log(profileValues);
    };

    const onWorkHistory = (e) => {
        const { value } = e.target;
        setWorkHistory(!!parseInt(value));
    }

    const submitProfile = () => {

    }

    return (
        <div>
            <Container className="container-profile">
                <Card border="light">
                    <Card.Header as="h2" className="text-center card-title-header"><span className="boldening">Add New Contact</span></Card.Header>
                    <Card.Body className="add-contact-form">
                        <Card.Text>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={e => submitProfile(e)}>
                                <Form.Row>
                                    <Col>
                                        <Form.Control placeholder="First name" name="firstName"
                                            onChange={handleInputChange} required />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" name="lastName"
                                            onChange={handleInputChange} required />
                                    </Col>
                                    <Col>
                                        <Form.Control type='number' placeholder="Telephone Number" name="telephone"
                                            onChange={handleInputChange} />
                                    </Col>
                                </Form.Row>
                                <Form.Row >
                                    <Col>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control type="email" placeholder="Email" name="email"
                                                onChange={handleInputChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Label></Form.Label>
                                        <Form.Control name="company" placeholder="Company" onChange={handleInputChange}></Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label></Form.Label>
                                        <Form.Control name="job_title" placeholder="Job Title" onChange={handleInputChange}></Form.Control>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col xs="4">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label></Form.Label>
                                            <Form.Control as="select" onChange={onWorkHistory} name="workHistory">
                                                <option value="">-- Ever worked together? --</option>
                                                <option value='1'>Yes</option>
                                                <option value='0'>No</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    {<Col>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label></Form.Label>
                                            <Form.Control as="textarea" rows={1} placeholder="Please describe your work history together"
                                                name="workHistoryDescription" onChange={handleInputChange} disabled={!workHistory} />
                                        </Form.Group>
                                    </Col>}
                                </Form.Row>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="About"
                                        name="personalBio" onChange={handleInputChange} />
                                </Form.Group>
                                <Button className="w-100 mt-4" variant="success" type="submit"
                                >
                                    Add Contact
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default ContactAdd;