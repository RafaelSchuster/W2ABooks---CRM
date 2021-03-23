import React, { useContext, useState } from 'react';
import { Card, Button, Tabs, Tab, ProgressBar } from 'react-bootstrap';
import Modal from 'react-modal';
import mockImg from '../images/BookCover_MockUp.png';
import GenreItem from './GenreItem';
import BookMark from "../images/star.png";
import { MainContext } from '../Context/Context';
import Agent from '../images/check.png';
import Status from '../images/status.png';
import BookProfile from '../images/info_book.png';
import Summary from '../images/summary.png';
import Contact from '../images/phoneIcon.png';
import Jobs from './Jobs';
import StatusProgress from './StatusProgress';



function BookItemListView(props) {
    const [key, setKey] = useState('status');
    const [modalStatusIsOpen, setModalStatusIsOpen] = useState(false);
    const [modalMeetingIsOpen, setModalMeetingIsOpen] = useState(false);
    const [modalSummaryIsOpen, setModalSummaryIsOpen] = useState(false);
    const [modalJobsIsOpen, setModalJobsIsOpen] = useState(false);
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
                <Card.Header className="card-title-header">
                    {props.bookName && <h3 className="boldening">{props.bookName}</h3>}
                    <input type="image" src={Agent} alt="" className="agent-list-card hover-shrink" title="Add to jobs list" onClick={() => setModalJobsIsOpen(true)} />
                    {!props.isBookmarks && <input type="image"
                        id={JSON.stringify(props)}
                        src={BookMark}
                        className="bookmark-icon-list hover-shrink"
                        title="Add to bookmarks"
                        onClick={e => bookmarking(e)} />}
                </Card.Header>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    variant="pills"
                    className="tabs"
                >
                    <Tab eventKey="status" title="Status">
                        <Card.Body className="main-flex-list">
                            <div className="img-progress-flex">
                                <Card.Img variant="bottom" src={mockImg} className="card-img" />
                                {props.progress && <ProgressBar variant="warning" now={props.progress} label={`${props.progress}%`} className="progressBarr"></ProgressBar>}
                                {props.progress && props.progress < 14 && props.progress != '0' && <ProgressBar variant="warning" now={props.progress} className="progressBarr"></ProgressBar>}
                                {props.progress && props.progress === '0' && <ProgressBar variant="warning" now={props.progress} className="progressBare"><span className="zero-percent" >0%</span></ProgressBar>}
                            </div>
                            <Card border="light" className="status-card">
                                <Card.Header className="text-center">Status</Card.Header>
                                <Card.Body>
                                    <div className="flex-status">
                                        <div className="flex-btns">
                                            <Button type="button" className="btn-modal-status green-btn mb-1" onClick={() => setModalStatusIsOpen(true)}>Process Status</Button>
                                            <Button type="button" className="btn-modal-meeting green-btn" onClick={() => setModalMeetingIsOpen(true)}>Meeting Summary</Button>
                                        </div>
                                        <div className="flex-status-dates">
                                            {props.proofReaderGrade && <Card.Text className=""><span className="boldeningg">Proofreader's Grade: </span>{props.proofReaderGrade}</Card.Text>}
                                            {props.datePresenting && <Card.Text className=""><span className="boldeningg">Date Presenting: </span>{props.datePresenting}</Card.Text>}
                                            {props.dateResponse && <Card.Text className=""><span className="boldeningg">Response Date: </span>{props.dateResponse}</Card.Text>}
                                            {props.responseStatus && <Card.Text className=""><span className="boldeningg">Response Status: </span>{props.responseStatus}</Card.Text>}
                                            {props.meetingDate && <Card.Text className=""><span className="boldeningg">Meeting Date: </span>{props.meetingDate}</Card.Text>}
                                        </div>
                                    </div>
                                    <Modal
                                        className="status-modal"
                                        overlayClassName="overlay-modal-status"
                                        isOpen={modalStatusIsOpen}
                                        onRequestClose={() => setModalStatusIsOpen(false)}
                                    >
                                        <Card.Header as="h1" className="text-center" >Status</Card.Header>
                                        <Card.Body className="status-grid-card-modal">
                                            {props.datePresenting && <Card.Text className="status-date-grid"><span className="boldeningg">Date Presenting: </span>{props.datePresenting}</Card.Text>}
                                            {props.dateResponse && <Card.Text className="response-date-grid"><span className="boldeningg">Response Date: </span>{props.dateResponse}</Card.Text>}
                                            {props.responseStatus && <Card.Text className="response-status-grid"><span className="boldeningg">Response Status: </span>{props.responseStatus}</Card.Text>}
                                            {props.meetingDate && <Card.Text className="meeting-date-grid"><span className="boldeningg">Meeting Date: </span>{props.meetingDate}</Card.Text>}
                                            {props.proofReaderGrade && <Card.Text className=""><span className="boldeningg">Proofreader's Grade: </span>{props.proofReaderGrade}</Card.Text>}
                                            {props.stagesDone && <Card.Text className=""><span className="boldeningg">Stages Done: </span>{props.stagesDone}</Card.Text>}
                                            {props.processStatus && <Card.Text className=""><span className="boldeningg">Process Status: </span>{props.processStatus}</Card.Text>}
                                            {props.progress && <ProgressBar variant="warning" now={props.progress} label={`${props.progress}%`} className="progressbar-modal-grid"></ProgressBar>}
                                            {props.progress && props.progress === '0' && <ProgressBar variant="warning" now={props.progress} className="progressbar-modal-grid"><span className="zero-percent" >0%</span></ProgressBar>}
                                        </Card.Body>
                                        <StatusProgress />
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
                    <Tab eventKey="home" title="Profile" className="tab">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="light" className="profile-internal-card">
                                <Card.Header className="text-center" >Profile</Card.Header>
                                <Card.Body className="profile-inner-flex">
                                    <div className="profile-about-list">
                                    {props.aboutBook && <Card.Text className="about-book-profile">{props.aboutBook}</Card.Text>}
                                    {/* {props.author && <Card.Text className=""><span className="boldeningg">Author: </span>{props.author}</Card.Text>} */}
                                    {props.aboutAuthor && <Card.Text className="about-max-profile"><span className="boldeningg">About the Author: </span>{props.aboutAuthor}</Card.Text>}
                                    </div>
                                    <div className="profile-genre-list">
                                    <Card.Text ><span className="boldeningg"></span>{props.genre && props.genre.map(genre => <GenreItem genre={genre} />)}  </Card.Text>
                                    {props.wordCount && <Card.Text ><span className="boldeningg">Book Length: </span><span className="greening">{props.wordCount}</span></Card.Text>}
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card.Text className="book-author"></Card.Text>
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="summary" title="Summary">
                        <Card.Body >
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="light" className="summary-card" >
                                <Card.Header className="text-center" >Summary</Card.Header>
                                <Card.Body className="flex-summary">
                                    {props.summaryTitle && <Card.Title className="text-center"><span className="boldeningg">{props.summaryTitle}</span></Card.Title>}
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
                                    {props.bookName && <span className="boldening header-size">{props.bookName}</span>}
                                    {props.aboutBook && <Card.Text className="full-about-book">{props.aboutBook}</Card.Text>}
                                </Card.Body>
                            </Card>
                        </Modal>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <Card.Body>
                            <Card.Img variant="bottom" src={mockImg} className="card-img" />
                            <Card border="light" className="contact-card" >
                                <Card.Header className="text-center">Contact</Card.Header>
                                <Button href="index.html#/messaging" className="messaging-btn btn-secondary">Messaging History</Button>
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Tab>
                </Tabs>
                <Modal isOpen={modalJobsIsOpen}
                    onRequestClose={() => setModalJobsIsOpen(false)}>
                    {props.bookName && <Jobs defaultBookName={props.bookName} />}
                </Modal>
            </Card>
        </>
    );
}
export default BookItemListView;
