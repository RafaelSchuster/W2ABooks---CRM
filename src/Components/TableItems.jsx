import React, { useState } from 'react';
import '../Styles/Contacts.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import '../Styles/ContactCard.css';
import Page from '../images/bio.png'
import Info from '../images/info.png'
import Trash from '../images/trash.png'
import Work from '../images/working-time.png';
import Edit from '../images/edit.png';


function TableItems(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);


    return (
        <tr>
            {props.id && <td className="text-center">{props.id}</td>}
            {props.firstName && <td className="text-center">{props.firstName}</td>}
            {props.lastName && <td className="text-center">{props.lastName}</td>}
            {props.telephone && <td className="text-center">{props.telephone}</td>}
            {props.email && <td className="text-center">{props.email}</td>}
            {props.company && <td className="text-center">{props.company}</td>}
            {props.jobTitle && <td className="text-center">{props.jobTitle}</td>}
            <td className="actions-list">
                <Container className="container-list-more">
                    <Row>
                        <Col>
                            {props.workHistoryDescription &&
                                <input type='image' src={Work} alt=""
                                    className="work-list-icon"
                                    title="Work history"
                                    onClick={() => setModalIsOpen2(true)} />}
                        </Col>
                        <Col>
                            <input type="image" variant="primary" id="about" className="info-list-contact" src={Info} alt="" title="About" onClick={() => setModalIsOpen1(true)}></input>
                        </Col>
                        <Col>
                            <input type="image" src={Edit} alt="" className="edit-contact-list" title="Edit contact" />
                        </Col>
                        <Col>
                            <input type="image" variant="primary" src={Trash} alt="" className="trash-list-contact" id="delete" title="Delete contact"></input>
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
                            <Card.Text>
                                <Card.Text><img srcSet={Page} alt=""></img>
                                    {props.personalBio && <span className="text-center contact-bio">{props.personalBio}</span>}
                                </Card.Text>
                            </Card.Text>
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
                            <Card.Text><img srcSet={Work} alt="" className="work-list-icon"></img>
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
