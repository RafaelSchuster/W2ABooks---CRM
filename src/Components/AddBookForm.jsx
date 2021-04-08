import React, { useState } from 'react';
import { Button, Container, Form, Col, Alert, Card } from 'react-bootstrap';
import '../Styles/AccountProfile.css';
import '../Styles/Contacts.css';
import Select from 'react-select';
import GenresDropdown from './DropdownGenres';
import StatusDropdown from './DropdownStatus';

function AddBookForm() {
    const [error, setError] = useState();
    const [bookValues, setBookValues] = useState({});

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const bookValuesCopy = { ...bookValues };
        bookValuesCopy[name] = value;
        setBookValues(bookValuesCopy);
        console.log(bookValues);
    };

    const submitProfile = () => {

    }

    return (
        <div>
            <Container className="add-book-container">
                <Card border="light">
                    <Card.Header as="h2" className="text-center purple"><span className="boldening">Add Book</span></Card.Header>
                    <Card.Body className="add-contact-form">
                        <Card.Text>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={e => submitProfile(e)}>
                                <Form.Row>
                                    <Col xs={12} sm={6} lg={4}>
                                        <Form.Label></Form.Label>

                                        <Form.Control placeholder="Book's Name" name="bookName"
                                            onChange={handleInputChange} required />
                                    </Col>
                                    <Col xs={12} sm={6} lg={3}>
                                        <Form.Label></Form.Label>

                                        <Form.Control placeholder="Author's Name" name="authorName"
                                            onChange={handleInputChange} required />
                                    </Col>
                                    <Col xs={12} sm={6} lg={2}>
                                        <Form.Label></Form.Label>
                                        <Form.Control type='number' placeholder="Book's Length" name="pages"
                                            onChange={handleInputChange} />
                                    </Col>
                                    <Col xs={12} sm={6} lg={3} >
                                        {/* <Form.Group controlId="formGroupEmail"> */}
                                        <Form.Label></Form.Label>
                                        <Form.Control type="email" placeholder="Author's Email" name="email"
                                            onChange={handleInputChange} />
                                        {/* </Form.Group> */}
                                    </Col>
                                    <Col xs={12} sm={6} lg={2}>
                                        <Form.Label></Form.Label>
                                        <Form.Control type='number' placeholder="Proofread's Grade" name="proofGrade"
                                            onChange={handleInputChange} />
                                    </Col>
                                    <Col xs={12} sm={6} lg={3}>
                                        <Form.Label></Form.Label>
                                        <StatusDropdown />
                                    </Col>
                                    <Col xs={12} sm={6} lg={2}>
                                        <Form.Label></Form.Label>
                                        <Select
                                            name="working"
                                            options={[{ value: 'yes', label: "Yes" }, { value: 'no', label: 'No' }]}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            placeholder="Working on it?"
                                            onChange={e => console.log(e.value)}
                                        />
                                    </Col>
                                    <Col xs={12} sm={6} lg={5}>
                                        <Form.Label></Form.Label>
                                        <GenresDropdown />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col lg={6}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label></Form.Label>
                                            <Form.Control as="textarea" rows={2} placeholder="About Book"
                                                name="personalBio" onChange={handleInputChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Label></Form.Label>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={2} placeholder="About Author"
                                                name="personalBio" onChange={handleInputChange} />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Button className="w-100 mt-4" variant="success" type="submit"
                                >
                                    Add Book
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default AddBookForm;