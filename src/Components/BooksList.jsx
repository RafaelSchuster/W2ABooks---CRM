import React, { useContext, useEffect, useState } from 'react';
import BookItemListView from './BooksItemListView';
import { MainContext } from '../Context/Context';
import Grid from "../images/grid_list_toggle.png"
import BookItemGridView from './BookItemGridView';
import '../Styles/BookItemGrid.css';
import ListIcon from '../images/list_view.png';
import GridIcon from '../images/grid.png'


function BooksList(props) {
    const { books, setGridView, gridView, bookmarks } = useContext(MainContext);
    const [savedBookmarks, setSavedBookmarks] = useState(localStorage.getItem('bookmarks'));

    const changeView = () => {
        setGridView(!gridView);
    }

    return (
        <>
            {gridView && <input type="image" src={ListIcon} alt="" className="list-view-icon" onClick={changeView} title="List display" ></input>}
            {!gridView && <input type="image" src={GridIcon} alt="" className="grid-view-icon" onClick={changeView} title="Grid display" ></input>}
            <ul className="main-ul">
                {props.isThisBookmarks && <h3 className="bookmarks-header">Your Bookmarks</h3>}
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
                        isBookmarks={props.isThisBookmarks}
                        aboutBook={book.aboutBook}
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
                        isBookmarks={props.isThisBookmarks}
                        aboutBook={book.aboutBook}
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
                        isBookmarks={props.isThisBookmarks}
                        aboutBook={book.aboutBook}
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
                        isBookmarks={props.isThisBookmarks}
                        aboutBook={book.aboutBook}
                    />
                )}
            </div>
        </>
    )
}
export default BooksList;