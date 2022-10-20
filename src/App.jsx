import React from 'react';
import { useState, useEffect } from 'react';
import Booklist from './pages/Booklist/Booklist';
import Addbook from './pages/Addbook/Addbook';
import Navbar from './components/Navbar';
import Welcome from './pages/Home/Welcome';
import { Routes, Route } from 'react-router-dom';
import Editbook from './pages/Editbook/Editbook';
import { getAllBooks } from './services/bookServices';
import "./App.css"

function App(props) {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const run = async()=>{
            const listBooks = await getAllBooks()
            console.log(listBooks)
            setBooks(listBooks)
        }
        
        run()
    },[])

    return (
        <div>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Welcome />}/>
                <Route path="/booklist" element={<Booklist books={books} setBooks={setBooks}/>}/>
                <Route path="/addbook" element={<Addbook books={books} setBooks={setBooks}/>}/>
                <Route path="/edit/:id" element={<Editbook books={books} setBooks={setBooks}/>}/>
            </Routes>
        </div>
    );
}

export default App;