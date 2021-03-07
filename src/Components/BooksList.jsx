import React, { useContext, useEffect, useState } from 'react';
import BookItemListView from './BooksItemListView';
import { MainContext } from '../Context/Context';
import Grid from "../images/grid_list_toggle.png"
import BookItemGridView from './BookItemGridView';
import '../Styles/BookItemGrid.css'


function BooksList(props) {
    const { books, setGridView, gridView, bookmarks } = useContext(MainContext);
    const [savedBookmarks, setSavedBookmarks] = useState(localStorage.getItem('bookmarks'))

    // useEffect(() => {
    //     console.log(bookmarks);
    //     console.log(props.isThisBookmarks);
    // }, [])

    const changeView = () => {
        setGridView(!gridView);
    }

    return (
        <>
            <ul className="main-ul">
                {props.isThisBookmarks && <h1 className="bookmarks-header">Your Bookmarks</h1>}
                <input type="image" src={Grid} className="grid-list" onClick={changeView} ></input>
                {!props.isThisBookmarks && !gridView && books && books.map(book =>
                    <BookItemListView
                        key={Math.random()}
                        bookName={book.bookName}
                        author={book.author}
                        email={book.authorEmail}
                        summaryTitle={book.summaryTitle}
                        summary={book.summary}
                        id={book.id}
                        proofReaderGrade={book.proofReaderGrade}
                        stagesDone={book.stagesDone}
                        processStatus={book.processStatus}
                        genre={book.genre}
                        datePresenting={book.datePresenting}
                        dateResponse={book.dateResponse}
                        responseStatus={book.responseStatus}
                        meetingDate={book.meetingDate}
                        summaryMeeting={book.summaryMeeting}
                        wordCount={book.wordCount}
                        aboutAuthor={book.aboutAuthor}
                        progress={book.progress}
                        addedOn={book.addedOn}
                        isBookmarks = {props.isThisBookmarks}
                    />
                )}
                {props.isThisBookmarks && !gridView && bookmarks && bookmarks.map(book =>
                        <BookItemListView
                            key={Math.random()}
                            bookName={book.bookName}
                            author={book.author}
                            email={book.authorEmail}
                            summaryTitle={book.summaryTitle}
                            summary={book.summary}
                            id={book.id}
                            proofReaderGrade={book.proofReaderGrade}
                            stagesDone={book.stagesDone}
                            processStatus={book.processStatus}
                            genre={book.genre}
                            datePresenting={book.datePresenting}
                            dateResponse={book.dateResponse}
                            responseStatus={book.responseStatus}
                            meetingDate={book.meetingDate}
                            summaryMeeting={book.summaryMeeting}
                            wordCount={book.wordCount}
                            aboutAuthor={book.aboutAuthor}
                            progress={book.progress}
                            addedOn={book.addedOn}
                            isBookmarks = {props.isThisBookmarks}
                        />
                    )}
            </ul>
            <div className="book-view-container">
                {!props.isThisBookmarks && gridView && books && books.map(book =>
                    <BookItemGridView
                        key={Math.random()}
                        bookName={book.bookName}
                        author={book.author}
                        email={book.authorEmail}
                        summaryTitle={book.summaryTitle}
                        summary={book.summary}
                        id={book.id}
                        proofReaderGrade={book.proofReaderGrade}
                        stagesDone={book.stagesDone}
                        processStatus={book.processStatus}
                        genre={book.genre}
                        datePresenting={book.datePresenting}
                        dateResponse={book.dateResponse}
                        responseStatus={book.responseStatus}
                        meetingDate={book.meetingDate}
                        summaryMeeting={book.summaryMeeting}
                        wordCount={book.wordCount}
                        aboutAuthor={book.aboutAuthor}
                        progress={book.progress}
                        addedOn={book.addedOn}
                        isBookmarks = {props.isThisBookmarks}
                    />
                )}
                {props.isThisBookmarks && gridView && bookmarks && bookmarks.map(book =>
                        <BookItemGridView
                            key={Math.random()}
                            bookName={book.bookName}
                            author={book.author}
                            email={book.authorEmail}
                            summaryTitle={book.summaryTitle}
                            summary={book.summary}
                            id={book.id}
                            proofReaderGrade={book.proofReaderGrade}
                            stagesDone={book.stagesDone}
                            processStatus={book.processStatus}
                            genre={book.genre}
                            datePresenting={book.datePresenting}
                            dateResponse={book.dateResponse}
                            responseStatus={book.responseStatus}
                            meetingDate={book.meetingDate}
                            summaryMeeting={book.summaryMeeting}
                            wordCount={book.wordCount}
                            aboutAuthor={book.aboutAuthor}
                            progress={book.progress}
                            addedOn={book.addedOn}
                            isBookmarks = {props.isThisBookmarks}
                        />
                    )}
            </div>
        </>
    )
}
export default BooksList;