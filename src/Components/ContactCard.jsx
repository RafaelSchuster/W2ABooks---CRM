import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import '../Styles/ContactCard.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MainContext } from '../Context/Context';
import Person from '../images/person.png'
import Mail from '../images/mail.png'
import Phone from '../images/phone.png'
import Page from '../images/bio.png'
import Company from '../images/company.png'
import Trash from '../images/trash.png'
import Job from '../images/workplace.png'



function ContactCard(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const { currentUser, token, refresher, setRefresher, email } = useContext(MainContext);
    const [footText, setFootText] = useState()


    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <>
            <Card className="my-card">
                <Card.Header><img srcSet={Person} />
                    <span className="text-center ml-2"> {props.firstName} {props.lastName}
                    </span>
                    <img srcSet={Trash} className="trash-contact-card" title="Delete this contact" />
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
                    <h1 className="text-center">About This Contact</h1>
                    {props.personalBio && <Card.Body>
                        <Card.Text><img srcSet={Page}></img><span className="text-center ml-2 contact-bio">{props.personalBio}</span>  </Card.Text>
                    </Card.Body>}
                </Modal>
            </Card>
        </>
    )
}
export default ContactCard;