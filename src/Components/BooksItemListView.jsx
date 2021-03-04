import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, Tabs, Tab, ProgressBar } from 'react-bootstrap';
import Modal from 'react-modal';
import mockImg from '../images/BookCover_MockUp.png';
import GenreItem from './GenreItem';
import BookMark from "../images/bookmark1.png";
import { MainContext } from '../Context/Context';


function BookItemListView(props) {
    const [key, setKey] = useState('status');
    const [modalStatusIsOpen, setModalStatusIsOpen] = useState(false);
    const [modalMeetingIsOpen, setModalMeetingIsOpen] = useState(false);
    const [modalSummaryIsOpen, setModalSummaryIsOpen] = useState(false);
    const { bookmarks, setBookmarks } = useContext(MainContext);


    const bookmarking = (e) => {
        // const { id } = e.target;
        // const newMark = JSON.parse(id);
        // const copyBookmarks = { ...bookmarks };
        // copyBookmarks[newMark.bookName] = newMark;
        // setBookmarks(Object.values(copyBookmarks));
    }
    return (
        <>
            <Card className="book-card">
                <Card.Header className="card-title-header"><h3 className="boldening">{props.bookName}</h3>
                      <input type="button" value="" id={JSON.stringify(props)} hidden onClick={e => bookmarking(e)} />
                      {!props.isBookmarks && <label for={JSON.stringify(props)} className="bookmark-icon-list">
                        <img src={BookMark} alt="" srcset="" title="Bookmark this book" />
                    </label>} </Card.Header>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    variant="pills"
                    className="tabs"
                >
                    <Tab eventKey="status" title="Status">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="light" className="status-card">
                                <Card.Header className="text-center">Status</Card.Header>
                                <Card.Body>
                                    <Card.Text className=""><span className="boldening">Proofreader's Grade: </span>{props.proofReaderGrade}</Card.Text>
                                    <Button type="button" className="btn-modal-status" onClick={() => setModalStatusIsOpen(true)}>Process Status</Button>
                                    <Button type="button" className="btn-modal-meeting" onClick={() => setModalMeetingIsOpen(true)}>Meeting Summary</Button>
                                    <Card.Text className="status-date"><span className="boldening">Date Presenting: </span>{props.datePresenting}</Card.Text>
                                    <Card.Text className="response-date"><span className="boldening">Response Date: </span>{props.dateResponse}</Card.Text>
                                    <Card.Text className="response-status"><span className="boldening">Response Status: </span>{props.responseStatus}</Card.Text>
                                    <Card.Text className="meeting-date"><span className="boldening">Meeting Date: </span>{props.meetingDate}</Card.Text>
                                    <ProgressBar variant="warning" now={props.progress} label={`${props.progress}%`} className="progressBar progressBar-list"></ProgressBar>
                                    {props.progress === '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar progressBar-list"><span className="zero-percent" >0%</span></ProgressBar>}
                                    <Modal
                                        className="status-modal"
                                        overlayClassName="overlay-modal-status"
                                        isOpen={modalStatusIsOpen}
                                        onRequestClose={() => setModalStatusIsOpen(false)}
                                    >
                                        <Card className="modal-card" border="light">
                                            <Card.Header as="h1" className="text-center" >Status</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                {props.stagesDone && <Card.Text className=""><span className="boldening">Stages Done: </span>{props.stagesDone}</Card.Text>}
                                                {props.processStatus && <Card.Text className=""><span className="boldening">Process Status: </span>{props.processStatus}</Card.Text>}
                                            </Card.Body>
                                        </Card>
                                    </Modal>
                                    <Modal
                                        className="meeting-modal"
                                        overlayClassName="overlay-modal-meeting"
                                        isOpen={modalMeetingIsOpen}
                                        onRequestClose={() => setModalMeetingIsOpen(false)}
                                    >
                                        <Card className="modal-card" border="light">
                                            <Card.Header as="h1" className="text-center">Meeting</Card.Header>
                                            <Card.Body>
                                                <Card.Title className="text-center">Meeting Summary</Card.Title>
                                                {props.summaryMeeting && <Card.Text className="meeting-summary"><span className="boldening">Meeting Summary: </span>{props.summaryMeeting}</Card.Text>}
                                            </Card.Body>
                                        </Card>
                                    </Modal>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="home" title="Book Profile" className="tab">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="light" className="profile-internal-card">
                                <Card.Header className="text-center" >Book Profile</Card.Header>
                                <Card.Body>
                                    <Card.Text className=""><span className="boldening">Author: </span>{props.author}</Card.Text>
                                    <Card.Text className="about-author"><span className="boldening">About the Author: </span>{props.aboutAuthor}</Card.Text>
                                    <Card.Text className=""><span className="boldening">Genre: </span>{props.genre && props.genre.map(genre => <GenreItem genre={genre} />)}  </Card.Text>
                                    <Card.Text className=""><span className="boldening">Book Length: </span><span className="greening">{props.wordCount}</span></Card.Text>
                                </Card.Body>
                            </Card>
                            <Card.Text className="book-author"></Card.Text>
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="summary" title="Summary">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="light" className="summary-card" >
                                <Card.Header className="text-center" >Summary</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-center"><span className="boldening">{props.summaryTitle}</span></Card.Title>
                                    <Button type="button" className="btn-modal-summary" variant="secondary" onClick={() => setModalSummaryIsOpen(true)}>Full Summary</Button>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                        <Modal
                            className="summary-modal"
                            overlayClassName="overlay-modal-summary"
                            isOpen={modalSummaryIsOpen}
                            onRequestClose={() => setModalSummaryIsOpen(false)}
                        >
                            <Card className="modal-card" border="light">
                                <Card.Header as="h1" className="text-center">Full Summary</Card.Header>
                                <Card.Body>
                                    <Card.Text className="text-center summary-on-modal">{props.summary}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Modal>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="light" className="contact-card" >
                                <Card.Header className="text-center">Contact</Card.Header>
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Tab>
                </Tabs>
            </Card>
        </>
    );
}
export default BookItemListView;
