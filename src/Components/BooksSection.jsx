import React from 'react';
import BooksList from './BooksList';

function BooksSection(props) {
    
    return (
        <>
            <BooksList isThisBookmarks={props.bookmarking}/>
        </>
    );
}
export default BooksSection;