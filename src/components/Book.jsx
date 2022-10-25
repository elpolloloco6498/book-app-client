import React from 'react';
import { useNavigate } from 'react-router-dom';

function Book({book, handleDeleteBook}) {
    const navigate = useNavigate()
    return (
        <div className='d-flex flex-column m-2 book-infos'>
            <div className='shadow'>
                <img className='book-img' height={250} width={162} src={book.bookImg} alt="cover"/>
                <div className='p-2 bg-light border'>
                    <p className='book-name'>{book.name}<span className='book-date'> {book.date}</span></p>
                    <p className='font-weight-light'>{book.author}</p>
                    <p>{book.genre}</p>
                </div>
            </div>
            
            <div className='d-flex mx-auto mt-4 gap-3'>
                <button onClick={()=>handleDeleteBook(book._id)} className='btn btn-danger'>Delete</button>
                <button onClick={()=> navigate(`/edit/${book._id}`)} className='btn btn-secondary'>Edit</button>
            </div>
        </div>
    );
}

export default Book;