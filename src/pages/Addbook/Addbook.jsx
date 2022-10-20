import React from 'react';
import Bookform from '../../components/Bookform';
import { addBook } from '../../services/bookServices';

function Addbook({books, setBooks}) {
    const handleOnSubmit = async(book)=>{
        console.log(book)
        const bookAdded = await addBook(book)
        console.log(bookAdded)
        setBooks([bookAdded, ...books])
    }

    return (
        <div className='container-app bg-books'>
            <h2 className='text-center page-title'>Add book</h2>
            <Bookform setBooks={setBooks} handleOnSubmit={handleOnSubmit}/>
        </div>
    );
}

export default Addbook;