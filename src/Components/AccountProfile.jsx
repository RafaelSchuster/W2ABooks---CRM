import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Col, Alert, Card } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import '../Styles/AccountProfile.css'
import NationalitiesDrop from './NationalitiesDrop';
import DefaultImg from '../images/default_user.png';

function AccountProfile() {
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
                    <Card.Header as="h2" className="text-center card-title-header-profile"><span className="boldening">Agent's Profile</span></Card.Header>
                    <Card.Body className="flex-internal-general">
                        <Col xs={12}>
                            <input type="file" id="actual-btn" hidden />
                            <label for="actual-btn"><div className="default-img-circle"> <img src={DefaultImg} className="default-img" alt="" /></div></label>
                            <div className="upload-image-label">Upload Profile Image</div>
                        </Col>
                        <Card.Text>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={e => submitProfile(e)}>
                                <Form.Row>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Label></Form.Label>
                                        <Form.Control placeholder="First name" name="firstName"
                                            onChange={handleInputChange} defaultValue={thisUser.firstName} required />
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Label></Form.Label>
                                        <Form.Control placeholder="Last name" name="lastName"
                                            onChange={handleInputChange} defaultValue={thisUser.lastName} required />
                                    </Col>
                                    <Col >
                                        <Form.Label></Form.Label>
                                        <Form.Control type='number' placeholder="Telephone" name="telephone"
                                            onChange={handleInputChange} defaultValue={thisUser.telephone} />
                                    </Col>
                                    <Col>
                                        <Form.Label></Form.Label>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select" onChange={handleInputChange} name="gender">
                                                <option value="">Gender</option>
                                                <option value='male'>Male</option>
                                                <option value='female'>Female</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row >
                                    <Col xs={12} md={5} lg={4}>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control type="email" placeholder="Email" name="email"
                                                onChange={handleInputChange} />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={7} md={5} lg={4}>
                                        <Form.Label></Form.Label>
                                        <Form.Control name="website" placeholder="Agent's Website" onChange={handleInputChange}></Form.Control>
                                    </Col>
                                    <Col xs={5} md={2} lg={4}>
                                        <div className="date-label">Date of Birth:
                                        <input type="date" onChange={handleInputChange} name="dateOfBirth" id="birthDate" className="date-input" />
                                        </div>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Label></Form.Label>
                                        <NationalitiesDrop />
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Label></Form.Label>
                                        <Form.Control name="agencyName" placeholder="Agency Name" onChange={handleInputChange}></Form.Control>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label></Form.Label>
                                            <Form.Control as="select" onChange={handleInputChange} name="aar">
                                                <option value="">-- AAR Member? --</option>
                                                <option value='member'>Yes</option>
                                                <option value='nonMember'>No</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label></Form.Label>
                                            <Form.Control as="select" onChange={handleInputChange} name="status">
                                                <option value="">-- Current Status --</option>
                                                <option value='available'>Available</option>
                                                <option value='notavailable'>Not Available</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="About Me" defaultValue={thisUser.bio}
                                        name="personalBio" onChange={handleInputChange} />
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