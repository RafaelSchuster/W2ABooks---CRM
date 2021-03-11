import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import ContactTableItem from './ContactTableItem';

function ContactsTable() {
    const { contacts } = useContext(MainContext);

    return (
        <Container >
            <Table striped bordered hover className="contact-table">
                <thead>
                    <tr>
                        <th className="text-center purple">#</th>
                        <th className="text-center purple">First Name</th>
                        <th className="text-center purple">Last Name</th>
                        <th className="text-center purple">Telephone</th>
                        <th className="text-center purple">Email</th>
                        <th className="text-center purple">Company</th>
                        <th className="text-center purple">Title</th>
                        <th className="text-center purple">More</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts.map(contact =>
                        <ContactTableItem
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
                </tbody>
            </Table>
        </Container>
    )
}

export default ContactsTable;
