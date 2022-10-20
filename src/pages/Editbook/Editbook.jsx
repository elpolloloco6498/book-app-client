import React from 'react';
import { useParams } from 'react-router-dom';
import Bookform from '../../components/Bookform';
import { updateBook } from '../../services/bookServices';

function Editbook({books, setBooks}) {
    const {id} = useParams()
    //console.log(id)
    const bookToEdit = books.find(book => book._id === id)
    //console.log(bookToEdit)
    const handleOnSubmit = async(book) => {
        const filteredBooks = books.filter(book => book._id !== id)
        const update = await updateBook(book, id)
        console.log(update)
        setBooks([...filteredBooks, update])
    }

    return (
        <div className='container-app bg-books'>
            <h2 className='text-center page-title'>Edit book</h2>
            <Bookform books={bookToEdit} handleOnSubmit={handleOnSubmit}/>
        </div>
    );
}

export default Editbook;