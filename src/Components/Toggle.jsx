import React, { useContext, useState } from 'react';
import { Accordion, Button, Card, useAccordionToggle } from 'react-bootstrap';
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

    const useLocalState = (localItem) => {
        const [localToken, setState] = useState(localStorage.getItem(localItem));
        const setLocalToken = (newItem) => {
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }
        return [localToken, setLocalToken];
    }
    const [token, setToken] = useLocalState('token');

    const logout = () =>{
        setToken('');
        window.location.href="/login";
    }

    if(window.location.hash === "#/login") {
        return null;
    }
    else{
    return (
        <Accordion >
            <Card className="accordion btn" >
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="0">Profile</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="toggle-content">
                        <Card.Link href="/account_profile" className="toggle-link">Agent's Profile</Card.Link>
                        <Card.Link href="/genre_profile" className="toggle-link" >Agent's Genres</Card.Link>
                        <Card.Link href="/requirements" className="toggle-link" >Requirements</Card.Link>
                        <Card.Link href="/job_history" className="toggle-link">Jobs List</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="1" className="toggle-btn">Dashboard</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="toggle-content">
                    <Card.Link href="/main_dashboard" className="toggle-link">Dashboard</Card.Link>
                        <Card.Link href="/reminders" className="toggle-link">Reminders</Card.Link>
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
                        <Card.Link href="/file_manager" className="toggle-link">File Manager</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="toggle-header">
                    <ContextAwareToggle eventKey="4">Telephone Book</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body className="toggle-content">
                        <Card.Link href="/add_contact" className="toggle-link">Add Contact</Card.Link>
                        <Card.Link href="/contacts" className="toggle-link">Your Contacts</Card.Link>
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
                        <Card.Link href="/login" className="toggle-link">Login</Card.Link>
                        <Button className="toggle-link" className="logout-toggle-btn" onClick={logout}>Logout</Button>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
    }
}
export default Toggle;