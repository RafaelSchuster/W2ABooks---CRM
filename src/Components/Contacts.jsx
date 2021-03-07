import React, { useContext, useEffect, useState } from 'react';
import { Card, CardDeck, Container, CardImg, CardImage, Image, Img, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Contacts.css';
import { MainContext } from '../Context/Context';
import ContactCard from './ContactCard';

const arrContacts = [];

function Contacts() {
    const [contactsToDisplay, setContactsToDisplay] = useState([]);
    const { contacts, setContacts, token } = useContext(MainContext);

    // useEffect(() => {
    //     const arrContacts = []
    //     if (userContacts && userContacts.length > 0) {
    //         userContacts.map(id => {
    //             getContactsById(token, id)
    //                 .then(res => {
    //                     arrContacts.push(res)
    //                     setContactsToDisplay([...arrContacts])
    //                 });
    //         })
    //     };
    // }, [userContacts]);

    return (
        <>
            <div>
                <h3 className="header-profile mb-5"> Your Contacts</h3>
            </div>
            <Card className="status">
                {contacts? <Card.Body className="head-status">{`You have ${contacts.length} Contacts.`}</Card.Body> :
                <Card.Body className="head-status">{`You have 0 Contacts.`}</Card.Body> }
            </Card>
            <Container className="my-contacts">
                <CardDeck className="deck">
                    {contacts && contacts.map(contact =>
                        <ContactCard
                            key={Math.random()}
                            id={contact.id}
                            firstName={contact.firstName}  
                            lastName={contact.lastName} 
                            telephone={contact.telephone}                         
                            email={contact.email}                         
                            company={contact.company}                         
                            jobTitle={contact.jobTitle}                                                 
                            personalBio={contact.personalBio}                           
                        />
                    )
                    }
                </CardDeck>
            </Container>
        </>
    )
}

export default Contacts;