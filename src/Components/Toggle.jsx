import React, { useContext } from 'react';
import { DropdownButton, Dropdown, ButtonGroup, Accordion, Card, useAccordionToggle } from 'react-bootstrap';
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
                        <Card.Link href="/account_profile" className="toggle-link">Account Profile</Card.Link>
                        <Card.Link href="/job_profile" className="toggle-link" >Job Profile</Card.Link>
                        <Card.Link href="/job_history" className="toggle-link">Job History</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="1" className="toggle-btn">Dashboard</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="toggle-content">
                        <Card.Link href="/your_works" className="toggle-link">Your works</Card.Link>
                        <Card.Link href="/remiders" className="toggle-link">Reminders</Card.Link>
                        <Card.Link href="/calendar_meetings" className="toggle-link">Calendar and Meetings</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="2">Files and Documents</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="toggle-content">
                        <Card.Link href="/upload_files" className="toggle-link">Upload Files</Card.Link>
                        <Card.Link href="/files_uploaded" className="toggle-link">Files Uploaded</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="3">Account</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className="toggle-content">
                        <Card.Link href="/account_settings" className="toggle-link">Account Settings</Card.Link>
                        <Card.Link href="/logout" className="toggle-link">Logout</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
export default Toggle;