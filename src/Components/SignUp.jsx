import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Col, Alert, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import '../Styles/AccountProfile.css'
import NationalitiesDrop from './NationalitiesDrop';
import DefaultImg from '../images/default_user.png';
import MonthsDropdown from './DropdownMonths';
import '../Styles/SignLogin.css';
import axios from 'axios';


function SignUp(props) {
    const [error, setError] = useState();
    const [profileValues, setProfileValues] = useState({});
    const { nationality, thisUser } = useContext(MainContext);
    const {URL} = process.env;

    const useLocalState = (localItem) => {
        const [localToken, setState] = useState(localStorage.getItem(localItem));
        const setLocalToken = (newItem) => {
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }
        return [localToken, setLocalToken];
    }
    const [token, setToken] = useLocalState('token');

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const profileValuesCopy = { ...profileValues };
        profileValuesCopy[name] = value;
        setProfileValues(profileValuesCopy);
    };

    useEffect(() => {
        const profileValuesCopy = { ...profileValues };
        if (nationality) profileValuesCopy['nationality_name'] = nationality;
        setProfileValues(profileValuesCopy);
    }, [nationality])

    const submitSignUp = async (e) => {
        e.preventDefault();
        if (profileValues.password === profileValues.password2) {
            setError('');
            const newUser = profileValues;
            let config = {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
            };
            try {
                axios.post(`${URL}/ws/register_agent`, newUser, config).then(res => {
                    if (res.data.message) setError(res.data.message)
                    else if (!res.data.message) {
                        setToken(true)
                        window.location.href = '/';
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        else return setError('Passwords do not match');
    }


    return (
        <div>
            <Container className="sign-container">
                <Card border="light">
                    <Card.Header as="h2" className="text-center card-title-header-profile"><span className="boldening">Sign-In</span></Card.Header>
                    <Card.Body className="flex-internal-general">
                        <Col xs={12}>
                            <input type="file" id="actual-btn" hidden />
                            <label for="actual-btn"><div className="default-img-circle"> <img src={DefaultImg} className="default-img" alt="" /></div></label>
                            <div className="upload-image-label">Upload Profile Image</div>
                        </Col>
                        <Card.Text>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={e => submitSignUp(e)}>
                                <Form.Row>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Label></Form.Label>
                                        <Form.Control placeholder="First name" name="firstName"
                                            onChange={handleInputChange} required />
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Label></Form.Label>
                                        <Form.Control placeholder="Last name" name="lastName"
                                            onChange={handleInputChange} required />
                                    </Col>
                                    <Col >
                                        <Form.Label></Form.Label>
                                        <Form.Control type='number' placeholder="Telephone" name="telephone"
                                            onChange={handleInputChange} />
                                    </Col>
                                    <Col>
                                        <Form.Label></Form.Label>
                                        <Form.Group >
                                            <Form.Control as="select" onChange={handleInputChange} name="gender">
                                                <option value="">Gender</option>
                                                <option value='male'>Male</option>
                                                <option value='female'>Female</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row >
                                    <Col xs={12} md={5} lg={3}>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control type="email" placeholder="Email" name="email" required
                                                onChange={handleInputChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={7} md={5} lg={3}>
                                        <Form.Label></Form.Label>
                                        <Form.Control name="website" placeholder="Agent's Website" onChange={handleInputChange}></Form.Control>
                                    </Col>
                                    <Col xs={5} md={2} lg={3}>
                                        <div className="date-label">Date of Birth:
                                        <input type="date" onChange={handleInputChange} name="dateOfBirth" id="birthDate" className="date-input" />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={5} lg={3}>
                                        <Form.Label></Form.Label>
                                        <MonthsDropdown />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col xs={12} md={6} lg={6}>
                                        <Form.Group >
                                            <Form.Label></Form.Label>
                                            <Form.Control type="password" name="password" placeholder="Password" onChange={handleInputChange} required></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}>
                                        <Form.Group >
                                            <Form.Label></Form.Label>
                                            <Form.Control type="password" name="password2" placeholder="Confirm Password" onChange={handleInputChange} required></Form.Control>
                                        </Form.Group>
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
                                        <Form.Group >
                                            <Form.Label></Form.Label>
                                            <Form.Control as="select" onChange={handleInputChange} name="aar">
                                                <option value="">-- AAR Member? --</option>
                                                <option value='member'>Yes</option>
                                                <option value='nonMember'>No</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group >
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
                                <Button className="w-100 mt-4 sign-btn" variant="success" type="submit"
                                >
                                    Submit
                                </Button>
                                <p> Already have an account?<Button className="login-btn"
                                    onClick={() => {
                                        props.setLogin(true)
                                    }}>Click here to Login</Button></p>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}
export default SignUp;