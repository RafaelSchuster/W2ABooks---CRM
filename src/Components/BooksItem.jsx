import React, { useState } from 'react';
import { Card, Nav, Button, Tabs, Tab, } from 'react-bootstrap';
import mockImg from '../images/BookCover_MockUp.png'

function BookItem(props) {
    const [key, setKey] = useState('home');
    return (
        <>
            <Card className="book-card">
                <Card.Header>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        variant="pills"
                        className="tabs"
                    >
                        <Tab eventKey="home" title="Book Profile" className="tab">
                            <Card.Body>
                                <Card.Img variant="bottom" src={mockImg} className="card-img" />
                                <Card.Title className="book-title">{props.name}</Card.Title>
                            </Card.Body>
                        </Tab>
                        <Tab eventKey="status" title="Status">
                            <Card.Body>
                                <Card.Img variant="bottom" src={mockImg} className="card-img" />
                                <Card.Title className="book-status">Status</Card.Title>
                            </Card.Body>
                        </Tab>
                        <Tab eventKey="summary" title="Summary">
                            <Card.Body>
                                <Card.Img variant="bottom" src={mockImg} className="card-img" />
                                <Card.Title className="summary-title">{props.summary}</Card.Title>
                                <Card.Text className="summary-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <Card.Body>
                                <Card.Img variant="bottom" src={mockImg} className="card-img" />
                                <Card.Title className="author-email">
                                    Author's Email : {props.email}
                                </Card.Title>
                                {/* <Button variant="warning">Testing 3</Button> */}
                            </Card.Body>
                        </Tab>
                    </Tabs>
                </Card.Header>
            </Card>
        </>
    );
}
export default BookItem;