import React, { useState } from 'react';
import '../Styles/Contacts.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import '../Styles/ContactCard.css';
import Page from '../images/bio.png'
import Info from '../images/info.png'
import Trash from '../images/trash.png'
import People from '../images/people.png';
import Work from '../images/working-time.png';
import Edit from '../images/edit.png';


function TableItems(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);


    return (
        <tr>
            <td className="text-center">{props.id}</td>
            <td className="text-center">{props.firstName}</td>
            <td className="text-center">{props.lastName}</td>
            <td className="text-center">{props.telephone}</td>
            <td className="text-center">{props.email}</td>
            <td className="text-center">{props.company}</td>
            <td className="text-center">{props.jobTitle}</td>
            <td className="actions-list">
                <Container className="container-list-more">
                    <Row>
                        <Col>
                            {props.workHistoryDescription &&
                                <input type='image' src={Work}
                                    className="work-list-icon"
                                    title="Work history"
                                    onClick={() => setModalIsOpen2(true)} />}
                        </Col>
                        <Col>
                            <input type="image" variant="primary" id="about" className="info-list-contact" src={Info} title="About" onClick={() => setModalIsOpen1(true)}></input>
                        </Col>
                        <Col>
                            <input type="image" src={Edit} className="edit-contact-list" title="Edit contact" />
                        </Col>
                        <Col>
                            <input type="image" variant="primary" src={Trash} className="trash-list-contact" id="delete" title="Delete contact"></input>
                        </Col>
                    </Row>
                </Container>
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
                                    <Card.Text><img srcSet={Page}></img><span className="text-center contact-bio">{props.personalBio}</span>  </Card.Text>
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
                            <Card.Text><img srcSet={People}></img>
                                <span className="text-center ml-2 contact-bio">
                                    {props.workHistoryDescription}
                                </span>
                            </Card.Text>
                        </Card.Body>}
                    </Card>
                </Modal>
            </td>
        </tr>
    )
}

export default TableItems;
