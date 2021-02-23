import React, { useState } from 'react';
import { Card, Nav, Button, Tabs, Tab, } from 'react-bootstrap';
import mockImg from '../images/BookCover_MockUp.png'

function BookItem(props) {
    const [key, setKey] = useState('home');
    return (
        <>
            <Card className="book-card">
                <Card.Header><h3>{props.name}</h3> </Card.Header>
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
                            <Card border="warning" className="profile-internal-card">
                                <Card.Header className="text-center" >Book Profile</Card.Header>
                                <Card.Body>
                                    <Card.Title className="">Author: {props.author}</Card.Title>
                                    <Card.Text className="">Genre: {props.genre}</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card.Text className="book-author"></Card.Text>
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="status" title="Status">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="info" className="status-card">
                                <Card.Header className="text-center">Status</Card.Header>
                                <Card.Body>
                                    <Card.Text className="">Proofreader's Grade: {props.proofReaderGrade}</Card.Text>
                                    <Card.Text className="">Stages Done: {props.stagesDone}</Card.Text>
                                    <Card.Text className="">Process Status: {props.processStatus}</Card.Text>
                                    <Card.Text className="">Date Presenting: {props.datePresenting}</Card.Text>
                                    <Card.Text className="response-date">Response Date: {props.dateResponse}</Card.Text>
                                    <Card.Text className="response-status">Response Status: {props.responseStatus}</Card.Text>
                                    <Card.Text className="meeting-date">Meeting Date: {props.meetingDate}</Card.Text>
                                    <Card.Text className="meeting-summary">Meeting Summary: {props.summaryMeeting}</Card.Text>
                                </Card.Body>
                            </Card>

                        </Card.Body>
                    </Tab>
                    <Tab eventKey="summary" title="Summary">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="success" className="summary-card" >
                                <Card.Header className="text-center" >Summary</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-center">{props.summaryTitle}</Card.Title>
                                    <Card.Text className="text-center ">{props.summary}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="danger" className="contact-card" >
                                <Card.Header className="text-center ">Contact</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-center ">Author's Email : {props.email}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Tab>
                </Tabs>
            </Card>
        </>
    );
}
export default BookItem;



{/* <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="warning" className="profile-internal-card">
                                <Card.Header className="text-center" >About The Book</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-center">By: {props.author}</Card.Title>
                                           
                                </Card.Body>
                            </Card>
                            <Card.Text className="book-author"></Card.Text>
                            <Card border="info" className="status-card">
                                <Card.Header className="text-center">Status</Card.Header>
                                <Card.Body>
                                    <Card.Text className="status-grade">Proofreader's Grade: {props.proofReaderGrade}</Card.Text>
                                    <Card.Text className="status-done">Stages Done: {props.stagesDone}</Card.Text>
                                    <Card.Text className="status-process">Process Status: {props.processStatus}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Body>
 */}
