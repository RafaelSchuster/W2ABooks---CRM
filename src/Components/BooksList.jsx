import React, { useContext, useEffect } from 'react'
import BookItem from './BooksItem';
import { MainContext } from '../Context/Context'

function BooksList() {
    const { books } = useContext(MainContext);
    useEffect(() => {
        console.log(books);
    }, [])
    return (
        <ul>
            {books && books.map(book =>
                <BookItem
                    key={Math.random()}
                    name={book.name}
                    author={book.author}
                    email={book.authorEmail}
                    summary={book.summary}
                    id={book.id}
                />
            )}
        </ul>
    )
}
export default BooksList;