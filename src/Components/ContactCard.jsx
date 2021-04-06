import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import Modal from 'react-modal';
import '../Styles/ContactCard.css';
import Person from '../images/person.png';
import Mail from '../images/mail.png';
import Phone from '../images/phone.png';
import Page from '../images/bio.png';
import Company from '../images/company.png';
import Trash from '../images/trash1.png';
import Job from '../images/workplace.png';
import People from '../images/people.png';
import Work from '../images/working-time.png';
import Edit from '../images/edit1.png'

function ContactCard(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);

    return (
        <>
            <Card className="my-card">
                <Card.Header>
                    <Container className="container-header-contact-card">

                        <Row>
                            <Col xs="9" className="header-card-contact-name">
                                <img srcSet={Person} alt="" />
                                <span >
                                    {props.firstName && <span> {props.firstName} </span>}
                                    {props.lastName && <span> {props.lastName} </span>}
                                </span>
                            </Col>
                            <Col>
                                {props.workHistoryDescription &&
                                    <input type='image' src={Work} alt=""
                                        className="work-grid-icon"
                                        title="Work history"
                                        onClick={() => setModalIsOpen2(true)} />}
                            </Col>
                            <Col>
                                <img srcSet={Trash} alt="" className="trash-contact-card" title="Delete contact" />
                            </Col>
                            <Col>
                                <img srcSet={Edit} alt="" className="edit-contact-card" title="Edit contact"></img>
                            </Col>
                        </Row>
                    </Container>
                </Card.Header>
                <Card.Body>
                    <Card.Text><img srcSet={Phone} alt=""></img>
                        {props.telephone && <span className="text-center ml-2">{props.telephone}</span>}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text><img srcSet={Mail} alt=""></img>
                        {props.email && <span className="text-center ml-2">{props.email}</span>}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text><img srcSet={Company} alt="" className="company-img-contact"></img>
                        {props.company && <span className="text-center ml-2">{props.company}</span>}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text><img srcSet={Job} alt="" className="company-img-contact"></img>
                        {props.jobTitle && <span className="text-center ml-2">{props.jobTitle}</span>}
                    </Card.Text>
                </Card.Body>
                <Button type="button" className="about-card-btn" onClick={() => setModalIsOpen1(true)}>About</Button>
                <Modal className="my-modal"
                    isOpen={modalIsOpen1}
                    onRequestClose={() => setModalIsOpen1(false)}
                >
                    <Card border="secondary" >
                        <Card.Header><h1 className="text-center">About This Contact</h1></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            {props.personalBio &&
                                <Card.Text>
                                    <Card.Text><img srcSet={Page} alt=""></img><span className="text-center ml-2 contact-bio">{props.personalBio}</span>  </Card.Text>
                                </Card.Text>}
                        </Card.Body>
                    </Card>
                </Modal>
                <Modal className="my-modal"
                    isOpen={modalIsOpen2}
                    onRequestClose={() => setModalIsOpen2(false)}
                >
                    <Card border="secondary" >
                        <Card.Header><h1 className="text-center">Work history</h1></Card.Header>
                        {props.workHistoryDescription && <Card.Body>
                            <Card.Text><img srcSet={People} alt=""></img>
                                <span className="text-center ml-2 contact-bio">
                                    {props.workHistoryDescription}
                                </span>
                            </Card.Text>
                        </Card.Body>}
                    </Card>
                </Modal>
            </Card>
        </>
    )
}
export default ContactCard;