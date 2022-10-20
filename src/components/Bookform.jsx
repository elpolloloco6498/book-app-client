import React from 'react';
import { useState } from 'react';

function Bookform({books, handleOnSubmit}) {
    const [book, setBook] = useState({
        name: books ? books.name : "",
        author: books ? books.author : "",
        date: books ? books.date : "",
        genre: books ? books.genre : "",
        bookImgFile: ""
    })
    //console.log(book)
    const {name, author, date, genre} = book

    const handleSubmit = (event)=>{
        event.preventDefault()
        // check all value filled
        
        handleOnSubmit(book)
    }

    const handleInputChange = (event)=> {
        const {name, value} = event.target
        setBook(
            book => ({...book, [name]: value})
        )
    }

    const handleInputFileChange = (event)=> {
        setBook(
            book => ({...book, "bookImgFile": event.target.files[0]})
        )
    }

    return (
    <div className='d-flex flex-column align-items-center'>
        <form className='w-50 mb-3' onSubmit={handleSubmit}>
            <div>
                <label className='label-form'>Book name</label>
                <input name="name" value={name} onChange={handleInputChange} id="input-name" className='form-control' type="text"/>
            </div>
            <div>
                <label className='label-form'>Author</label>
                <input name="author" value={author} onChange={handleInputChange} id="input-name" className='form-control' type="text"/>
            </div>
            <div>
                <label className='label-form'>Date</label>
                <input name="date" value={date} onChange={handleInputChange} id="input-name" className='form-control' type="text"/>
            </div>
            <div>
                <label className='label-form'>Genre</label>
                <input name="genre" value={genre} onChange={handleInputChange} id="input-name" className='form-control' type="text"/>
            </div>
            <div>
                <label className='label-form'>Image</label>
                <input type="file" name="bookImgFile" onChange={handleInputFileChange}></input>
            </div>
            <input type="submit" className='btn btn-primary mt-3' value="Add book"/>
        </form>
        
    </div>
    );
}

export default Bookform;