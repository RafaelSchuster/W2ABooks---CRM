import React, { useContext } from 'react';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccordionContext = React.createContext({});

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'black' : 'white' }}
            onClick={decoratedOnClick}
            className="toggle-btn"
        >
            {children}
        </button>
    );
}

function Toggle() {
    return (
        <Accordion >
            <Card className="accordion btn" >
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="0">Profile</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="toggle-content">
                        <Card.Link href="index.html#/account_profile" className="toggle-link">Agent's Profile</Card.Link>
                        <Card.Link href="index.html#/genre_profile" className="toggle-link" >Genres</Card.Link>
                        <Card.Link href="index.html#/requirements" className="toggle-link" >Requirements</Card.Link>
                        {/* <Card.Link href="index.html#/job_history" className="toggle-link">Job History</Card.Link> */}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="1" className="toggle-btn">Dashboard</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="toggle-content">
                        {/* <Card.Link href="index.html#/your_works" className="toggle-link">Your works</Card.Link> */}
                        <Card.Link href="index.html#/bookmarks" className="toggle-link">Bookmarks</Card.Link>
                        <Card.Link href="index.html#/assignments" className="toggle-link">Assignments</Card.Link>
                        <Card.Link href="index.html#/reminders" className="toggle-link">Reminders</Card.Link>
                        <Card.Link href="index.html#/calendar_meetings" className="toggle-link">Calendar and Meetings</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="2">Files and Documents</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="toggle-content">
                        <Card.Link href="index.html#/file_manager" className="toggle-link">File Manager</Card.Link>
                        {/* <Card.Link href="index.html#/files_uploaded" className="toggle-link">Files Uploaded</Card.Link> */}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="4">Telephone Book</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body className="toggle-content">
                        <Card.Link href="index.html#/add_contact" className="toggle-link">Add Contact</Card.Link>
                        <Card.Link href="index.html#/contacts" className="toggle-link">Your Contacts</Card.Link>
                        {/* <Card.Link href="index.html#/files_uploaded" className="toggle-link">Files Uploaded</Card.Link> */}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="3">Account</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className="toggle-content">
                        <Card.Link href="index.html#/account_settings" className="toggle-link">Account Settings</Card.Link>
                        <Card.Link href="index.html#/logout" className="toggle-link">Logout</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
export default Toggle;