import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { MainContext } from '../Context/Context';
import ContactTableItem from './ContactTableItem';

function ContactsTable() {
    const { contacts } = useContext(MainContext);
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = width <= 826;

    return (
        <Container >
            {!isMobile && <Table striped hover className="contact-table">
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Company</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">More</th>
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
            </Table>}
            {isMobile && <Table striped bordered hover className="contact-table">
                <thead>
                    <tr>
                        <th className="text-center purple">#</th>
                        <th className="text-center purple">Name</th>
                        <th className="text-center purple">Phone</th>
                        <th className="text-center purple">More</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts.map(contact =>
                        <ContactTableItem
                            mobile={true}
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
            </Table>}
        </Container>
    )
}

export default ContactsTable;
