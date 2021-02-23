import React, { useContext } from 'react'
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
        <Accordion defaultActiveKey="0" >
            <Card className="accordion btn" >
                <Card.Header className="header">
                    <ContextAwareToggle eventKey="0">Group 1</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="toggle-content">
                        <Dropdown.Item as="button">Item 1</Dropdown.Item>
                        <Dropdown.Item as="button">Item 2</Dropdown.Item>
                        <Dropdown.Item as="button">Item 3</Dropdown.Item>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="header">
                    <ContextAwareToggle eventKey="1" className="toggle-btn">Group 2</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="toggle-content">
                        <Dropdown.Item as="button">Item 1</Dropdown.Item>
                        <Dropdown.Item as="button">Item 2</Dropdown.Item>
                        <Dropdown.Item as="button">Item 3</Dropdown.Item>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="header">
                    <ContextAwareToggle eventKey="2">Group 3</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="toggle-content">
                        <Dropdown.Item as="button">Item 1</Dropdown.Item>
                        <Dropdown.Item as="button">Item 2</Dropdown.Item>
                        <Dropdown.Item as="button">Item 3</Dropdown.Item>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="accordion btn">
                <Card.Header className="header">
                    <ContextAwareToggle eventKey="3">Group 4</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className="toggle-content">
                        <Dropdown.Item as="button">Item 1</Dropdown.Item>
                        <Dropdown.Item as="button">Item 2</Dropdown.Item>
                        <Dropdown.Item as="button">Item 3</Dropdown.Item>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
export default Toggle;