import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import TableItems from './TableItems';

function ContactsTable(props) {
    const { contacts, setContacts, token } = useContext(MainContext);

    return (
        <Container >
            <Table striped bordered hover className="contact-table">
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">Telephone</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Company</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts.map(contact =>
                        <TableItems
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
                </tbody>
            </Table>
        </Container>
    )
}

export default ContactsTable;
