import React from 'react';
import BookShow from './BookShow'

const BookList = ({books, onDelete}) => {
const renderedBooks = books.map((book) =>{
  return <BookShow onDelete={onDelete}  key={book.id} book={book}/>
})

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList
