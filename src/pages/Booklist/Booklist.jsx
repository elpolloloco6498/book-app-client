import React from 'react';
import Book from "../../components/Book"
import { deleteBook } from '../../services/bookServices';

function Booklist({books, setBooks}) {
    const handleDeleteBook = async(id) => {
        await deleteBook(id)
        setBooks(books.filter(book => book._id !== id))
    }

    return (
        <div className='container-app bg-books'>
            <h2 className='text-center page-title'>Booklist</h2>
            <div className="row">
                {books.map(
                    book => (
                        <div className="col-sm">
                            <Book key={book._id} book={book} handleDeleteBook={handleDeleteBook}/>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Booklist;