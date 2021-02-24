import React, { useContext, useState } from 'react';
import { Button, Container, Form, Col, Alert, Card } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import '../Styles/AccountProfile.css'
import NationalitiesDrop from './NationalitiesDrop';
import DefaultImg from '../images/default_user.png'

function AccountProfile() {
    const [error, setError] = useState();
    const [loginValues, setSLoginValues] = useState({});
    const { thisUser } = useContext(MainContext)


    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const loginValuesCopy = { ...loginValues };
        loginValuesCopy[name] = value;
        setSLoginValues(loginValuesCopy);
    };

    const submitProfile = () => {

    }

    return (
        <div>
            <Container className="container-profile">
                <Card border="light">
                    <Card.Header as="h2" className="text-center card-title-header"><span className="boldening">Account Profile</span></Card.Header>
                    <Card.Body>
                        <Col>
                            <input type="file" id="actual-btn" hidden />
                            <label for="actual-btn"><img src={DefaultImg} className="default-img" /></label>
                            <div className="upload-image-label">Upload Your Image</div>
                        </Col>
                        <Card.Text>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={e => submitProfile(e)}>
                                <Form.Row>
                                    <Col>
                                        <Form.Control placeholder="First name"
                                            onChange={handleInputChange} defaultValue={thisUser.firstName} required />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name"
                                            onChange={handleInputChange} defaultValue={thisUser.lastName} required />
                                    </Col>
                                    <Col>
                                        <Form.Control type='number' placeholder="Telephone Number"
                                            onChange={handleInputChange} defaultValue={thisUser.telephone} />
                                    </Col>
                                </Form.Row>
                                <Form.Row >
                                    <Col>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                                onChange={handleInputChange} defaultValue={thisUser.email} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label></Form.Label>
                                            <Form.Control as="select" onChange={handleInputChange}>
                                                <option value="">-- Gender --</option>
                                                <option value='male'>Male</option>
                                                <option value='female'>Female</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Label></Form.Label>
                                        <NationalitiesDrop />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <div className="date-label">Date of Birth:</div>
                                        <input type="date" onChange={handleInputChange} />
                                    </Col>
                                </Form.Row>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="About Me" defaultValue={thisUser.bio}
                                        onChange={handleInputChange} />
                                </Form.Group>
                                <Button className="w-100 mt-4" variant="success" type="submit"
                                >
                                    Submit Changes
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}
export default AccountProfile;