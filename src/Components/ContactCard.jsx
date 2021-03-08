import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import '../Styles/ContactCard.css';
import { useEffect } from 'react';
import Person from '../images/person.png';
import Mail from '../images/mail.png';
import Phone from '../images/phone.png';
import Page from '../images/bio.png';
import Company from '../images/company.png';
import Trash from '../images/trash.png';
import Job from '../images/workplace.png';
import People from '../images/people.png';
import Work from '../images/working-time.png';

function ContactCard(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);

    return (
        <>
            <Card className="my-card">
                <Card.Header><img srcSet={Person} />
                    <span className="text-center ml-2"> {props.firstName} {props.lastName}
                    </span>
                    <img srcSet={Trash} className="trash-contact-card" title="Delete this contact" />
                    {props.workHistoryDescription &&
                        <input type='image' src={Work}
                            className="work-grid-icon"
                            title="Work history"
                            onClick={() => setModalIsOpen2(true)} />}
                </Card.Header>
                <Card.Body>
                    <Card.Text><img srcSet={Phone}></img><span className="text-center ml-2">{props.telephone}</span>  </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text><img srcSet={Mail}></img><span className="text-center ml-2">{props.email}</span>  </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text><img srcSet={Company} className="company-img-contact"></img><span className="text-center ml-2">{props.company}</span>  </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text><img srcSet={Job} className="company-img-contact"></img><span className="text-center ml-2">{props.jobTitle}</span>  </Card.Text>
                </Card.Body>
                <Button type="button" variant="primary" onClick={() => setModalIsOpen1(true)}>About</Button>
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
                                    <Card.Text><img srcSet={Page}></img><span className="text-center ml-2 contact-bio">{props.personalBio}</span>  </Card.Text>
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
            </Card>
        </>
    )
}
export default ContactCard;