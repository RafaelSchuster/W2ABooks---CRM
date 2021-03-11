import React, { useState } from 'react';
import '../Styles/Contacts.css';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import Modal from 'react-modal';
import '../Styles/Jobs.css';
import Page from '../images/bio.png'
import Info from '../images/info-green.png'
import Trash from '../images/trash1.png'
import Edit from '../images/edit1.png'


function JobsTableItems(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [jobValues, setJobValues] = useState({});


    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const jobsValuesCopy = { ...jobValues };
        jobsValuesCopy[name] = value;
        setJobValues(jobsValuesCopy);
        console.log(jobValues);
    };

    const onSubmiting = (event) => {
        event.preventDefault();
        props.onEditing(jobValues.title, jobValues.projectName, jobValues.payment,
            props.date, jobValues.startDate, jobValues.endDate, jobValues.status, jobValues.description);
    }

    const onDelete = (date) => {
        props.jobDeleting(date);
    }

    return (
        <tr>
            <td className="text-center">{props.id}</td>
            <td className="text-center">{props.title}</td>
            <td className="text-center">{props.projectName}</td>
            <td className="text-center">{props.payment}</td>
            <td className="text-center">{props.startDate}</td>
            <td className="text-center">{props.endDate}</td>
            <td className="text-center">{props.status}</td>

            <td className="actions-list">
                <Container className="container-list-more-jobs">
                    <Row>
                        <Col>
                            <input type="image" variant="primary" id="about" className="info-list-contact" src={Info} alt="" title="About" onClick={() => setModalIsOpen1(true)}></input>
                        </Col>
                        <Col>
                            <input type="image" src={Edit} alt="" className="edit-contact-list" title="Edit" onClick={() => { setModalIsOpen2(true) }} />
                        </Col>
                        <Col>
                            <input type="image" variant="primary" src={Trash} alt="" className="trash-list-contact" id="delete" title="Delete" onClick={() => onDelete(props.date)}></input>
                        </Col>
                    </Row>
                </Container>
                <Modal className="my-modal"
                    isOpen={modalIsOpen1}
                    onRequestClose={() => setModalIsOpen1(false)}
                >
                    <Card border="secondary" >
                        <Card.Header><h1 className="text-center">About This Job</h1></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            {props.description &&
                                <Card.Text>
                                    <Card.Text><img srcSet={Page} alt=""></img><span className="text-center contact-bio ml-3">{props.description}</span>  </Card.Text>
                                </Card.Text>}
                        </Card.Body>
                    </Card>
                </Modal>
                <Modal
                    isOpen={modalIsOpen2}
                    portalClassName="note-edit-modal"
                    onRequestClose={() => setModalIsOpen2(false)}>
                    <Container>
                        <Form className='mt-5' onSubmit={event => onSubmiting(event)}>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <h1 className="text-center">Edit</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            className='m-3'
                                            placeholder='Job Title'
                                            as="textarea" rows={1}
                                            name='title'
                                            id='title'
                                            defaultValue={props.title}
                                            onChange={handleInputChange} />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            className='m-3'
                                            placeholder='Project Name'
                                            as="textarea" rows={1}
                                            name='projectName'
                                            id='projectName'
                                            defaultValue={props.projectName}
                                            onChange={handleInputChange} />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            className='m-3'
                                            placeholder='Payment'
                                            as="textarea" rows={1}
                                            name='payment'
                                            id='payment'
                                            defaultValue={props.payment}
                                            onChange={handleInputChange} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="4">
                                        <Form.Group>
                                            <label className="start-date-label">Start Date of Service:</label>
                                            <input type="date"
                                                onChange={handleInputChange}
                                                name="startDate"
                                                id="startDate"
                                                defaultValue={props.startDate}
                                                className="start-date-box" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="4">
                                        <Form.Group className="end-date-group">
                                            <label >End Date of Service:</label>
                                            <input type="date"
                                                onChange={handleInputChange}
                                                name="endDate"
                                                id="endDate"
                                                defaultValue={props.endDate}
                                                className="end-date-box" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlSelect1" className="job-status-dropd">
                                            <Form.Control as="select" name="status" defaultValue={props.status} onChange={handleInputChange}>
                                                <option value="">-- Job Status --</option>
                                                <option value='finished'>Finished</option>
                                                <option value='pending'>Pending</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Control
                                    className='m-3'
                                    placeholder='Job Description'
                                    as="textarea" rows={2}
                                    name='description'
                                    id='description'
                                    defaultValue={props.description}
                                    onChange={handleInputChange}
                                    required />
                                <Button
                                    className='btn btn-secondary btn-block m-3'
                                    type='submit'
                                >Edit</Button>
                            </Form.Group>
                        </Form>
                    </Container>
                </Modal>
            </td>
        </tr>
    )
}

export default JobsTableItems;
