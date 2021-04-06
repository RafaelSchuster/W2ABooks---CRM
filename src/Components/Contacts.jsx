import React, { useContext, useState } from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Contacts.css';
import { MainContext } from '../Context/Context';
import ContactCard from './ContactCard';
import Grid from "../images/grid_list_toggle.png"
import ContactsTable from './ContactsTable';
import ListIcon from '../images/list_view.png';
import GridIcon from '../images/grid.png'


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
            {gridContacts && <input type="image" src={ListIcon} alt="" className="list-view-icon grid-list-contacts" onClick={changeView} title="List display" ></input>}
            {!gridContacts && <input type="image" src={GridIcon} alt="" className="grid-view-icon grid-list-contacts" onClick={changeView} title="Grid display" ></input>}
            <div className="flex-contact-header">
                {/* <h3 className="header-profile mb-4 boldening"> Your Contacts</h3>
                <Card className="contact-count-header">
                    {contacts ? <Card.Body className="head-status text-center">{`You have ${contacts.length} Contacts.`}</Card.Body> :
                        <Card.Body className="head-status">{`You have 0 Contacts.`}</Card.Body>}
                </Card> */}
            </div>
            {gridContacts && <Container className="my-contacts-container">
                <CardDeck>
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