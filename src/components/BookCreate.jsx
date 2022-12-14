import React,{useState} from 'react'

const BookCreate = ({onCreate}) => {
const [title, setTitle] = useState('');

const handleChange = (event) =>{
    setTitle(event.target.value);
}; 
const handleSubmit = (event) =>{
    event.preventDefault();
    onCreate(title);
    setTitle('');  
}

  return (
    <div className='book-create'>
    <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} className="input" onChange={handleChange} />
        <button className='button'>Create</button>
      </form>
    </div>
  )
}

export default BookCreate
//need to fix