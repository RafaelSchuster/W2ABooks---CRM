import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Col, Alert, Card } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import '../Styles/AccountProfile.css'
import NationalitiesDrop from './NationalitiesDrop';
import '../Styles/ContactAdd.css'

function ContactAdd() {
    const [error, setError] = useState();
    const [profileValues, setProfileValues] = useState({});
    const { nationality, thisUser } = useContext(MainContext);


    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const profileValuesCopy = { ...profileValues };
        profileValuesCopy[name] = value;
        setProfileValues(profileValuesCopy);
        console.log(profileValues);
    };

    useEffect(() => {
        const profileValuesCopy = { ...profileValues };
        if (nationality) profileValuesCopy['agentNationality'] = nationality;
        setProfileValues(profileValuesCopy);
    }, [nationality])

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
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="About" defaultValue={thisUser.bio}
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