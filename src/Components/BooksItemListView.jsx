import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import Modal from 'react-modal';
import mockImg from '../images/BookCover_MockUp.png';
import GenreItem from './GenreItem';
// import '../Styles/BookItemGrid.css';
import '../Styles/Main.css';
import StatusProgress from './StatusProgress';
import BookMark from "../images/star.png";
import Agent from '../images/check.png';
import { MainContext } from '../Context/Context';
import Jobs from './Jobs';
import Close from '../images/close.png';
import Remove from '../images/remove.png';
import Check from '../images/check_circle.png';


function BookItemListView(props) {
    const [modalStatusIsOpen, setModalStatusIsOpen] = useState(false);
    const [modalMeetingIsOpen, setModalMeetingIsOpen] = useState(false);
    const [modalSummaryIsOpen, setModalSummaryIsOpen] = useState(false);
    const [modalListIsOpen, setModalListIsOpen] = useState(false)
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

    // useEffect(() => {
    // }, [localBookmarks])

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
            <Card className="book-card">
                <Card.Header className="card-title-header">
                    {!props.recommended && props.bookName && <span className="boldening header-size">{props.bookName}</span>}
                    {props.recommended && props.bookName && <span className="boldening header-size">{`${props.bookName}/Sent on ${props.recommendationDate}`}</span>}
                    {props.starred && <input type="image"
                        id={JSON.stringify(props)}
                        src={BookMark}
                        alt=""
                        className="bookmark-icon-list hover-shrink"
                        title="Add to starred"
                        onClick={e => bookmarking(e)} />}
                    {/* <input type="image" src={Agent} alt="" className="agent-list-card hover-shrink" title="Add to jobs list" onClick={() => setModalJobsIsOpen(true)} /> */}
                    {props.deleted && <input type="image" src={Check} className="check-icon" title="Remove from list" />}
                    <input type="image" src={Remove} className="remove-icon" title="Remove from list" />
                </Card.Header>
                <Card.Body>
                    <div className="flex-inside-list">
                        <Card.Img variant="top" src={mockImg} className="card-img" />
                        <div className="flex-left">
                            {props.aboutBook && <Card.Text className="book-description">{props.bookName && <span className="boldening header-size">{props.bookName}</span>}{props.aboutBook && <Card.Text className="about-book-list">{props.aboutBook}</Card.Text>}</Card.Text>}
                            {props.addedOn && <Card.Text className="added-on"><span className=" ">Added On: </span> <span>{props.addedOn}</span></Card.Text>}
                            {props.wordCount && <Card.Text className="list-book-length"><span className="">Book Length: </span><span className="greening">{props.wordCount}</span></Card.Text>}
                            <div className="flex-all-btns">
                                <div className="flex-first-btns">
                                    <Button type="button" className="btn-modal-status-grid" onClick={() => setModalStatusIsOpen(true)}>Process Status</Button>
                                    <Button type="button" className="btn-modal-meeting-grid" onClick={() => setModalMeetingIsOpen(true)}>Meeting Summary</Button>
                                </div>
                                <div className="flex-second-btns">
                                    <Button href="index.html#/messaging" className="messaging-grid-btn green-btn mobile">Contact the Author</Button>
                                    <Button type="button" className="btn-modal-summary-grid green-btn mobile" onClick={() => setModalSummaryIsOpen(true)}>Full Book Summary</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-text-list">
                            {props.aboutAuthor && <Card.Text className="about-author-grid mobile"><span className="boldening">About the Author: </span><div className="about-maximum-list ">{props.aboutAuthor}</div></Card.Text>}
                            <div className="flex-genre-list">
                                <Card.Text>{props.genre && props.genre.map(genre => <GenreItem genre={genre} />)}  </Card.Text>
                                {props.progress && props.progress >= 14 && <ProgressBar variant="warning" now={props.progress} label={`${props.progress}%`} className="progressBar-list"></ProgressBar>}
                                {props.progress && props.progress < 14 && props.progress != '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar-list"></ProgressBar>}
                                {props.progress && props.progress === '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar-list"><span className="zero-percent" >0%</span></ProgressBar>}
                            </div>
                        </div>
                        <div className="small-screen-div">
                            {props.aboutBook && <Card.Text className="book-description">{props.bookName && <span className="boldening header-size">{props.bookName}</span>}{props.aboutBook && <Card.Text className="about-book-list">{props.aboutBook}</Card.Text>}</Card.Text>}
                            <div className="flex-genre-list">
                                <Card.Text className="genre-list">{props.genre && props.genre.map(genre => <GenreItem genre={genre} />)}</Card.Text>
                            </div>
                            <div className="progress-read-more">
                                {props.progress && props.progress >= 14 && <ProgressBar variant="warning" now={props.progress} label={`${props.progress}%`} className="progressBar-small-screen"></ProgressBar>}
                                {props.progress && props.progress < 14 && props.progress != '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar-small-screen"></ProgressBar>}
                                {props.progress && props.progress === '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar-small-screen"><span className="zero-percent" >0%</span></ProgressBar>}
                                <button type="image" className="read-more-list" onClick={() => setModalListIsOpen(true)}>More Details</button>

                            </div>
                        </div>
                        <Modal
                            className="status-modal"
                            overlayClassName="overlay-modal-status"
                            isOpen={modalStatusIsOpen}
                            onRequestClose={() => setModalStatusIsOpen(false)}
                        >
                            <input type="image" src={Close} className="close-modal-btn" onClick={() => setModalStatusIsOpen(false)} />
                            <Card.Header as="h4" className="text-center" >Status</Card.Header>
                            <div className="flex-inside-status-modal">
                                <StatusProgress />
                                <Card.Body className="status-grid-details-modal">
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
                            </div>
                        </Modal>
                        <Modal
                            className="meeting-modal"
                            overlayClassName="overlay-modal-meeting"
                            isOpen={modalMeetingIsOpen}
                            onRequestClose={() => setModalMeetingIsOpen(false)}
                        >
                            <input type="image" src={Close} className="close-modal-btn" onClick={() => setModalMeetingIsOpen(false)} />
                            <Card.Header as="h1" className="text-center">Meeting</Card.Header>
                            <Card.Body>
                                <Card.Title className="text-center">Meeting Summary</Card.Title>
                                {props.summaryMeeting && <Card.Text className="meeting-summary-grid"><span className="boldening">Meeting Summary: </span>{props.summaryMeeting}</Card.Text>}
                            </Card.Body>
                        </Modal>

                        <Modal
                            className="summary-modal"
                            overlayClassName="overlay-modal-summary"
                            isOpen={modalSummaryIsOpen}
                            onRequestClose={() => setModalSummaryIsOpen(false)}
                        >
                            <input type="image" src={Close} className="close-modal-btn" onClick={() => setModalSummaryIsOpen(false)} />
                            <Card.Header as="h1" className="text-center">Full Book Summary</Card.Header>
                            {props.bookName && <span className="boldening header-size">{props.bookName}</span>}
                            {props.aboutBook && <Card.Text className="full-about-book">{props.aboutBook}</Card.Text>}                        </Modal>
                        <Modal
                            className="jobs-modal"
                            overlayClassName="overlay-modal-jobs"
                            isOpen={modalJobsIsOpen}
                            onRequestClose={() => setModalJobsIsOpen(false)}>
                            <input type="image" src={Close} className="close-modal-btn" onClick={() => setModalJobsIsOpen(false)} />
                            <div className="jobs-modal-inner-div">
                                {props.bookName && <Jobs defaultBookName={props.bookName} />}
                            </div>
                        </Modal>

                        <Modal
                            className="list-modal"
                            overlayClassName="overlay-modal-list"
                            isOpen={modalListIsOpen}
                            onRequestClose={() => setModalListIsOpen(false)}
                        >
                            <input type="image" src={Close} className="close-modal-small-btn" onClick={() => setModalListIsOpen(false)} />
                            <Card.Body className="list-grid-card-modal">
                                <div className="flex-inside-card">
                                    <div className="flex-img-progress">
                                        <Card.Img variant="top" src={mockImg} className="card-img-grid" />
                                        <Button type="button" className="btn-modal-status-grid" onClick={() => setModalStatusIsOpen(true)}>Process Status</Button>
                                        <Button type="button" className="btn-modal-meeting-grid" onClick={() => setModalMeetingIsOpen(true)}>Meeting Summary</Button>
                                        <Button href="index.html#/messaging" className="messaging-grid-btn">Contact the Author</Button>
                                        <Button type="button" className="btn-modal-summary-grid" onClick={() => setModalSummaryIsOpen(true)}>Full Book Summary</Button>
                                    </div>
                                    <div className="flex-text">
                                        {props.aboutBook && <Card.Text className="">{props.bookName && <span className="boldening header-size">{props.bookName}</span>}{props.aboutBook && <Card.Text className="about-book">{props.aboutBook}</Card.Text>}</Card.Text>}
                                        {props.aboutAuthor && <Card.Text className="about-author-grid"><span className="boldening">About the Author: </span><div className="about-max ">{props.aboutAuthor}</div></Card.Text>}
                                        {props.addedOn && <Card.Text className="added-on"><span className=" ">Added On: </span> <span>{props.addedOn}</span></Card.Text>}
                                        {props.wordCount && <Card.Text className="grid-book-length"><span className="">Book Length: </span><span className="greening">{props.wordCount}</span></Card.Text>}
                                        <div className="flex-genre">
                                            <Card.Text  ><span className="boldening"></span>{props.genre && props.genre.map(genre => <GenreItem genre={genre} />)}  </Card.Text>
                                            {props.progress && props.progress >= 14 && <ProgressBar variant="warning" now={props.progress} label={`${props.progress}%`} className="progressBar-gridView"></ProgressBar>}
                                            {props.progress && props.progress < 14 && props.progress != '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar-gridView"></ProgressBar>}
                                            {props.progress && props.progress === '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar-gridView"><span className="zero-percent" >0%</span></ProgressBar>}
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Modal>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default BookItemListView;
