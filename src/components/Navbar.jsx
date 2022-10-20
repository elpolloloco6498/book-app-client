import React from 'react';
import { Link } from 'react-router-dom';
import bookLogo from "../assets/book-icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
    return (
        <div className='p-3 bg-light'>
            <nav className='d-flex gap-3 align-items-center'>
            <span className="site-title">The Library</span>
            <img width={40} src={bookLogo} alt="logo"/>
            <Link className='link' to="/"><FontAwesomeIcon icon={faHouse} />Home</Link>
                <Link className='link' to="/booklist"><FontAwesomeIcon icon={faBook} />Booklist</Link>
                <Link className='link' to="/addbook"><FontAwesomeIcon icon={faPlus} />Add Book</Link>
            </nav>
        </div>
    );
}

export default Navbar;