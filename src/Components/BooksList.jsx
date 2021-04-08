import React, { useContext, useEffect, useState } from 'react';
import BookItemListView from './BooksItemListView';
import { MainContext } from '../Context/Context';
import Grid from "../images/grid_list_toggle.png"
import BookItemGridView from './BookItemGridView';
import '../Styles/BookItemGrid.css';
import ListIcon from '../images/list_view.png';
import GridIcon from '../images/grid.png';
import NewBook from '../images/add_book_plus.png';
import Modal from 'react-modal';
import Close from '../images/close.png';
import AddBookForm from './AddBookForm';


function BooksList(props) {
    const { setGridView, gridView, bookmarks } = useContext(MainContext);
    const [modalAddBookIsOpen, setModalAddBookIsOpen] = useState(false);
    const [books, setBooks] = useState(props.books);

    const changeView = () => {
        setGridView(!gridView);
    }

    return (
        <>
            {gridView && <input type="image" src={ListIcon} alt="" className="list-view-icon" onClick={changeView} title="List display" ></input>}
            {!gridView && <input type="image" src={GridIcon} alt="" className="grid-view-icon" onClick={changeView} title="Grid display" ></input>}
            <input type="image" src={NewBook} className="add-new-book" title="Add book to list" onClick={() => setModalAddBookIsOpen(true)} />
            <ul className="main-ul">
                {!gridView && books && books.map(book =>
                    <BookItemListView
                        key={Math.random()}
                        bookName={book.bookName}
                        author={book.author}
                        email={book.authorEmail}
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
                        starred={props.starred}
                        recommended={props.recommended}
                        recommendationDate={book.recommendationDate}
                        deleted={props.deleted}
                    />
                )}
            </ul>
            <div className="book-view-container">
                {gridView && books && books.map(book =>
                    <BookItemGridView
                        key={Math.random()}
                        bookName={book.bookName}
                        author={book.author}
                        email={book.authorEmail}
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
                        working={props.working}
                        starred={props.starred}
                        recommended={props.recommended}
                        recommendationDate={book.recommendationDate}
                        deleted={props.deleted}
                    />
                )}
            </div>
            <Modal
                className="new-book-modal"
                overlayClassName="overlay-modal-jobs"
                isOpen={modalAddBookIsOpen}
                onRequestClose={() => setModalAddBookIsOpen(false)}>
                <input type="image" src={Close} className="close-modal-btn" onClick={() => setModalAddBookIsOpen(false)} />
                <div className="new-book-modal-div">
                    <AddBookForm/>
                </div>
            </Modal>
        </>
    )
}
export default BooksList;