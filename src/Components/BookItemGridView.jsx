import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import Modal from 'react-modal';
import mockImg from '../images/BookCover_MockUp.png';
import GenreItem from './GenreItem';
import '../Styles/BookItemGrid.css';
import StatusProgress from './StatusProgress';
import BookMark from "../images/star.png";
import Agent from '../images/check.png';
import { MainContext } from '../Context/Context';
import Jobs from './Jobs';



function BookItemGridView(props) {
    const [modalStatusIsOpen, setModalStatusIsOpen] = useState(false);
    const [modalMeetingIsOpen, setModalMeetingIsOpen] = useState(false);
    const [modalSummaryIsOpen, setModalSummaryIsOpen] = useState(false);
    const [modalJobsIsOpen, setModalJobsIsOpen] = useState(false);
    const { setBookmarks } = useContext(MainContext);

    const useLocalState = (localItem) => {
        const [localBMarks, setState] = useState(localStorage.getItem(localItem));
        const setLocalBookmarks = (newItem) => {
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }
        return [localBMarks, setLocalBookmarks];
    }

    const [localBookmarks, setLocalMarks] = useLocalState('bookmarks');

    useEffect(() => {
        // console.log(localBookmarks);
    }, [localBookmarks])

    const bookmarking = (e) => {
        const arrMarks = [];
        const { id } = e.target;
        if (localBookmarks) arrMarks.push(localBookmarks, id)
        else if (!localBookmarks) arrMarks.push(id)
        // setLocalMarks(arrMarks)
        // setBookmarks(arrMarks)
    }

    return (
        <>
            <Card className="book-card-grid">
                <Card.Header className="card-title-header-grid">
                    {props.bookName && <h3 className="boldening">{props.bookName}</h3>}
                    {!props.isBookmarks && <input type="image"
                        id={JSON.stringify(props)}
                        src={BookMark}
                        alt=""
                        className="bookmark-icon hover-shrink"
                        title="Add to bookmarks"
                        onClick={e => bookmarking(e)} />}
                    <input type="image" src={Agent} alt="" className="agent-grid-card hover-shrink" title="Add to jobs list" onClick={() => setModalJobsIsOpen(true)} />
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={mockImg} className="card-img-grid" />
                    {props.aboutAuthor && <Card.Text className="about-author-grid"><h4 className="boldening-grid">About the Author: </h4><div>{props.aboutAuthor}</div></Card.Text>}
                    {props.addedOn && <Card.Text className="added-on"><span className="boldening ">Added On: </span> <span>{props.addedOn}</span></Card.Text>}
                    {props.wordCount && <Card.Text className="grid-book-length"><span className="boldening">Book Length: </span><span className="greening">{props.wordCount}</span></Card.Text>}
                    <Button type="button" className="btn-modal-status-grid green-btn" onClick={() => setModalStatusIsOpen(true)}>Process Status</Button>
                    <Button type="button" className="btn-modal-meeting-grid green-btn" onClick={() => setModalMeetingIsOpen(true)}>Meeting Summary</Button>
                    <Button href="index.html#/messaging" className="messaging-grid-btn green-btn">Contact the Author</Button>
                    {props.progress && <ProgressBar variant="warning" now={props.progress} label={`${props.progress}%`} className="progressBar-gridView progress-bar-grid"></ProgressBar>}
                    {props.progress && props.progress === '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar-gridView progress-bar-grid"><span className="zero-percent" >0%</span></ProgressBar>}
                    <Modal
                        className="status-modal"
                        overlayClassName="overlay-modal-status"
                        isOpen={modalStatusIsOpen}
                        onRequestClose={() => setModalStatusIsOpen(false)}
                    >
                        <Card.Header as="h1" className="text-center" >Status</Card.Header>
                        <Card.Body className="status-grid-card-modal">
                            {props.datePresenting && <Card.Text className="status-date-grid"><span className="boldening">Date Presenting: </span>{props.datePresenting}</Card.Text>}
                            {props.dateResponse && <Card.Text className="response-date-grid"><span className="boldening">Response Date: </span>{props.dateResponse}</Card.Text>}
                            {props.responseStatus && <Card.Text className="response-status-grid"><span className="boldening">Response Status: </span>{props.responseStatus}</Card.Text>}
                            {props.meetingDate && <Card.Text className="meeting-date-grid"><span className="boldening">Meeting Date: </span>{props.meetingDate}</Card.Text>}
                            {props.proofReaderGrade && <Card.Text className=""><span className="boldening">Proofreader's Grade: </span>{props.proofReaderGrade}</Card.Text>}
                            {props.stagesDone && <Card.Text className=""><span className="boldening">Stages Done: </span>{props.stagesDone}</Card.Text>}
                            {props.processStatus && <Card.Text className=""><span className="boldening">Process Status: </span>{props.processStatus}</Card.Text>}
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
                        <Card.Header as="h1" className="text-center">Meeting</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-center">Meeting Summary</Card.Title>
                            {props.summaryMeeting && <Card.Text className="meeting-summary-grid"><span className="boldening">Meeting Summary: </span>{props.summaryMeeting}</Card.Text>}
                        </Card.Body>
                    </Modal>
                    {props.author && <Card.Text className=""><span className="boldening">Author: </span>{props.author}</Card.Text>}
                    <Card.Text ><span className="boldening">Genre: </span>{props.genre && props.genre.map(genre => <GenreItem genre={genre} />)}  </Card.Text>
                    <Card.Body>
                        {props.summaryTitle && <Card.Title className="text-center summary-title-grid"><span className="boldening">{props.summaryTitle}</span></Card.Title>}
                    </Card.Body>
                    <Modal
                        className="summary-modal"
                        overlayClassName="overlay-modal-summary"
                        isOpen={modalSummaryIsOpen}
                        onRequestClose={() => setModalSummaryIsOpen(false)}
                    >
                        <Card.Header as="h1" className="text-center">Full Book Summary</Card.Header>
                        <Card.Body>
                            {props.summary && <Card.Text className="text-center summary-on-modal">{props.summary}</Card.Text>}
                        </Card.Body>
                    </Modal>
                    <Modal isOpen={modalJobsIsOpen}
                        onRequestClose={() => setModalJobsIsOpen(false)}>
                        {props.bookName && <Jobs defaultBookName={props.bookName} />}
                    </Modal>
                    <Button type="button" className="btn-modal-summary-grid green-btn" variant="secondary" onClick={() => setModalSummaryIsOpen(true)}>Full Book Summary</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default BookItemGridView;