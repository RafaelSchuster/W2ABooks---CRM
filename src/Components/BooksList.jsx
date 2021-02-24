import React, { useContext, useEffect } from 'react'
import BookItem from './BooksItem';
import { MainContext } from '../Context/Context'

function BooksList() {
    const { books } = useContext(MainContext);

    return (
        <ul>
            {books && books.map(book =>
                <BookItem
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
                    wordCount = {book.wordCount}
                    aboutAuthor={book.aboutAuthor}
                    progress={book.progress}
                />
            )}
        </ul>
    )
}
export default BooksList;