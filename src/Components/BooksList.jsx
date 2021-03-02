import React, { useContext } from 'react';
import BookItemListView from './BooksItemListView';
import { MainContext } from '../Context/Context';
import Grid from "../images/grid_list_toggle.png"
import BookItemGridView from './BookItemGridView';
import '../Styles/BookItemGrid.css'


function BooksList() {
    const { books, setGridView, gridView } = useContext(MainContext);

    const changeView = () => {
        setGridView(!gridView)
    }

    return (
        <>
            <ul className="main-ul">
                <input type="image" src={Grid} className="grid-list" onClick={changeView} ></input>
                {!gridView && books && books.map(book =>
                    <BookItemListView
                        key={Math.random()}
                        name={book.name}
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
                    />
                )}
            </ul>
            <div className="book-view-container">
                    {gridView && books && books.map(book =>
                        <BookItemGridView
                            key={Math.random()}
                            name={book.name}
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
                        />
                    )}
            </div>
        </>
    )
}
export default BooksList;