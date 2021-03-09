import React, { useContext, useState } from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Contacts.css';
import { MainContext } from '../Context/Context';
import ContactCard from './ContactCard';
import Grid from "../images/grid_list_toggle.png"
import ContactsTable from './ContactsTable';


function Contacts() {
    const [gridContacts, setGridContacts] = useState(false);
    const { contacts } = useContext(MainContext);

    const changeView = () => {
        setGridContacts(!gridContacts);
    }

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
                <h3 className="header-profile mb-5 boldening"> Your Contacts</h3>
            </div>
            <input type="image" src={Grid} className="grid-list-contacts" onClick={changeView} title="Change display" ></input>
            <Card className="contact-count-header">
                {contacts ? <Card.Body className="head-status text-center">{`You have ${contacts.length} Contacts.`}</Card.Body> :
                    <Card.Body className="head-status">{`You have 0 Contacts.`}</Card.Body>}
            </Card>
            {gridContacts && <Container className="my-contacts">
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
                            workHistoryDescription={contact.workHistoryDescription}
                        />
                    )
                    }
                </CardDeck>
            </Container>}
            {!gridContacts && <ContactsTable />}
        </>
    )
}

export default Contacts;