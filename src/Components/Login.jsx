import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Col, Alert, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import '../Styles/SignLogin.css';
import { connectToServer } from '../HelperFunctions/ConnectToServer';


function Login(props) {
    const [error, setError] = useState();
    const [profileValues, setProfileValues] = useState({});
    const { nationality, thisUser } = useContext(MainContext);

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

    const submitProfile = async (e) => {
        e.preventDefault()
        setError('');
        const newUser = profileValues;
        const onSuccess = (res) => {
            if (res.data.message) setError(res.data.message)
            else if (!res.data.message) {
                setToken(true)
                window.location.href = '/';
            }
        }
        const onError = (error) => console.log(error)

        await connectToServer(`login`, newUser, onSuccess, onError)
    }

    return (
        <div>
            <Container className="login-container">
                <Card border="light">
                    <Card.Header as="h2" className="text-center card-title-header-profile"><span className="boldening">Login</span></Card.Header>
                    <Card.Body className="flex-internal-generals">
                        <Card.Text>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={e => submitProfile(e)}>
                                <Form.Row>
                                    <Col xs={12} md={5} lg={6}>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control type="email" placeholder="Email" name="email"
                                                onChange={handleInputChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label></Form.Label>
                                            <Form.Control type="password" name="password" placeholder="Password" onChange={handleInputChange}></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Button className="w-100 mt-4 sign-btn" variant="success" type="submit"
                                >
                                    Submit
                                </Button>
                                <p> Don't have an account yet?
                                    <Button className="signin-btn"
                                        onClick={() => {
                                            props.setLogin(false)
                                        }}>Click here to Sign In</Button></p>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}
export default Login;