import { useState } from 'react'

import './App.css'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) =>{
const updatedBook = books.filter((book) =>{
  return book.id !== id;
});
  setBooks(updatedBook);
}

  const createBook =(title) =>{
    const updatedBook = [
      ...books, {id: Math.round(Math.random()*999), title }
    ];
    setBooks(updatedBook);
  }

  return (
    <div className="app">
     <BookList books={books} onDelete={deleteBookById}/>
     <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
